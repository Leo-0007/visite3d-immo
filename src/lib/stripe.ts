/**
 * Stripe — Client + utilitaires
 *
 * Env vars : STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET
 */

import Stripe from "stripe";

let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) throw new Error("STRIPE_SECRET_KEY manquant");
    _stripe = new Stripe(key, { apiVersion: "2026-04-22.dahlia" });
  }
  return _stripe;
}

export function getWebhookSecret(): string {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) throw new Error("STRIPE_WEBHOOK_SECRET manquant");
  return secret;
}

/**
 * Known Stripe price IDs mapped to internal pack names.
 * Updated when new prices are created.
 */
const PRICE_TO_PACK: Record<string, string> = {
  // Solo 49 CHF
  "price_1TZ9bQCh2LyYym5Jf7Lvtaz6": "solo",
  // Pack Immo 89 CHF
  "price_1TZ9bSCh2LyYym5Js38pMUzV": "pack-immo",
  // Pack Agence 399 CHF
  "price_1TZ8l8Ch2LyYym5JZYd5zy4f": "pack-agence",
};

/**
 * Map Stripe checkout session to internal pack name.
 *
 * Resolution order:
 * 1. Explicit metadata.pack (set via Checkout Sessions API)
 * 2. Price ID lookup (reliable even with promo codes at 0 CHF)
 * 3. Amount-based fallback (for legacy sessions)
 */
export async function resolvePackFromSession(
  session: Stripe.Checkout.Session
): Promise<string> {
  // 1. Explicit metadata
  const meta = session.metadata;
  if (meta?.pack) return meta.pack;

  // 2. Resolve from line_items price ID
  try {
    const expanded = await getStripe().checkout.sessions.listLineItems(
      session.id,
      { limit: 1 }
    );
    const priceId = expanded.data[0]?.price?.id;
    if (priceId && PRICE_TO_PACK[priceId]) {
      return PRICE_TO_PACK[priceId];
    }
    // Check product name as fallback
    const productId = expanded.data[0]?.price?.product;
    if (productId && typeof productId === "string") {
      const product = await getStripe().products.retrieve(productId);
      const name = product.name.toLowerCase();
      if (name.includes("agence")) return "pack-agence";
      if (name.includes("immo")) return "pack-immo";
      if (name.includes("solo")) return "solo";
    }
  } catch {
    // If line_items fetch fails, continue to amount fallback
  }

  // 3. Amount-based fallback (does NOT work with 100% promo codes)
  const amount = session.amount_total;
  if (!amount) return "solo";
  const chf = amount / 100;
  if (chf >= 350) return "pack-agence";
  if (chf >= 70) return "pack-immo";
  return "solo";
}

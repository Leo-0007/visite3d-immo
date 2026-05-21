/**
 * POST /api/stripe/webhook
 *
 * Gere les evenements Stripe :
 * - checkout.session.completed -> cree l'upload + alerte Telegram
 * - payment_intent.payment_failed -> log erreur
 *
 * Idempotence via stripe_events table
 */

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getStripe, getWebhookSecret, resolvePackFromSession } from "@/lib/stripe";
import { supabaseAdmin } from "@/lib/supabase/server";
import { alertNewPayment, alertNewUpload } from "@/lib/telegram";
import { sendUploadReceived } from "@/lib/brevo";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(body, sig, getWebhookSecret());
  } catch (err) {
    const message = err instanceof Error ? err.message : "Invalid signature";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  const db = supabaseAdmin();

  // Idempotence check
  const { data: existing } = await db
    .from("stripe_events")
    .select("id")
    .eq("event_id", event.id)
    .single();

  if (existing) {
    return NextResponse.json({ received: true, duplicate: true });
  }

  // Store event for idempotence
  await db.from("stripe_events").insert({
    event_id: event.id,
    type: event.type,
    processed_at: new Date().toISOString(),
  });

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const email = session.customer_details?.email ?? session.customer_email ?? "";
      const pack = await resolvePackFromSession(session);
      const address = session.metadata?.address ?? "";
      const amount = ((session.amount_total ?? 0) / 100).toString();

      // Create upload record
      await db.from("uploads").insert({
        email,
        address,
        pack,
        status: "received",
        stripe_payment_id: session.payment_intent as string,
      });

      // Alert Telegram
      await alertNewPayment(amount, pack, email);
      if (address) {
        await alertNewUpload(address, pack, email);
      }

      // Send confirmation email
      if (email) {
        await sendUploadReceived(email, address || "A renseigner");
      }

      break;
    }

    case "payment_intent.payment_failed": {
      const intent = event.data.object as Stripe.PaymentIntent;
      console.error(
        `[Stripe] Payment failed: ${intent.id} — ${intent.last_payment_error?.message}`
      );
      break;
    }
  }

  return NextResponse.json({ received: true });
}

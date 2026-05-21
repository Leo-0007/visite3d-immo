"use client";

import { useSearchParams } from "next/navigation";
import { Check, Package, Building2, Crown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { CONTACT_EMAIL } from "@/lib/constants";
import { FadeIn } from "@/components/animations";

/* ─── Pack configs ─── */

interface PackConfig {
  icon: typeof Check;
  title: string;
  subtitle: string;
  color: string;
  price: string;
  deliverables: string[];
  steps: { status: "done" | "pending"; label: string }[];
  upgrade?: { text: string; href: string; cta: string };
}

const packConfigs: Record<string, PackConfig> = {
  solo: {
    icon: Check,
    title: "Votre visite 3D est commandee !",
    subtitle: "Livraison en 24h apres reception de votre video",
    color: "emerald",
    price: "49 CHF",
    deliverables: [
      "Visite 3D navigable (lien + embed)",
      "Miniature optimisee Homegate",
      "QR code vitrine imprimable",
    ],
    steps: [
      { status: "done", label: "Paiement confirme" },
      { status: "pending", label: "Email avec instructions envoye (dans 5 min)" },
      { status: "pending", label: "Filmez votre bien (guide ci-dessous)" },
      { status: "pending", label: "Envoyez-nous votre video" },
      { status: "pending", label: "Visite 3D livree en 24h" },
    ],
    upgrade: {
      text: "Passez au Pack Immo pour ajouter le plan 2D, les photos HD et le texte d'annonce IA. Payez uniquement la difference (40 CHF).",
      href: `mailto:${CONTACT_EMAIL}?subject=Visite3D%20-%20Upgrade%20Solo%20vers%20Pack%20Immo`,
      cta: "Upgrader maintenant",
    },
  },
  "pack-immo": {
    icon: Package,
    title: "Pack Immo commande !",
    subtitle:
      "Votre dossier complet pret a publier sur Homegate livre en 24h",
    color: "blue",
    price: "89 CHF",
    deliverables: [
      "Visite 3D navigable",
      "Plan d'etage 2D automatique",
      "5 photos HD (format Homegate)",
      "Texte d'annonce IA en francais",
      "Miniature optimisee Homegate",
      "QR code vitrine",
      "Dossier publication complet",
    ],
    steps: [
      { status: "done", label: "Paiement confirme — Pack Immo 89 CHF" },
      { status: "pending", label: "Email avec instructions envoye (dans 5 min)" },
      { status: "pending", label: "Filmez votre bien selon notre guide" },
      { status: "pending", label: "Envoyez votre video" },
      { status: "pending", label: "Dossier complet livre en 24h" },
    ],
  },
  "pack-agence": {
    icon: Building2,
    title: "Pack Agence active — 10 biens inclus",
    subtitle: "Votre dashboard est en cours de configuration",
    color: "violet",
    price: "399 CHF",
    deliverables: [
      "10 biens en Pack Immo complet",
      "Dashboard client dedie",
      "Branding agence (votre logo)",
      "Support prioritaire par email",
      "Hebergement 12 mois inclus",
    ],
    steps: [
      { status: "done", label: "Paiement 399 CHF confirme" },
      { status: "pending", label: "Dashboard en cours de creation (< 1h)" },
      { status: "pending", label: "Email de bienvenue avec acces dashboard" },
      { status: "pending", label: "Formation rapide (video 5 min)" },
      { status: "pending", label: "Premier bien a envoyer quand vous voulez" },
    ],
  },
  regie: {
    icon: Crown,
    title: "Offre Regie confirmee",
    subtitle:
      "Votre account manager vous contacte dans les 2h",
    color: "amber",
    price: "Sur mesure",
    deliverables: [
      "Volume illimite",
      "API d'integration",
      "Marque blanche complete",
      "Account manager personnel",
      "Publication auto Homegate (Q3 2026)",
    ],
    steps: [
      { status: "done", label: "Demande recue" },
      { status: "pending", label: "Account manager assigne (< 2h)" },
      { status: "pending", label: "Appel de decouverte planifie" },
      { status: "pending", label: "Offre personnalisee envoyee" },
      { status: "pending", label: "Onboarding et premier bien" },
    ],
  },
};

const colorMap: Record<string, { bg: string; ring: string; text: string }> = {
  emerald: {
    bg: "bg-emerald-500/10",
    ring: "ring-emerald-500/20",
    text: "text-emerald-400",
  },
  blue: {
    bg: "bg-blue-500/10",
    ring: "ring-blue-500/20",
    text: "text-blue-400",
  },
  violet: {
    bg: "bg-violet-500/10",
    ring: "ring-violet-500/20",
    text: "text-violet-400",
  },
  amber: {
    bg: "bg-amber-500/10",
    ring: "ring-amber-500/20",
    text: "text-amber-400",
  },
};

/* ─── Component ─── */

export function ConfirmationContent() {
  const searchParams = useSearchParams();
  const packId = searchParams.get("pack") ?? "solo";
  const config = packConfigs[packId] ?? packConfigs.solo;
  const colors = colorMap[config.color] ?? colorMap.emerald;
  const Icon = config.icon;

  const doneCount = config.steps.filter((s) => s.status === "done").length;
  const progressPct = (doneCount / config.steps.length) * 100;

  return (
    <main className="min-h-screen bg-[#060a13] relative">
      {/* BG effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/3 top-0 h-[500px] w-[500px] rounded-full bg-emerald-600/[0.06] blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 h-[400px] w-[400px] rounded-full bg-blue-600/[0.04] blur-[100px]" />
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      <div className="relative mx-auto max-w-2xl px-6 py-20">
        {/* ── Progress bar ── */}
        <FadeIn>
          <div className="mb-10">
            <div className="h-1.5 w-full rounded-full bg-white/[0.06]">
              <div
                className="h-full rounded-full bg-emerald-500 transition-all duration-700"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <p className="mt-2 text-right text-[11px] text-white/20">
              Etape {doneCount}/{config.steps.length}
            </p>
          </div>
        </FadeIn>

        {/* ── Header ── */}
        <FadeIn delay={0.1}>
          <div className="text-center">
            <div
              className={cn(
                "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full ring-1",
                colors.bg,
                colors.ring
              )}
            >
              <Icon className={cn("h-8 w-8", colors.text)} />
            </div>
            <h1 className="text-3xl font-bold text-white sm:text-4xl">
              {config.title}
            </h1>
            <p className="mt-3 text-base text-white/40">{config.subtitle}</p>
          </div>
        </FadeIn>

        {/* ── Timeline ── */}
        <FadeIn delay={0.2}>
          <div className="mt-10 space-y-4">
            {config.steps.map((step, i) => (
              <div
                key={i}
                className="glass flex items-start gap-4 rounded-xl px-5 py-4"
              >
                <div
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                    step.status === "done"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-white/[0.04] text-white/20"
                  )}
                >
                  {step.status === "done" ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    i + 1
                  )}
                </div>
                <p
                  className={cn(
                    "text-sm leading-relaxed pt-1",
                    step.status === "done"
                      ? "text-white/60"
                      : "text-white/30"
                  )}
                >
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ── Deliverables ── */}
        <FadeIn delay={0.3}>
          <div className="mt-10 glass rounded-2xl p-6 sm:p-8">
            <h2 className="text-sm font-semibold text-white/50 uppercase tracking-[0.1em] mb-4">
              Vos livrables {config === packConfigs.solo ? "Solo" : ""}
              {config === packConfigs["pack-immo"] ? "Pack Immo" : ""}
              {config === packConfigs["pack-agence"] ? "Pack Agence" : ""}
              {config === packConfigs.regie ? "Regie" : ""}
            </h2>
            <ul className="space-y-3">
              {config.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/40"
                >
                  <Check
                    className="h-4 w-4 shrink-0 text-emerald-400/70"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* ── Upgrade suggestion (Solo only) ── */}
        {config.upgrade && (
          <FadeIn delay={0.35}>
            <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">
              <p className="text-sm text-white/40 leading-relaxed">
                {config.upgrade.text}
              </p>
              <a
                href={config.upgrade.href}
                className={cn(
                  buttonVariants({ size: "sm" }),
                  "mt-4 bg-blue-500 text-white hover:bg-blue-400 rounded-full text-xs font-semibold"
                )}
              >
                {config.upgrade.cta}
                <ArrowRight
                  className="ml-2 h-3 w-3"
                  aria-hidden="true"
                />
              </a>
            </div>
          </FadeIn>
        )}

        {/* ── Next step: filming guide (for Solo & Pack Immo) ── */}
        {(packId === "solo" || packId === "pack-immo") && (
          <FadeIn delay={0.4}>
            <div className="mt-10 glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-white mb-4">
                Etape suivante : filmez votre bien
              </h2>
              <div className="flex flex-wrap gap-4 mb-4">
                {["Lumiere naturelle", "Mode paysage", "5-10 min"].map(
                  (rule) => (
                    <span
                      key={rule}
                      className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 text-sm text-white/40"
                    >
                      {rule}
                    </span>
                  )
                )}
              </div>
              <a
                href="/guide-capture"
                className="text-sm text-blue-400/60 underline underline-offset-4 transition-colors hover:text-blue-400"
              >
                Voir le guide de capture complet
              </a>
            </div>
          </FadeIn>
        )}

        {/* ── Pack Agence: onboarding note ── */}
        {packId === "pack-agence" && (
          <FadeIn delay={0.4}>
            <div className="mt-10 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-6">
              <p className="text-sm text-white/40 leading-relaxed">
                Votre responsable compte vous contacte dans les 2h pour
                l&apos;onboarding. En attendant, vous pouvez consulter le{" "}
                <a
                  href="/guide-capture"
                  className="text-violet-400/70 underline underline-offset-4"
                >
                  guide de capture
                </a>{" "}
                et le{" "}
                <a
                  href="/guide-portails"
                  className="text-violet-400/70 underline underline-offset-4"
                >
                  guide portails
                </a>
                .
              </p>
            </div>
          </FadeIn>
        )}

        {/* ── Contact box ── */}
        <FadeIn delay={0.45}>
          <div className="mt-8 glass rounded-xl p-5 text-center">
            <p className="text-sm text-white/30">
              Questions ?{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-blue-400/50 underline underline-offset-4 hover:text-blue-400 transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </FadeIn>

        {/* ── Useful links ── */}
        <FadeIn delay={0.5}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
            <a
              href="/guide-capture"
              className="text-white/25 underline underline-offset-4 transition-colors hover:text-white/50"
            >
              Guide de capture
            </a>
            <a
              href="/guide-portails"
              className="text-white/25 underline underline-offset-4 transition-colors hover:text-white/50"
            >
              Guide portails
            </a>
            <a
              href="/"
              className="text-white/25 underline underline-offset-4 transition-colors hover:text-white/50"
            >
              Retour a l&apos;accueil
            </a>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}

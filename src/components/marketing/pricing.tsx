"use client";

import { Check, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { pricingPlans, upsells } from "@/content/pricing";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { CONTACT_EMAIL } from "@/lib/constants";
import { FadeIn } from "@/components/animations";

export function PricingSection() {
  const mainPlans = pricingPlans.filter((p) => p.id !== "regie");
  const regiePlan = pricingPlans.find((p) => p.id === "regie");

  return (
    <SectionWrapper id="tarifs" className="section-warm">
      <FadeIn>
        <div className="mb-14 md:mb-20 max-w-lg">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--v3d-blue)]">
            Tarifs
          </p>
          <h2 className="mt-3 text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-[var(--v3d-text)]">
            Un prix par bien.{" "}
            <span className="text-[var(--v3d-text-muted)]">
              Pas d{"'"}abonnement.
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--v3d-text-secondary)]">
            Payez uniquement ce que vous utilisez. Sans engagement, sans surprise.
          </p>
        </div>
      </FadeIn>

      {/* 3 main plans */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {mainPlans.map((plan, i) => (
          <FadeIn key={plan.id} delay={i * 0.1}>
            <div
              className={cn(
                "relative flex h-full flex-col rounded-xl p-7",
                plan.highlighted
                  ? "bg-white ring-2 ring-[var(--v3d-blue)] shadow-lg"
                  : "bg-white border border-[var(--v3d-warm-border)]"
              )}
            >
              {/* Badge */}
              {plan.badge && (
                <span className="absolute -top-3 left-6 rounded-full bg-[var(--v3d-blue)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
                  {plan.badge}
                </span>
              )}

              {/* Header */}
              <div className="mb-6">
                <p className="text-sm font-medium text-[var(--v3d-text-secondary)]">
                  {plan.name}
                </p>
                <div className="mt-2 flex items-baseline gap-1.5">
                  {plan.price !== null ? (
                    <>
                      <span className="text-4xl font-bold tracking-tight text-[var(--v3d-text)]">
                        {plan.price}
                      </span>
                      <span className="text-sm text-[var(--v3d-text-muted)]">
                        CHF
                      </span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold tracking-tight text-[var(--v3d-text)]">
                      Sur mesure
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-[var(--v3d-text-muted)]">
                  {plan.priceLabel}
                </p>
                {plan.priceSubLabel && (
                  <p className="mt-1 text-xs font-medium text-[var(--v3d-blue)]">
                    {plan.priceSubLabel}
                  </p>
                )}
              </div>

              {/* Description */}
              <p className="mb-6 text-sm leading-relaxed text-[var(--v3d-text-secondary)]">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="mb-6 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-[var(--v3d-text-secondary)]"
                  >
                    <Check
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Not included */}
              {plan.notIncluded && plan.notIncluded.length > 0 && (
                <ul className="mb-6 flex flex-col gap-2 border-t border-[var(--v3d-warm-border)] pt-4">
                  {plan.notIncluded.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-[var(--v3d-text-muted)]"
                    >
                      <X
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-40"
                        aria-hidden="true"
                      />
                      <span className="line-through">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* CTA */}
              {plan.stripeLink ? (
                <a
                  href={plan.stripeLink}
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "w-full rounded-lg py-5 text-sm font-semibold transition-all",
                    plan.highlighted
                      ? "bg-[var(--v3d-blue)] text-white shadow-md hover:bg-[#164060]"
                      : "border border-[var(--v3d-warm-border)] bg-[var(--v3d-warm-bg)] text-[var(--v3d-text-secondary)] hover:bg-[var(--v3d-warm-border)] hover:text-[var(--v3d-text)]"
                  )}
                >
                  {plan.cta}
                </a>
              ) : (
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Visite3D%20-%20Offre%20${encodeURIComponent(plan.name)}`}
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "w-full rounded-lg py-5 text-sm font-semibold border border-[var(--v3d-warm-border)] bg-[var(--v3d-warm-bg)] text-[var(--v3d-text-secondary)] hover:bg-[var(--v3d-warm-border)] hover:text-[var(--v3d-text)] transition-all"
                  )}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Régie — separate strip, not a 4th card */}
      {regiePlan && (
        <FadeIn delay={0.3}>
          <div className="mt-8 flex flex-col items-center justify-between gap-6 rounded-xl border border-[var(--v3d-warm-border)] bg-white px-8 py-6 sm:flex-row">
            <div>
              <p className="text-sm font-semibold text-[var(--v3d-text)]">
                {regiePlan.name} — Volume illimit{"é"}, white-label
              </p>
              <p className="mt-1 text-sm text-[var(--v3d-text-secondary)]">
                D{"è"}s 29 CHF/bien. API, branding, account manager d{"é"}di{"é"}.
              </p>
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Visite3D%20-%20Offre%20Regie`}
              className={cn(
                buttonVariants({ size: "sm" }),
                "shrink-0 rounded-lg border border-[var(--v3d-warm-border)] bg-[var(--v3d-warm-bg)] px-6 text-sm font-semibold text-[var(--v3d-text-secondary)] hover:text-[var(--v3d-text)] transition-all"
              )}
            >
              Nous contacter
              <ArrowRight className="ml-2 h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </FadeIn>
      )}

      {/* Upsells — compact row */}
      <FadeIn delay={0.4}>
        <div className="mt-14">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.15em] text-[var(--v3d-text-muted)]">
            Options {"à"} la carte
          </p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {upsells.map((upsell) => (
              <div
                key={upsell.id}
                className="rounded-lg border border-[var(--v3d-warm-border)] bg-white px-4 py-4 transition-colors hover:border-[var(--v3d-blue)]/20"
              >
                <p className="text-sm font-semibold text-[var(--v3d-text)]">
                  {upsell.name}
                </p>
                <p className="mt-1 text-base font-bold text-[var(--v3d-blue)]">
                  {upsell.price}
                </p>
                <p className="mt-1 text-[11px] leading-snug text-[var(--v3d-text-muted)]">
                  {upsell.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Bottom note */}
      <FadeIn delay={0.5}>
        <p className="mt-8 text-sm text-[var(--v3d-text-muted)]">
          Questions sur les tarifs ?{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Visite3D%20-%20Question%20tarifs`}
            className="text-[var(--v3d-blue)] underline underline-offset-4 transition-colors hover:text-[#164060]"
          >
            Contactez-nous
          </a>
        </p>
      </FadeIn>
    </SectionWrapper>
  );
}

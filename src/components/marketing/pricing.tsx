"use client";

import { Check, X, Zap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { pricingPlans, upsells } from "@/content/pricing";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { CONTACT_EMAIL } from "@/lib/constants";
import {
  FadeIn,
  Stagger,
  StaggerItem,
  HoverScale,
} from "@/components/animations";

export function PricingSection() {
  return (
    <SectionWrapper id="tarifs" className="section-warm">
      <FadeIn>
        <SectionHeader
          badge="Tarifs"
          title="Un prix par bien. Pas d'abonnement."
          description="Filmez, envoyez, recevez. Payez uniquement ce que vous utilisez."
        />
      </FadeIn>

      {/* Plan cards — 4 columns on desktop */}
      <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pricingPlans.map((plan) => (
          <StaggerItem key={plan.id}>
            <HoverScale>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-2xl p-6",
                  plan.highlighted
                    ? "bg-white ring-2 ring-[var(--v3d-blue)] shadow-xl"
                    : "bg-white border border-[var(--v3d-warm-border)] shadow-sm"
                )}
              >
                {/* Badge */}
                {plan.badge && (
                  <span
                    className={cn(
                      "absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white shadow-md",
                      plan.highlighted
                        ? "bg-[var(--v3d-blue)] shadow-[var(--v3d-blue)]/20"
                        : "bg-[var(--v3d-text-muted)] shadow-black/5"
                    )}
                  >
                    {plan.badge}
                  </span>
                )}

                {/* Header */}
                <div className="mb-5">
                  <p className="text-sm font-medium text-[var(--v3d-text-secondary)]">
                    {plan.name}
                  </p>

                  <div className="mt-3 flex items-baseline gap-1">
                    {plan.price !== null ? (
                      <>
                        <span className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-[var(--v3d-text)]">
                          {plan.price}
                        </span>
                        <span className="text-sm text-[var(--v3d-text-muted)]">CHF</span>
                      </>
                    ) : (
                      <span className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight text-[var(--v3d-text)]">
                        Sur mesure
                      </span>
                    )}
                  </div>

                  <p className="mt-0.5 text-xs text-[var(--v3d-text-muted)]">
                    {plan.priceLabel}
                  </p>

                  {plan.priceSubLabel && (
                    <p className="mt-1 text-xs font-medium text-[var(--v3d-blue)]">
                      {plan.priceSubLabel}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="mb-5 text-[13px] leading-relaxed text-[var(--v3d-text-secondary)]">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="mb-5 flex flex-1 flex-col gap-2.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-[13px] text-[var(--v3d-text-secondary)]"
                    >
                      <Check
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Not included (Solo only) */}
                {plan.notIncluded && plan.notIncluded.length > 0 && (
                  <ul className="mb-6 flex flex-col gap-2 border-t border-[var(--v3d-warm-border)] pt-3">
                    {plan.notIncluded.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[13px] text-[var(--v3d-text-muted)]"
                      >
                        <X
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--v3d-text-muted)]/50"
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
                      "w-full rounded-lg py-4 text-sm font-semibold transition-all",
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
                      "w-full rounded-lg py-4 text-sm font-semibold border border-[var(--v3d-warm-border)] bg-[var(--v3d-warm-bg)] text-[var(--v3d-text-secondary)] hover:bg-[var(--v3d-warm-border)] hover:text-[var(--v3d-text)] transition-all"
                    )}
                  >
                    {plan.cta}
                    <ArrowRight
                      className="ml-2 h-4 w-4"
                      aria-hidden="true"
                    />
                  </a>
                )}

                {/* Delivery badge */}
                <p className="mt-3 text-center text-[11px] text-[var(--v3d-text-muted)]">
                  <Zap
                    className="mr-1 inline h-3 w-3"
                    aria-hidden="true"
                  />
                  Livraison {plan.deliveryTime}
                </p>
              </div>
            </HoverScale>
          </StaggerItem>
        ))}
      </Stagger>

      {/* Upsells strip */}
      <FadeIn delay={0.3}>
        <div className="mt-14">
          <p className="mb-5 text-center text-xs font-medium uppercase tracking-[0.2em] text-[var(--v3d-text-muted)]">
            Options a la carte
          </p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {upsells.map((upsell) => (
              <div
                key={upsell.id}
                className="rounded-xl border border-[var(--v3d-warm-border)] bg-white px-3 py-4 text-center transition-colors hover:border-[var(--v3d-blue)]/20"
              >
                <p className="text-[13px] font-semibold text-[var(--v3d-text)]">
                  {upsell.name}
                </p>
                <p className="mt-1 text-base font-bold text-[var(--v3d-blue)]">
                  {upsell.price}
                </p>
                <p className="mt-1 text-[10px] text-[var(--v3d-text-muted)] leading-snug">
                  {upsell.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Bottom note */}
      <FadeIn delay={0.4}>
        <p className="mt-8 text-center text-sm text-[var(--v3d-text-muted)]">
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

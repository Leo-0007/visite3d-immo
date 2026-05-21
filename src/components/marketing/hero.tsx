"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Badge */}
        <FadeIn>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--v3d-warm-border)] bg-[var(--v3d-warm-bg)] px-4 py-1.5 text-xs font-medium text-[var(--v3d-text-secondary)]">
            <span className="flex h-5 w-5 items-center justify-center text-sm">
              &#127464;&#127469;
            </span>
            Service suisse — Moutier, BE
          </span>
        </FadeIn>

        {/* H1 */}
        <FadeIn delay={0.1}>
          <h1 className="mt-8 text-[clamp(2.25rem,5.5vw,4.5rem)] font-bold tracking-[-0.035em] leading-[1.05] text-[var(--v3d-text)]">
            Vos acheteurs visitent
            <br />
            avant de se d{"é"}placer
          </h1>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.2}>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-[var(--v3d-text-secondary)]">
            Filmez avec votre smartphone.
            Recevez une visite 3D navigable en 24h.
            <span className="font-semibold text-[var(--v3d-text)]"> D{"è"}s 49 CHF.</span>
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#tarifs"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-[var(--v3d-blue)] hover:bg-[#164060] text-white text-sm font-semibold px-8 py-6 rounded-lg shadow-sm transition-all"
              )}
            >
              Voir les offres
            </a>
            <a
              href="#demo"
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "border border-[var(--v3d-warm-border)] text-[var(--v3d-text-secondary)] hover:bg-[var(--v3d-warm-bg)] rounded-lg text-sm px-8 py-6 transition-all"
              )}
            >
              Explorer la d{"é"}mo 3D
            </a>
          </div>
        </FadeIn>

        {/* Trust line */}
        <FadeIn delay={0.4}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[var(--v3d-text-muted)]">
            <span className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              Sans engagement
            </span>
            <span className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              Livraison 24h
            </span>
            <span className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              Paiement s{"é"}curis{"é"}
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

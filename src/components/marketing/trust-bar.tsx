"use client";

import { FadeIn } from "@/components/animations";

/**
 * TrustBar — bande minimaliste de crédibilité.
 * Pas de compteurs animés (risque de bug), pas de stats vides.
 * Juste des preuves concrètes.
 */
export function TrustBar() {
  return (
    <section aria-label="Compatibilité portails" className="py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-12">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--v3d-text-muted)]">
              Compatible avec
            </p>
            <div className="flex items-center gap-8">
              <span className="text-base font-bold tracking-tight text-[var(--v3d-text)]">
                Homegate
              </span>
              <span className="h-4 w-px bg-[var(--v3d-warm-border)]" />
              <span className="text-base font-bold tracking-tight text-[var(--v3d-text)]">
                ImmoScout24
              </span>
              <span className="h-4 w-px bg-[var(--v3d-warm-border)]" />
              <span className="text-base font-bold tracking-tight text-[var(--v3d-text)]">
                Immoscout
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

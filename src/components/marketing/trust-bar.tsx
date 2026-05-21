"use client";

import { stats } from "@/content/stats";
import { FadeIn, Stagger, StaggerItem, Counter } from "@/components/animations";

export function TrustBar() {
  return (
    <section aria-label="Chiffres clés" className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="gradient-divider mb-14" />

        <FadeIn>
          <div className="rounded-2xl border border-[var(--v3d-warm-border)] bg-[var(--v3d-warm-bg)] px-6 py-10 sm:px-10 sm:py-12">
            <Stagger className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
              {stats.map((stat) => (
                <StaggerItem key={stat.label} className="text-center">
                  <p className="text-[2.5rem] font-bold tracking-[-0.04em] text-[var(--v3d-text)]">
                    <Counter
                      target={Number(stat.value)}
                      suffix={stat.suffix}
                    />
                  </p>
                  <p className="mt-2 text-xs text-[var(--v3d-text-muted)] uppercase tracking-[0.15em]">
                    {stat.label}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </FadeIn>

        <div className="gradient-divider mt-14" />
      </div>
    </section>
  );
}

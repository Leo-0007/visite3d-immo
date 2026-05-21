"use client";

import { testimonials } from "@/content/testimonials";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { Stagger, StaggerItem, HoverScale } from "@/components/animations";

export function TestimonialsSection() {
  return (
    <SectionWrapper id="temoignages" className="section-warm">
      <SectionHeader
        badge="T&eacute;moignages"
        title="Ils nous font confiance"
      />

      <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <StaggerItem key={t.name}>
            <HoverScale>
              <article className="flex h-full flex-col rounded-2xl border border-[var(--v3d-warm-border)] bg-white p-6 sm:p-8 shadow-sm">
                {/* Decorative quote mark */}
                <span
                  className="select-none text-5xl font-bold leading-none text-[var(--v3d-blue)]/15"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                {/* Quote */}
                <blockquote className="-mt-2 flex-1 text-sm italic leading-relaxed text-[var(--v3d-text-secondary)]">
                  {t.quote}
                </blockquote>

                {/* Author */}
                <div className="mt-6 border-t border-[var(--v3d-warm-border)] pt-4">
                  <p className="text-sm font-semibold text-[var(--v3d-text)]">{t.name}</p>
                  <p className="mt-0.5 text-xs text-[var(--v3d-text-secondary)]">
                    {t.role} &middot; {t.company}
                  </p>
                  <p className="mt-0.5 text-[11px] text-[var(--v3d-text-muted)]">
                    {t.location}
                  </p>
                </div>
              </article>
            </HoverScale>
          </StaggerItem>
        ))}
      </Stagger>
    </SectionWrapper>
  );
}

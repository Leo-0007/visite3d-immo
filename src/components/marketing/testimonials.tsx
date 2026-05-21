"use client";

import { testimonials } from "@/content/testimonials";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { FadeIn } from "@/components/animations";

export function TestimonialsSection() {
  return (
    <SectionWrapper id="temoignages" className="section-warm">
      <FadeIn>
        <div className="mb-14 md:mb-20 max-w-lg">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--v3d-blue)]">
            Retours clients
          </p>
          <h2 className="mt-3 text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-[var(--v3d-text)]">
            Ils utilisent{" "}
            <span className="text-[var(--v3d-text-muted)]">Visite3D</span>
          </h2>
        </div>
      </FadeIn>

      {/* Testimonials — varied grid layout, not 3 identical cards */}
      <div className="grid gap-6 md:grid-cols-12">
        {testimonials.map((t, i) => (
          <FadeIn
            key={t.name}
            delay={i * 0.1}
            className={
              i === 0
                ? "md:col-span-7"
                : i === 1
                  ? "md:col-span-5"
                  : "md:col-span-12"
            }
          >
            <article
              className={`flex h-full flex-col rounded-xl border border-[var(--v3d-warm-border)] bg-white ${
                i === 2 ? "p-8 md:flex-row md:items-center md:gap-12" : "p-7"
              }`}
            >
              {/* Quote */}
              <blockquote
                className={`flex-1 text-base leading-relaxed text-[var(--v3d-text-secondary)] ${
                  i === 2 ? "md:text-lg" : ""
                }`}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div
                className={`mt-6 flex items-center gap-4 ${
                  i === 2
                    ? "md:mt-0 md:shrink-0 md:border-l md:border-[var(--v3d-warm-border)] md:pl-12"
                    : "border-t border-[var(--v3d-warm-border)] pt-5"
                }`}
              >
                {/* Initials avatar */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--v3d-warm-bg)] text-sm font-bold text-[var(--v3d-text-muted)]">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--v3d-text)]">
                    {t.name}
                  </p>
                  <p className="text-xs text-[var(--v3d-text-secondary)]">
                    {t.role} &middot; {t.location}
                  </p>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}

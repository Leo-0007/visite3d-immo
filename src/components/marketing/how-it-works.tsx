"use client";

import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { FadeIn } from "@/components/animations";

const steps = [
  {
    number: "01",
    title: "Filmez",
    detail: "5 minutes",
    description:
      "Un simple panoramique lent avec votre smartphone. Aucun matériel professionnel.",
  },
  {
    number: "02",
    title: "Envoyez",
    detail: "2 clics",
    description:
      "Via notre formulaire sécurisé ou par WeTransfer. Nos techniciens prennent le relais.",
  },
  {
    number: "03",
    title: "Recevez",
    detail: "24 heures",
    description:
      "Visite 3D navigable, lien de partage, code embed et miniature HD pour vos annonces.",
  },
];

export function HowItWorksSection() {
  return (
    <SectionWrapper id="processus">
      <FadeIn>
        <div className="mb-14 md:mb-20">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--v3d-blue)]">
            Processus
          </p>
          <h2 className="mt-3 text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-[var(--v3d-text)] max-w-lg">
            De votre smartphone{" "}
            <span className="text-[var(--v3d-text-muted)]">
              {"à"} une visite 3D
            </span>
          </h2>
        </div>
      </FadeIn>

      {/* Steps — editorial layout, not 3 identical cards */}
      <div className="space-y-0">
        {steps.map((step, i) => (
          <FadeIn key={step.number} delay={i * 0.1}>
            <div
              className={cn(
                "grid items-start gap-6 py-10 md:grid-cols-12 md:gap-10",
                i < steps.length - 1 && "border-b border-[var(--v3d-warm-border)]"
              )}
            >
              {/* Step number — large, light */}
              <div className="md:col-span-2">
                <span className="text-[3.5rem] font-bold leading-none tracking-[-0.04em] text-[var(--v3d-warm-border)]">
                  {step.number}
                </span>
              </div>

              {/* Title + detail */}
              <div className="md:col-span-3">
                <h3 className="text-xl font-semibold tracking-tight text-[var(--v3d-text)]">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-[var(--v3d-blue)]">
                  {step.detail}
                </p>
              </div>

              {/* Description */}
              <div className="md:col-span-7">
                <p className="text-base leading-relaxed text-[var(--v3d-text-secondary)] max-w-md">
                  {step.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}


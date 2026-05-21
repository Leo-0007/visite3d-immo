"use client";

import { Smartphone, Upload, Eye } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn, Stagger, StaggerItem, HoverScale } from "@/components/animations";
import { steps } from "@/content/how-it-works";

const iconMap = {
  Smartphone,
  Upload,
  Eye,
} as const;

export function HowItWorksSection() {
  return (
    <SectionWrapper id="processus">
      <FadeIn>
        <SectionHeader
          badge="Comment ça marche"
          title="De votre smartphone à une visite 3D en 24h"
        />
      </FadeIn>

      <Stagger className="relative grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
        {/* Dashed connector line (desktop only) */}
        <div
          className="pointer-events-none absolute top-16 right-[calc(16.67%+1rem)] left-[calc(16.67%+1rem)] hidden h-px border-t-2 border-dashed border-[var(--v3d-warm-border)] md:block"
          aria-hidden="true"
        />

        {steps.map((step) => {
          const Icon = iconMap[step.icon as keyof typeof iconMap];

          return (
            <StaggerItem key={step.number}>
              <HoverScale>
                <div className="relative flex flex-col items-center rounded-2xl border border-[var(--v3d-warm-border)] bg-white p-8 text-center shadow-sm">
                  {/* Step number circle */}
                  <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--v3d-blue)] shadow-md">
                    <span className="text-lg font-bold text-white">
                      {step.number}
                    </span>
                    {/* Icon overlaid at bottom-right */}
                    <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[var(--v3d-warm-bg)]">
                      <Icon className="h-3.5 w-3.5 text-[var(--v3d-blue)]" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-lg font-semibold tracking-tight text-[var(--v3d-text)]">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-[var(--v3d-text-secondary)]">
                    {step.description}
                  </p>
                </div>
              </HoverScale>
            </StaggerItem>
          );
        })}
      </Stagger>
    </SectionWrapper>
  );
}

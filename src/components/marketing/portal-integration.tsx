"use client";

import { Globe, FileText, Zap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { portalIntegrationSteps } from "@/content/portals";
import {
  FadeIn,
  Stagger,
  StaggerItem,
  HoverScale,
} from "@/components/animations";

const stepIcons = [FileText, Globe, Zap] as const;

export function PortalIntegration() {
  return (
    <SectionWrapper id="portails">
      <FadeIn>
        <SectionHeader
          badge="Integration portails"
          title="Pret a publier sur Homegate en 5 minutes"
          description="Avec le Pack Immo, vous recevez un dossier complet. Il ne reste qu'a copier-coller."
        />
      </FadeIn>

      {/* Portal logos row */}
      <FadeIn delay={0.1}>
        <div className="mb-14 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <div className="flex items-center gap-3 rounded-xl border border-[var(--v3d-warm-border)] bg-white px-6 py-3 shadow-sm">
            <span className="text-lg font-bold text-[var(--v3d-text)]">Homegate</span>
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 border border-emerald-200">
              Compatible
            </span>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-[var(--v3d-warm-border)] bg-white px-6 py-3 shadow-sm">
            <span className="text-lg font-bold text-[var(--v3d-text)]">
              ImmoScout24
            </span>
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 border border-emerald-200">
              Compatible
            </span>
          </div>
        </div>
      </FadeIn>

      {/* Steps */}
      <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {portalIntegrationSteps.map((item, i) => {
          const Icon = stepIcons[i];
          return (
            <StaggerItem key={item.step}>
              <HoverScale>
                <div className="flex flex-col items-center rounded-2xl border border-[var(--v3d-warm-border)] bg-white p-8 text-center shadow-sm">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--v3d-blue)] shadow-md">
                    <Icon
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold tracking-tight text-[var(--v3d-text)]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--v3d-text-secondary)]">
                    {item.description}
                  </p>
                </div>
              </HoverScale>
            </StaggerItem>
          );
        })}
      </Stagger>

      {/* Coming soon badge */}
      <FadeIn delay={0.3}>
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--v3d-blue)]/20 bg-[var(--v3d-blue)]/5 px-5 py-2">
            <Zap
              className="h-4 w-4 text-[var(--v3d-blue)]"
              aria-hidden="true"
            />
            <span className="text-sm font-medium text-[var(--v3d-blue)]">
              Publication automatique Homegate — Q3 2026
            </span>
          </div>
        </div>
      </FadeIn>

      {/* CTA */}
      <FadeIn delay={0.4}>
        <div className="mt-8 text-center">
          <a
            href="#tarifs"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-lg bg-[var(--v3d-blue)] px-8 py-5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#164060]"
            )}
          >
            Voir le Pack Immo a 89 CHF
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}

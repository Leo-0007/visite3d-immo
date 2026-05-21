"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { FadeIn } from "@/components/animations";

const portalSteps = [
  {
    step: "1",
    title: "Recevez votre dossier",
    description:
      "Visite 3D, plan 2D, photos HD et texte d'annonce. Tout est prêt.",
  },
  {
    step: "2",
    title: "Copiez le lien 3D",
    description:
      "Un seul lien à coller dans le champ 'Visite virtuelle' de Homegate ou ImmoScout24.",
  },
  {
    step: "3",
    title: "Publiez en 5 minutes",
    description:
      "Photos renommées, texte prêt à copier. Votre annonce est en ligne.",
  },
];

export function PortalIntegration() {
  return (
    <SectionWrapper id="portails">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left — content */}
        <div className="lg:col-span-5">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--v3d-blue)]">
              Int{"é"}gration portails
            </p>
            <h2 className="mt-3 text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-[var(--v3d-text)]">
              Pr{"ê"}t {"à"} publier sur Homegate{" "}
              <span className="text-[var(--v3d-text-muted)]">
                en 5 minutes
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--v3d-text-secondary)]">
              Avec le Pack Immo, vous recevez un dossier complet.
              Il ne reste qu{"'"}{"à"} copier-coller.
            </p>
          </FadeIn>

          {/* Compatibility badges — inline */}
          <FadeIn delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Homegate", "ImmoScout24"].map((portal) => (
                <span
                  key={portal}
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--v3d-warm-border)] bg-white px-4 py-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span className="text-sm font-medium text-[var(--v3d-text)]">
                    {portal}
                  </span>
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Coming soon */}
          <FadeIn delay={0.15}>
            <p className="mt-6 text-xs text-[var(--v3d-text-muted)]">
              Publication automatique Homegate — Q3 2026
            </p>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.2}>
            <div className="mt-8">
              <a
                href="#tarifs"
                className={cn(
                  buttonVariants({ size: "default" }),
                  "rounded-lg bg-[var(--v3d-blue)] px-6 py-5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#164060]"
                )}
              >
                Voir le Pack Immo {"à"} 89 CHF
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Right — steps as numbered list */}
        <div className="lg:col-span-7">
          <div className="space-y-0">
            {portalSteps.map((item, i) => (
              <FadeIn key={item.step} delay={0.1 + i * 0.08}>
                <div
                  className={cn(
                    "flex gap-6 py-7",
                    i < portalSteps.length - 1 &&
                      "border-b border-[var(--v3d-warm-border)]"
                  )}
                >
                  <span className="text-3xl font-bold leading-none text-[var(--v3d-warm-border)]">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[var(--v3d-text)]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--v3d-text-secondary)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

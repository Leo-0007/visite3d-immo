"use client";

import { FadeIn, Stagger, StaggerItem } from "@/components/animations";

interface PainPoint {
  icon: string;
  title: string;
  description: string;
}

const problems: PainPoint[] = [
  {
    icon: "\u{1F4B8}",
    title: "Photographe professionnel",
    description: "300 à 500 CHF par bien, à chaque mandat.",
  },
  {
    icon: "\u{23F3}",
    title: "Délais d'une semaine",
    description:
      "Prise de rendez-vous, déplacement, retouches… une semaine perdue.",
  },
  {
    icon: "\u{1F4F7}",
    title: "Photos statiques",
    description:
      "Des images figées qui ne transmettent pas le volume ni l'espace.",
  },
  {
    icon: "\u{1F3AC}",
    title: "Équipement spécialisé",
    description:
      "Caméra 360°, trépied, drone… un investissement lourd.",
  },
];

const solutions: PainPoint[] = [
  {
    icon: "\u{1F4F1}",
    title: "Votre smartphone suffit",
    description:
      "iPhone ou Android de 2020+. Aucun équipement supplémentaire.",
  },
  {
    icon: "\u{26A1}",
    title: "Livré en 24h",
    description:
      "Envoyez la vidéo le soir, recevez la visite 3D le lendemain matin.",
  },
  {
    icon: "\u{1F310}",
    title: "3D immersive et navigable",
    description:
      "L'acheteur contrôle la caméra et explore chaque pièce librement.",
  },
  {
    icon: "\u{1F3F7}\u{FE0F}",
    title: "Dès 49 CHF par bien",
    description:
      "10× moins cher que Matterport. Sans abonnement ni engagement.",
  },
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
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
  );
}

function CrossIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export function ProblemSolution() {
  return (
    <section
      aria-label="Problème et solution"
      className="relative py-24 sm:py-32 section-warm"
    >
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--v3d-blue)] mb-4">
              Avant / Apr{"è"}s
            </p>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.03em] text-[var(--v3d-text)]">
              La photographie immobili{"è"}re traditionnelle
              <br className="hidden sm:block" />
              co{"û"}te cher et prend du temps
            </h2>
            <p className="mt-4 text-[var(--v3d-text-secondary)] text-sm max-w-md mx-auto">
              Comparez l{"'"}approche classique avec Visite3D.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Problem column */}
          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-red-200/60 bg-red-50/50 p-8 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100">
                  <CrossIcon className="h-4 w-4 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--v3d-text)]">
                  Le probl{"è"}me
                </h3>
              </div>

              <Stagger className="space-y-5">
                {problems.map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="flex gap-4">
                      <span
                        className="mt-0.5 text-lg shrink-0"
                        aria-hidden="true"
                      >
                        {item.icon}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-[var(--v3d-text)]">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm text-[var(--v3d-text-secondary)] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </FadeIn>

          {/* Solution column */}
          <FadeIn delay={0.2}>
            <div className="rounded-2xl border border-emerald-200/60 bg-emerald-50/50 p-8 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100">
                  <CheckIcon className="h-4 w-4 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--v3d-text)]">
                  La solution Visite
                  <span className="text-[var(--v3d-blue)]">3D</span>
                </h3>
              </div>

              <Stagger className="space-y-5">
                {solutions.map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="flex gap-4">
                      <span
                        className="mt-0.5 text-lg shrink-0"
                        aria-hidden="true"
                      >
                        {item.icon}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-[var(--v3d-text)]">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm text-[var(--v3d-text-secondary)] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

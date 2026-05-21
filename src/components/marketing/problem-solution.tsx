"use client";

import { FadeIn } from "@/components/animations";

const comparisons = [
  {
    category: "Coût",
    problem: "300–500 CHF par bien",
    solution: "Dès 49 CHF par bien",
  },
  {
    category: "Délai",
    problem: "1 semaine (RDV + retouches)",
    solution: "24 heures, garanti",
  },
  {
    category: "Équipement",
    problem: "Caméra 360°, trépied, drone",
    solution: "Votre smartphone suffit",
  },
  {
    category: "Résultat",
    problem: "Photos statiques figées",
    solution: "Visite 3D navigable et immersive",
  },
  {
    category: "Engagement",
    problem: "Contrat, abonnement mensuel",
    solution: "Paiement unique, sans engagement",
  },
];

export function ProblemSolution() {
  return (
    <section
      aria-label="Comparaison"
      className="relative py-24 sm:py-32 section-warm"
    >
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <div className="mb-14 md:mb-20 max-w-lg">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--v3d-blue)]">
              Comparaison
            </p>
            <h2 className="mt-3 text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-[var(--v3d-text)]">
              La photographie immobili{"è"}re{" "}
              <span className="text-[var(--v3d-text-muted)]">
                a chang{"é"}
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--v3d-text-secondary)]">
              Comparez l{"'"}approche traditionnelle avec Visite3D.
            </p>
          </div>
        </FadeIn>

        {/* Comparison table — editorial, not two colored boxes */}
        <div className="overflow-hidden rounded-xl border border-[var(--v3d-warm-border)] bg-white">
          {/* Header row */}
          <div className="grid grid-cols-3 border-b border-[var(--v3d-warm-border)] bg-[var(--v3d-warm-bg)] px-6 py-4">
            <div />
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--v3d-text-muted)]">
              Traditionnel
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--v3d-blue)]">
              Visite3D
            </p>
          </div>

          {/* Rows */}
          {comparisons.map((row, i) => (
            <FadeIn key={row.category} delay={i * 0.05}>
              <div
                className={`grid grid-cols-3 items-center px-6 py-5 ${
                  i < comparisons.length - 1
                    ? "border-b border-[var(--v3d-warm-border)]"
                    : ""
                }`}
              >
                <p className="text-sm font-semibold text-[var(--v3d-text)]">
                  {row.category}
                </p>
                <p className="text-sm text-[var(--v3d-text-muted)]">
                  {row.problem}
                </p>
                <p className="text-sm font-medium text-[var(--v3d-text)]">
                  {row.solution}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

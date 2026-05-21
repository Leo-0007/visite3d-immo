import { buttonVariants } from "@/components/ui/button";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Envoyer votre video",
  description:
    "Envoyez la video de votre bien par email ou WeTransfer. On la transforme en visite 3D en 24h.",
  alternates: {
    canonical: "/envoyer",
  },
};

const methods = [
  {
    name: "Email",
    desc: "Envoyez votre video en piece jointe ou partagez un lien Google Drive / Dropbox.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    href: `mailto:${CONTACT_EMAIL}?subject=Visite3D%20-%20Video%20de%20mon%20bien`,
    color: "text-[var(--v3d-blue)]",
    ringColor: "ring-[var(--v3d-blue)]/20",
    bgColor: "bg-[var(--v3d-blue)]/10",
  },
  {
    name: "WeTransfer",
    desc: "Pour les fichiers volumineux (plus de 25 Mo). Envoyez le lien WeTransfer par email.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
        />
      </svg>
    ),
    href: "https://wetransfer.com",
    color: "text-violet-600",
    ringColor: "ring-violet-500/20",
    bgColor: "bg-violet-50",
  },
];

export default function EnvoyerPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={breadcrumbSchema("Envoyer votre video", "/envoyer")} />

      <div className="mx-auto max-w-3xl px-6 py-20">
        {/* Back */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--v3d-text-muted)] hover:text-[var(--v3d-text)] transition-colors mb-12"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Retour
        </a>

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--v3d-blue)] mb-4">
            Etape 2
          </p>
          <h1 className="text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.03em] text-[var(--v3d-text)]">
            Envoyez votre video
          </h1>
          <p className="mt-4 text-[var(--v3d-text-secondary)] text-sm max-w-md mx-auto leading-relaxed">
            Choisissez la methode qui vous convient. On recoit votre video, on
            vous livre votre visite 3D en 24h.
          </p>
        </div>

        {/* Methods */}
        <div className="grid gap-5 sm:grid-cols-2">
          {methods.map((m) => (
            <a
              key={m.name}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-[var(--v3d-warm-border)] bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[var(--v3d-blue)]/20 group block"
            >
              <div
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-xl ring-1 mb-5",
                  m.color,
                  m.ringColor,
                  m.bgColor
                )}
              >
                {m.icon}
              </div>
              <h3 className="text-base font-semibold text-[var(--v3d-text)]">{m.name}</h3>
              <p className="mt-2 text-sm text-[var(--v3d-text-secondary)] leading-relaxed">
                {m.desc}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs text-[var(--v3d-text-muted)] group-hover:text-[var(--v3d-blue)] transition-colors">
                Ouvrir
                <svg
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </span>
            </a>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-12 rounded-2xl border border-[var(--v3d-warm-border)] bg-[var(--v3d-warm-bg)] p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-[var(--v3d-text)] mb-4">
            Informations a inclure
          </h2>
          <ul className="space-y-3">
            {[
              "Votre nom ou nom de l'agence",
              "L'adresse du bien",
              "Votre numero de commande (recu par email)",
              "La video du bien (ou le lien WeTransfer / Google Drive)",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-[var(--v3d-text-secondary)]"
              >
                <svg
                  className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div className="mt-10 text-center">
          <p className="text-sm text-[var(--v3d-text-muted)]">
            Besoin d&apos;aide ?{" "}
            <a
              href="/guide-capture"
              className="text-[var(--v3d-blue)] underline underline-offset-4 hover:text-[#164060] transition-colors"
            >
              Consultez le guide de capture
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

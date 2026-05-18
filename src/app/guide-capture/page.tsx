import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Guide de capture",
  description:
    "Comment filmer votre bien pour obtenir la meilleure visite 3D possible. Guide etape par etape.",
  alternates: {
    canonical: "/guide-capture",
  },
};

const tips = [
  {
    icon: (
      <svg
        className="h-6 w-6 text-blue-400"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    ),
    title: "Tenez en mode paysage",
    desc: "Smartphone horizontal, a hauteur de poitrine (~1m20). Bras legerement flechis, stable.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6 text-blue-400"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
        />
      </svg>
    ),
    title: "Marchez lentement",
    desc: "Environ 1 pas par seconde. Les mouvements brusques degradent la qualite 3D. Imaginez que vous filmez un documentaire.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6 text-blue-400"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    ),
    title: "Maximisez la lumiere",
    desc: "Ouvrez tous les volets et rideaux. Allumez toutes les lumieres. Plus c'est lumineux, plus le rendu 3D est net.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6 text-blue-400"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
        />
      </svg>
    ),
    title: "Faites 2 tours par piece",
    desc: "Entrez dans chaque piece, faites un tour complet en filmant murs, sol, plafond. Puis un second tour en vous rapprochant des details.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6 text-blue-400"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
        />
      </svg>
    ),
    title: "Rien qui bouge",
    desc: "Pas de personnes, pas d'animaux, pas de ventilateur en marche. Tout element mobile cree des artefacts dans la scene 3D.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6 text-blue-400"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-4.142a4.5 4.5 0 00-1.242-7.244l4.5-4.5a4.5 4.5 0 016.364 6.364l-1.757 1.757"
        />
      </svg>
    ),
    title: "Liez les pieces",
    desc: "En passant d'une piece a l'autre, filmez la transition (couloir, porte). Cela permet a l'algorithme de reconstituer le plan complet.",
  },
];

const durations = [
  { type: "Studio / 1 piece", time: "~3 min" },
  { type: "2-3 pieces", time: "~5 min" },
  { type: "4-5 pieces", time: "~8 min" },
  { type: "Maison / villa", time: "~12 min" },
];

export default function GuideCapturePage() {
  return (
    <main className="min-h-screen bg-[#060a13] relative">
      <JsonLd data={breadcrumbSchema("Guide de capture", "/guide-capture")} />
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/[0.06] blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 h-[400px] w-[400px] rounded-full bg-violet-600/[0.04] blur-[100px]" />
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="relative mx-auto max-w-3xl px-6 py-20">
        {/* Back */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/20 hover:text-white/50 transition-colors mb-12"
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
        <div className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400/60 mb-4">
            Guide de capture
          </p>
          <h1 className="text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.03em] text-white">
            Comment filmer votre bien
          </h1>
          <p className="mt-4 text-white/30 text-sm max-w-md mx-auto leading-relaxed">
            Suivez ces conseils pour obtenir la meilleure visite 3D possible.
            Aucun equipement special requis — votre smartphone suffit.
          </p>
        </div>

        {/* Tips grid */}
        <div className="grid gap-5 sm:grid-cols-2">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="glass rounded-2xl p-6 transition-colors duration-300"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 ring-1 ring-blue-500/20 mb-4">
                {tip.icon}
              </div>
              <h3 className="text-base font-semibold text-white tracking-[-0.01em]">
                {tip.title}
              </h3>
              <p className="mt-2 text-sm text-white/25 leading-relaxed">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Duration table */}
        <div className="mt-14 glass rounded-2xl p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-white mb-5">
            Duree estimee par type de bien
          </h2>
          <div className="space-y-3">
            {durations.map((d) => (
              <div
                key={d.type}
                className="flex items-center justify-between py-2.5 border-b border-white/[0.04] last:border-0"
              >
                <span className="text-sm text-white/40">{d.type}</span>
                <span className="text-sm font-medium text-white/70">
                  {d.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Checklist */}
        <div className="mt-10 glass rounded-2xl p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-white mb-5">
            Checklist avant de filmer
          </h2>
          <ul className="space-y-3">
            {[
              "Bien range et propre (pas de vaisselle, pas de linge)",
              "Tous les volets ouverts, lumieres allumees",
              "Animaux et personnes en dehors du champ",
              "Smartphone charge a plus de 50%",
              "Mode paysage active",
              "Resolution video maximale (1080p minimum, 4K ideal)",
              "Mode avion desactive (pour eviter les interruptions)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-white/10 bg-white/[0.03] mt-0.5">
                  <svg
                    className="h-3 w-3 text-white/20"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <span className="text-white/35">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-sm text-white/20 mb-6">
            Pret a filmer ? Envoyez-nous votre video.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="/envoyer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold px-8 rounded-full shadow-lg shadow-blue-500/20"
              )}
            >
              Envoyer ma video
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Visite3D%20-%20Question%20capture`}
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "border border-white/[0.06] text-white/35 hover:bg-white/[0.03] hover:text-white/60 rounded-full text-sm px-8"
              )}
            >
              Une question ?
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

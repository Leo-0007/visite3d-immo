import { buttonVariants } from "@/components/ui/button";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { CONTACT_EMAIL, WHATSAPP_NUMBER } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Envoyer votre video",
  description:
    "Envoyez la video de votre bien par email, WhatsApp ou WeTransfer. On la transforme en visite 3D en 24h.",
  alternates: {
    canonical: "/envoyer",
  },
};

const methods = [
  {
    name: "WhatsApp",
    desc: "Le plus rapide. Envoyez directement la video depuis votre telephone.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour%2C%20je%20viens%20de%20commander%20une%20visite%203D.%20Voici%20ma%20vid%C3%A9o.`,
    color: "text-emerald-400",
    ringColor: "ring-emerald-500/20",
    bgColor: "bg-emerald-500/10",
  },
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
    color: "text-blue-400",
    ringColor: "ring-blue-500/20",
    bgColor: "bg-blue-500/10",
  },
  {
    name: "WeTransfer",
    desc: "Pour les fichiers volumineux (plus de 25 Mo). Envoyez le lien WeTransfer par email ou WhatsApp.",
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
    color: "text-violet-400",
    ringColor: "ring-violet-500/20",
    bgColor: "bg-violet-500/10",
  },
];

export default function EnvoyerPage() {
  return (
    <main className="min-h-screen bg-[#060a13] relative">
      <JsonLd data={breadcrumbSchema("Envoyer votre video", "/envoyer")} />
      <div className="absolute inset-0">
        <div className="absolute right-1/4 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/[0.06] blur-[120px]" />
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
        <div className="text-center mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400/60 mb-4">
            Etape 2
          </p>
          <h1 className="text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.03em] text-white">
            Envoyez votre video
          </h1>
          <p className="mt-4 text-white/30 text-sm max-w-md mx-auto leading-relaxed">
            Choisissez la methode qui vous convient. On recoit votre video, on
            vous livre votre visite 3D en 24h.
          </p>
        </div>

        {/* Methods */}
        <div className="grid gap-5 sm:grid-cols-3">
          {methods.map((m) => (
            <a
              key={m.name}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/[0.1] group block"
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
              <h3 className="text-base font-semibold text-white">{m.name}</h3>
              <p className="mt-2 text-sm text-white/25 leading-relaxed">
                {m.desc}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs text-white/15 group-hover:text-white/40 transition-colors">
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
        <div className="mt-12 glass rounded-2xl p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-white mb-4">
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
                className="flex items-start gap-2.5 text-sm text-white/35"
              >
                <svg
                  className="h-4 w-4 shrink-0 text-blue-400/40 mt-0.5"
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
          <p className="text-sm text-white/15">
            Besoin d&apos;aide ?{" "}
            <a
              href="/guide-capture"
              className="text-blue-400/50 underline underline-offset-4 hover:text-blue-400 transition-colors"
            >
              Consultez le guide de capture
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CONTACT_EMAIL = "lionel.ndombele@gmail.com";
const WHATSAPP_NUMBER = "41791234567"; // TODO: remplacer par ton numéro

export default function ConfirmationPage() {
  return (
    <main className="min-h-screen bg-[#060a13] relative">
      <div className="absolute inset-0">
        <div className="absolute left-1/3 top-0 h-[500px] w-[500px] rounded-full bg-emerald-600/[0.06] blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 h-[400px] w-[400px] rounded-full bg-blue-600/[0.04] blur-[100px]" />
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      <div className="relative mx-auto max-w-2xl px-6 py-20">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20">
            <svg
              className="h-8 w-8 text-emerald-400"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Paiement confirmé
          </h1>
          <p className="mt-3 text-lg text-white/40">
            Merci pour votre commande. Voici la suite en 3 étapes simples.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12 space-y-6">
          <StepCard
            number="1"
            title="Filmez votre bien"
            description="Parcourez chaque pièce lentement avec votre smartphone (5-10 minutes)."
          >
            <div className="mt-4 rounded-xl bg-white/[0.02] border border-white/[0.04] p-4 text-sm text-white/30">
              <p className="font-medium text-white/60 mb-2">Guide rapide de capture :</p>
              <ul className="space-y-1.5 list-disc pl-4">
                <li>Tenez le téléphone en <strong className="text-white/60">mode paysage</strong>, à hauteur de poitrine</li>
                <li>Marchez lentement — environ <strong className="text-white/60">1 pas par seconde</strong></li>
                <li>Filmez chaque pièce en faisant <strong className="text-white/60">2 tours complets</strong></li>
                <li>Ouvrez tous les volets, allumez toutes les lumières</li>
                <li>Pas de personnes ni d&apos;animaux dans le champ</li>
                <li>Évitez les mouvements brusques</li>
              </ul>
              <div className="my-3 h-px bg-white/[0.04]" />
              <p className="text-[11px] text-white/20">
                Studio : ~3 min | 3 pièces : ~5 min | 5 pièces : ~8 min | Maison : ~12 min
              </p>
            </div>
          </StepCard>

          <StepCard
            number="2"
            title="Envoyez-nous la vidéo"
            description="Choisissez la méthode qui vous arrange le plus :"
          >
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Visite3D%20-%20Vidéo%20de%20mon%20bien`}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "border border-white/[0.08] text-white/50 hover:bg-white/[0.04] hover:text-white rounded-lg text-xs"
                )}
              >
                Par email
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour%2C%20je%20viens%20de%20commander%20une%20visite%203D.%20Voici%20ma%20vidéo.`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "border border-white/[0.08] text-white/50 hover:bg-white/[0.04] hover:text-white rounded-lg text-xs"
                )}
              >
                Par WhatsApp
              </a>
              <a
                href="https://wetransfer.com"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "border border-white/[0.08] text-white/50 hover:bg-white/[0.04] hover:text-white rounded-lg text-xs"
                )}
              >
                Par WeTransfer
              </a>
            </div>
          </StepCard>

          <StepCard
            number="3"
            title="Recevez votre visite 3D en 24h"
            description="On s'occupe de tout. Vous recevrez par email :"
          >
            <ul className="mt-3 space-y-2 text-sm text-white/30 list-none">
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0 text-emerald-400/60" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Le <strong className="text-white/60">lien de visite 3D</strong> partageable
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0 text-emerald-400/60" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Le <strong className="text-white/60">code embed iframe</strong> pour votre site
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0 text-emerald-400/60" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Une <strong className="text-white/60">miniature</strong> pour vos annonces
              </li>
            </ul>
          </StepCard>
        </div>

        {/* Back button */}
        <div className="mt-10 text-center">
          <a
            href="/"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-white text-[#060a13] hover:bg-white/90 font-semibold text-sm px-8 rounded-full"
            )}
          >
            Retour à l&apos;accueil
          </a>
        </div>
      </div>
    </main>
  );
}

function StepCard({
  number,
  title,
  description,
  children,
}: {
  number: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="glass rounded-2xl p-6 sm:p-8 transition-all duration-300">
      <div className="flex gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-sm font-bold text-blue-400 ring-1 ring-blue-500/20">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-white/30">{description}</p>
          {children}
        </div>
      </div>
    </div>
  );
}

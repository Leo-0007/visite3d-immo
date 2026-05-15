import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const CONTACT_EMAIL = "lionel.ndombele@gmail.com";
const WHATSAPP_NUMBER = "41791234567"; // TODO: remplacer par ton numero

export default function ConfirmationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="mx-auto max-w-2xl px-6 py-20">
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
            <svg
              className="h-8 w-8 text-green-400"
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
          <p className="mt-3 text-lg text-slate-300">
            Merci pour votre commande. Voici la suite en 3 étapes simples.
          </p>
        </div>

        <Card className="mt-10 bg-slate-800/50 border-slate-700 text-white">
          <CardContent className="pt-8">
            <div className="space-y-8">
              <Step
                number="1"
                title="Filmez votre bien"
                description="Parcourez chaque pièce lentement avec votre smartphone (5-10 minutes)."
              >
                <div className="mt-4 rounded-lg bg-slate-700/50 p-4 text-sm text-slate-300">
                  <p className="font-semibold text-white mb-2">Guide rapide de capture :</p>
                  <ul className="space-y-1.5 list-disc pl-4">
                    <li>Tenez le téléphone en <strong className="text-white">mode paysage</strong>, à hauteur de poitrine</li>
                    <li>Marchez lentement — environ <strong className="text-white">1 pas par seconde</strong></li>
                    <li>Filmez chaque pièce en faisant <strong className="text-white">2 tours complets</strong> (hauteur poitrine + hauteur genoux)</li>
                    <li>Ouvrez tous les volets, allumez toutes les lumières</li>
                    <li>Pas de personnes ni d&apos;animaux dans le champ</li>
                    <li>Évitez les mouvements brusques</li>
                  </ul>
                  <Separator className="my-3 bg-slate-600" />
                  <p className="text-xs text-slate-400">
                    Studio : ~3 min | 3 pièces : ~5 min | 5 pièces : ~8 min | Maison : ~12 min
                  </p>
                </div>
              </Step>

              <Step
                number="2"
                title="Envoyez-nous la vidéo"
                description="Choisissez la méthode qui vous arrange le plus :"
              >
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=Visite3D%20-%20Vidéo%20de%20mon%20bien`}
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "border-slate-600 text-slate-200 hover:bg-slate-700"
                    )}
                  >
                    Par email
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour%2C%20je%20viens%20de%20commander%20une%20visite%203D.%20Voici%20ma%20vid%C3%A9o.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "border-slate-600 text-slate-200 hover:bg-slate-700"
                    )}
                  >
                    Par WhatsApp
                  </a>
                  <a
                    href="https://wetransfer.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "border-slate-600 text-slate-200 hover:bg-slate-700"
                    )}
                  >
                    Par WeTransfer
                  </a>
                </div>
              </Step>

              <Step
                number="3"
                title="Recevez votre visite 3D en 24h"
                description="On s'occupe de tout. Vous recevrez par email :"
              >
                <ul className="mt-3 space-y-1.5 text-sm text-slate-300 list-disc pl-4">
                  <li>Le <strong className="text-white">lien de visite 3D</strong> partageable</li>
                  <li>Le <strong className="text-white">code embed iframe</strong> pour votre site</li>
                  <li>Une <strong className="text-white">miniature</strong> pour vos annonces</li>
                </ul>
              </Step>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <a href="/" className={cn(buttonVariants({ size: "lg" }))}>
            Retour à l&apos;accueil
          </a>
        </div>
      </div>
    </main>
  );
}

function Step({
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
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-bold">
        {number}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-slate-400">{description}</p>
        {children}
      </div>
    </div>
  );
}

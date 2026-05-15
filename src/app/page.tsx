import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const STRIPE_LINK_SINGLE = "#"; // TODO: remplacer par ton Stripe Payment Link
const STRIPE_LINK_PACK10 = "#";
const STRIPE_LINK_PACK50 = "#";
const CONTACT_EMAIL = "lionel.ndombele@gmail.com";
const PLAYCANVAS_DEMO_URL = ""; // TODO: remplacer par l'URL PlayCanvas de ta demo

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-5xl px-6 py-24 text-center sm:py-32">
        <Badge variant="secondary" className="mb-6 text-sm font-medium">
          Nouveau en Suisse romande
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Visite 3D photoréaliste
          <br />
          <span className="text-blue-400">de votre bien en 24h</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
          Transformez une vidéo smartphone en visite 3D immersive navigable.
          <br />
          Sans caméra spéciale. Sans abonnement. 29 CHF par tour.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className={cn(buttonVariants({ size: "lg" }), "text-lg px-8 py-6")}
          >
            Commander une visite 3D
          </a>
          <a
            href="#demo"
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "border border-slate-500 text-slate-200 hover:bg-slate-800 hover:text-slate-200 text-lg px-8 py-6"
            )}
          >
            Voir la démo live
          </a>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <CheckIcon />
            <span>Smartphone suffit</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon />
            <span>Livré en 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon />
            <span>10x moins cher que Matterport</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoSection() {
  return (
    <section id="demo" className="bg-slate-950 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <Badge variant="outline" className="mb-4 text-blue-400 border-blue-400/30">
            Démo interactive
          </Badge>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Naviguez librement dans cette maison
          </h2>
          <p className="mt-3 text-slate-400">
            Utilisez votre souris ou vos doigts pour explorer chaque pièce en 3D
          </p>
        </div>
        <div className="mt-10 overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-2xl">
          {PLAYCANVAS_DEMO_URL ? (
            <iframe
              src={PLAYCANVAS_DEMO_URL}
              width="100%"
              height="500"
              className="block w-full sm:h-[600px]"
              allow="fullscreen; xr-spatial-tracking"
            />
          ) : (
            <div className="flex h-[500px] items-center justify-center sm:h-[600px]">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/10">
                  <CubeIcon />
                </div>
                <p className="text-xl font-semibold text-white">
                  Démo 3D bientôt disponible
                </p>
                <p className="mt-2 text-slate-400">
                  Visite photoréaliste en Gaussian Splatting — navigable sur mobile et desktop
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function AdvantagesSection() {
  const advantages = [
    {
      icon: <PhoneIcon />,
      title: "Smartphone suffit",
      description:
        "Pas de caméra 360, pas de capteur LiDAR. Votre iPhone ou Android fait l'affaire. Filmez 5 minutes, on s'occupe du reste.",
    },
    {
      icon: <ClockIcon />,
      title: "Livré en 24 heures",
      description:
        "Envoyez votre vidéo le matin, recevez votre visite 3D navigable le soir. URL + code embed prêts à publier.",
    },
    {
      icon: <FrancIcon />,
      title: "10x moins cher",
      description:
        "29 CHF par tour au lieu de 3'000+ CHF de caméra Matterport + 70 CHF/mois d'abonnement. Marge maximale pour vous.",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Pourquoi les agences nous choisissent
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            La qualité Gaussian Splatting, sans la complexité
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {advantages.map((item) => (
            <Card key={item.title} className="border-0 shadow-lg">
              <CardContent className="pt-8 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Filmez votre bien",
      description:
        "Parcourez chaque pièce avec votre smartphone pendant 5 minutes. On vous fournit un guide de capture simple.",
    },
    {
      number: "2",
      title: "Envoyez-nous la vidéo",
      description:
        "Par WeTransfer, Google Drive ou WhatsApp. On s'occupe de tout le traitement technique.",
    },
    {
      number: "3",
      title: "Recevez votre visite 3D",
      description:
        "En 24h, vous recevez un lien partageable + un code embed pour l'intégrer sur votre site ou vos annonces.",
    },
  ];

  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Comment ça marche
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            3 étapes. Aucune compétence technique requise.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-3 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Visite3D vs Matterport
          </h2>
        </div>
        <div className="mt-12 overflow-hidden rounded-xl border">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b bg-slate-50">
                <th className="px-6 py-4 font-medium text-slate-500" />
                <th className="px-6 py-4 font-semibold text-blue-600">
                  Visite3D
                </th>
                <th className="px-6 py-4 font-semibold text-slate-400">
                  Matterport
                </th>
              </tr>
            </thead>
            <tbody className="divide-y text-slate-700">
              <tr>
                <td className="px-6 py-4 font-medium">Équipement requis</td>
                <td className="px-6 py-4 text-green-600 font-semibold">Smartphone</td>
                <td className="px-6 py-4">Caméra 3&apos;000+ CHF</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Coût par tour</td>
                <td className="px-6 py-4 text-green-600 font-semibold">29 CHF</td>
                <td className="px-6 py-4">~150+ CHF</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Abonnement mensuel</td>
                <td className="px-6 py-4 text-green-600 font-semibold">Aucun (à la carte)</td>
                <td className="px-6 py-4">70-150 CHF/mois</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Qualité des reflets</td>
                <td className="px-6 py-4 text-green-600 font-semibold">Photoréaliste</td>
                <td className="px-6 py-4">Surfaces brillantes déformées</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Navigation</td>
                <td className="px-6 py-4 text-green-600 font-semibold">Libre et continue</td>
                <td className="px-6 py-4">Téléportation entre points</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Délai</td>
                <td className="px-6 py-4 text-green-600 font-semibold">24h</td>
                <td className="px-6 py-4">Prise de vue 1h+ sur place</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const plans = [
    {
      name: "À la carte",
      price: "29",
      unit: "CHF / tour",
      description: "Idéal pour tester",
      features: [
        "1 visite 3D photoréaliste",
        "Lien partageable inclus",
        "Code embed iframe",
        "Hébergé 12 mois",
        "Livré en 24h",
      ],
      cta: "Commander",
      href: STRIPE_LINK_SINGLE,
      highlighted: false,
    },
    {
      name: "Pack 10",
      price: "199",
      unit: "CHF",
      description: "Le plus populaire — 19.90 CHF/tour",
      features: [
        "10 visites 3D",
        "Économisez 30%",
        "Lien + embed par tour",
        "Hébergé 12 mois",
        "Support prioritaire",
      ],
      cta: "Commander le pack",
      href: STRIPE_LINK_PACK10,
      highlighted: true,
    },
    {
      name: "Pack 50",
      price: "799",
      unit: "CHF",
      description: "Pour les agences actives — 15.98 CHF/tour",
      features: [
        "50 visites 3D",
        "Économisez 45%",
        "Lien + embed par tour",
        "Hébergé 12 mois",
        "Support dédié",
      ],
      cta: "Commander le pack",
      href: STRIPE_LINK_PACK50,
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Tarifs simples, sans surprise
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Payez par tour. Pas d&apos;abonnement obligatoire.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.highlighted
                  ? "border-blue-600 border-2 shadow-xl shadow-blue-100"
                  : "border shadow-lg"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-3 py-1">
                    Le plus populaire
                  </Badge>
                </div>
              )}
              <CardContent className="pt-8">
                <h3 className="text-xl font-semibold text-slate-900">
                  {plan.name}
                </h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-slate-900">
                    {plan.price}
                  </span>
                  <span className="ml-2 text-slate-500">{plan.unit}</span>
                </div>
                <p className="mt-2 text-sm text-slate-500">
                  {plan.description}
                </p>
                <Separator className="my-6" />
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.href}
                  className={cn(
                    buttonVariants({
                      variant: plan.highlighted ? "default" : "outline",
                      size: "lg",
                    }),
                    "mt-8 w-full",
                    plan.highlighted && "bg-blue-600 hover:bg-blue-700"
                  )}
                >
                  {plan.cta}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          Besoin de visites illimitées ?{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Visite3D%20-%20Plan%20illimité`}
            className="text-blue-600 underline"
          >
            Contactez-nous pour un forfait sur mesure
          </a>
        </p>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "Quel smartphone faut-il ?",
      answer:
        "Tout smartphone de 2020 ou plus récent fait l'affaire — iPhone ou Android. Pas besoin de capteur LiDAR ni de caméra 360.",
    },
    {
      question: "Combien de temps dure la capture ?",
      answer:
        "5 à 10 minutes pour un appartement standard (3-4 pièces). On vous fournit un guide de capture étape par étape.",
    },
    {
      question: "Quel est le délai de livraison ?",
      answer:
        "24 heures après réception de votre vidéo. Vous recevez un lien de visite 3D partageable et un code embed pour votre site.",
    },
    {
      question: "Comment intégrer la visite sur mon site ou mes annonces ?",
      answer:
        "Vous recevez un code iframe à coller sur n'importe quel site (Squarespace, Wix, WordPress, Webflow, Homegate...). Un simple copier-coller.",
    },
    {
      question: "Combien de temps la visite reste en ligne ?",
      answer:
        "12 mois inclus dans chaque tour. Renouvellement possible ensuite.",
    },
    {
      question: "C'est quoi le Gaussian Splatting ?",
      answer:
        "C'est la technologie utilisée par Zillow aux États-Unis. Elle crée une scène 3D photoréaliste à partir d'une vidéo — avec les vrais reflets, la vraie lumière, le vrai parquet. Plus immersif qu'une visite 360 classique.",
    },
    {
      question: "Est-ce que ça marche sur mobile ?",
      answer:
        "Oui, la visite est navigable sur desktop, tablette et smartphone. Vos acheteurs explorent le bien directement depuis leur canapé.",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Questions fréquentes
          </h2>
        </div>
        <Accordion className="mt-10">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Votre première visite 3D en 24h
        </h2>
        <p className="mt-4 text-lg text-blue-100">
          Rejoignez les agences qui réduisent les visites inutiles et
          impressionnent leurs acheteurs.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6"
            )}
          >
            Commander maintenant — 29 CHF
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Visite3D%20-%20Question`}
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "border border-white/30 text-white hover:bg-white/10 hover:text-white text-lg px-8 py-6"
            )}
          >
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 py-10 text-slate-400">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <p className="font-semibold text-white">Visite3D Immo</p>
            <p className="text-sm">
              SwissEmpire2 Sàrl — Moutier, Suisse (CHE-489.583.893)
            </p>
          </div>
          <div className="text-sm">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:text-white transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
        <Separator className="my-6 bg-slate-700" />
        <p className="text-center text-xs text-slate-500">
          © {new Date().getFullYear()} SwissEmpire2 Sàrl. Tous droits réservés.
          Technologie Gaussian Splatting.
        </p>
      </div>
    </footer>
  );
}

function CheckIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function FrancIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    </svg>
  );
}

function CubeIcon() {
  return (
    <svg className="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <DemoSection />
      <AdvantagesSection />
      <HowItWorksSection />
      <ComparisonSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}

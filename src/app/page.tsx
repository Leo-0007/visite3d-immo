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

function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-slate-900/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a href="/" className="text-lg font-bold text-white tracking-tight">
          Visite<span className="text-blue-400">3D</span>
        </a>
        <div className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
          <a href="#demo" className="transition-colors hover:text-white">Demo</a>
          <a href="#how" className="transition-colors hover:text-white">Comment ca marche</a>
          <a href="#pricing" className="transition-colors hover:text-white">Tarifs</a>
          <a href="#faq" className="transition-colors hover:text-white">FAQ</a>
        </div>
        <a
          href="#pricing"
          className={cn(
            buttonVariants({ size: "sm" }),
            "bg-blue-600 hover:bg-blue-700 text-white text-xs px-4"
          )}
        >
          Commander
        </a>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-28 text-white sm:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(120,119,198,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-5xl px-6 pb-24 text-center sm:pb-32">
        <Badge variant="secondary" className="animate-fade-up mb-8 text-sm font-medium px-4 py-1.5">
          Nouveau en Suisse romande
        </Badge>
        <h1 className="animate-fade-up-delay-1 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1]">
          Visite 3D photorealiste
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            de votre bien en 24h
          </span>
        </h1>
        <p className="animate-fade-up-delay-2 mx-auto mt-6 max-w-2xl text-lg text-slate-300/90 sm:text-xl leading-relaxed">
          Transformez une video smartphone en visite 3D immersive navigable.
          <br className="hidden sm:block" />
          Sans camera speciale. Sans abonnement.{" "}
          <strong className="text-white">29 CHF par tour.</strong>
        </p>
        <div className="animate-fade-up-delay-3 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 shadow-lg shadow-blue-600/25 transition-all hover:shadow-xl hover:shadow-blue-600/30"
            )}
          >
            Commander une visite 3D
          </a>
          <a
            href="#demo"
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "border border-slate-600 text-slate-200 hover:bg-white/5 hover:text-white hover:border-slate-400 text-lg px-8 py-6 transition-all"
            )}
          >
            Voir la demo live
          </a>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircleIcon />
            <span>Smartphone suffit</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircleIcon />
            <span>Livre en 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircleIcon />
            <span>10x moins cher que Matterport</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}

function DemoSection() {
  return (
    <section id="demo" className="bg-slate-950 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <Badge variant="outline" className="mb-4 text-blue-400 border-blue-400/30">
            Demo interactive
          </Badge>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Naviguez librement dans cette maison
          </h2>
          <p className="mt-3 text-slate-400">
            Utilisez votre souris ou vos doigts pour explorer chaque piece en 3D
          </p>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900 shadow-2xl shadow-black/40">
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
                  Demo 3D bientot disponible
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Visite photorealiste en Gaussian Splatting — navigable sur mobile et desktop
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="border-y border-slate-800 bg-slate-900 py-8">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 text-center">
          <div>
            <p className="text-2xl font-bold text-white">24h</p>
            <p className="mt-1 text-xs text-slate-500 uppercase tracking-wider">Delai de livraison</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">29 CHF</p>
            <p className="mt-1 text-xs text-slate-500 uppercase tracking-wider">Par visite 3D</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">5 min</p>
            <p className="mt-1 text-xs text-slate-500 uppercase tracking-wider">De capture video</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">12 mois</p>
            <p className="mt-1 text-xs text-slate-500 uppercase tracking-wider">Hebergement inclus</p>
          </div>
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
        "Pas de camera 360, pas de capteur LiDAR. Votre iPhone ou Android fait l'affaire. Filmez 5 minutes, on s'occupe du reste.",
    },
    {
      icon: <ClockIcon />,
      title: "Livre en 24 heures",
      description:
        "Envoyez votre video le matin, recevez votre visite 3D navigable le soir. URL + code embed prets a publier.",
    },
    {
      icon: <FrancIcon />,
      title: "10x moins cher",
      description:
        "29 CHF par tour au lieu de 3'000+ CHF de camera Matterport + 70 CHF/mois d'abonnement. Marge maximale pour vous.",
    },
  ];

  return (
    <section className="bg-slate-950 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pourquoi les agences nous choisissent
          </h2>
          <p className="mt-3 text-lg text-slate-400">
            La qualite Gaussian Splatting, sans la complexite
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {advantages.map((item) => (
            <Card
              key={item.title}
              className="border-slate-800 bg-slate-900/50 shadow-none transition-all duration-300 hover:border-slate-700 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-blue-950/20"
            >
              <CardContent className="pt-8 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-400 leading-relaxed">{item.description}</p>
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
        "Parcourez chaque piece avec votre smartphone pendant 5 minutes. On vous fournit un guide de capture simple.",
    },
    {
      number: "2",
      title: "Envoyez-nous la video",
      description:
        "Par WeTransfer, Google Drive ou WhatsApp. On s'occupe de tout le traitement technique.",
    },
    {
      number: "3",
      title: "Recevez votre visite 3D",
      description:
        "En 24h, vous recevez un lien partageable + un code embed pour l'integrer sur votre site ou vos annonces.",
    },
  ];

  return (
    <section id="how" className="relative bg-slate-900 py-16 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_70%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="text-center">
          <Badge variant="outline" className="mb-4 text-blue-400 border-blue-400/30">
            Simple comme 1-2-3
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Comment ca marche
          </h2>
          <p className="mt-3 text-lg text-slate-400">
            3 etapes. Aucune competence technique requise.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="absolute top-6 left-[calc(50%+28px)] hidden h-0.5 w-[calc(100%-56px)] bg-gradient-to-r from-blue-600/40 to-blue-600/10 sm:block" />
              )}
              <div className="relative mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white shadow-lg shadow-blue-600/30">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-slate-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  const rows = [
    { label: "Equipement requis", us: "Smartphone", them: "Camera 3'000+ CHF" },
    { label: "Cout par tour", us: "29 CHF", them: "~150+ CHF" },
    { label: "Abonnement mensuel", us: "Aucun (a la carte)", them: "70-150 CHF/mois" },
    { label: "Qualite des reflets", us: "Photorealiste", them: "Surfaces brillantes deformees" },
    { label: "Navigation", us: "Libre et continue", them: "Teleportation entre points" },
    { label: "Delai", us: "24h", them: "Prise de vue 1h+ sur place" },
  ];

  return (
    <section className="bg-slate-950 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Visite3D vs Matterport
          </h2>
          <p className="mt-3 text-slate-400">
            La meme qualite pour une fraction du prix
          </p>
        </div>
        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-800/50">
                <th className="px-6 py-4 font-medium text-slate-500" />
                <th className="px-6 py-4 font-semibold text-blue-400">
                  Visite3D
                </th>
                <th className="px-6 py-4 font-medium text-slate-500">
                  Matterport
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {rows.map((row) => (
                <tr key={row.label} className="transition-colors hover:bg-slate-800/30">
                  <td className="px-6 py-4 font-medium text-slate-400">{row.label}</td>
                  <td className="px-6 py-4 font-semibold text-emerald-400">{row.us}</td>
                  <td className="px-6 py-4 text-slate-500">{row.them}</td>
                </tr>
              ))}
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
      name: "A la carte",
      price: "29",
      unit: "CHF / tour",
      description: "Ideal pour tester",
      features: [
        "1 visite 3D photorealiste",
        "Lien partageable inclus",
        "Code embed iframe",
        "Heberge 12 mois",
        "Livre en 24h",
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
        "Economisez 30%",
        "Lien + embed par tour",
        "Heberge 12 mois",
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
        "Economisez 45%",
        "Lien + embed par tour",
        "Heberge 12 mois",
        "Support dedie",
      ],
      cta: "Commander le pack",
      href: STRIPE_LINK_PACK50,
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="relative bg-slate-900 py-16 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.06),transparent_50%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="text-center">
          <Badge variant="outline" className="mb-4 text-blue-400 border-blue-400/30">
            Tarification
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tarifs simples, sans surprise
          </h2>
          <p className="mt-3 text-lg text-slate-400">
            Payez par tour. Pas d&apos;abonnement obligatoire.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "relative transition-all duration-300",
                plan.highlighted
                  ? "border-blue-500 border-2 bg-slate-800/80 shadow-xl shadow-blue-900/20 scale-[1.02]"
                  : "border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-800/50"
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-4 py-1 text-xs font-semibold shadow-lg">
                    Le plus populaire
                  </Badge>
                </div>
              )}
              <CardContent className="pt-8">
                <h3 className="text-lg font-semibold text-white">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">
                    {plan.price}
                  </span>
                  <span className="text-slate-500">{plan.unit}</span>
                </div>
                <p className="mt-2 text-sm text-slate-500">
                  {plan.description}
                </p>
                <Separator className="my-6 bg-slate-800" />
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-slate-300"
                    >
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.href}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "mt-8 w-full transition-all",
                    plan.highlighted
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25"
                      : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                  )}
                >
                  {plan.cta}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-slate-500">
          Besoin de visites illimitees ?{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Visite3D%20-%20Plan%20illimité`}
            className="text-blue-400 underline underline-offset-4 hover:text-blue-300 transition-colors"
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
        "Tout smartphone de 2020 ou plus recent fait l'affaire — iPhone ou Android. Pas besoin de capteur LiDAR ni de camera 360.",
    },
    {
      question: "Combien de temps dure la capture ?",
      answer:
        "5 a 10 minutes pour un appartement standard (3-4 pieces). On vous fournit un guide de capture etape par etape.",
    },
    {
      question: "Quel est le delai de livraison ?",
      answer:
        "24 heures apres reception de votre video. Vous recevez un lien de visite 3D partageable et un code embed pour votre site.",
    },
    {
      question: "Comment integrer la visite sur mon site ou mes annonces ?",
      answer:
        "Vous recevez un code iframe a coller sur n'importe quel site (Squarespace, Wix, WordPress, Webflow, Homegate...). Un simple copier-coller.",
    },
    {
      question: "Combien de temps la visite reste en ligne ?",
      answer:
        "12 mois inclus dans chaque tour. Renouvellement possible ensuite.",
    },
    {
      question: "C'est quoi le Gaussian Splatting ?",
      answer:
        "C'est la technologie utilisee par Zillow aux Etats-Unis. Elle cree une scene 3D photorealiste a partir d'une video — avec les vrais reflets, la vraie lumiere, le vrai parquet. Plus immersif qu'une visite 360 classique.",
    },
    {
      question: "Est-ce que ca marche sur mobile ?",
      answer:
        "Oui, la visite est navigable sur desktop, tablette et smartphone. Vos acheteurs explorent le bien directement depuis leur canape.",
    },
  ];

  return (
    <section id="faq" className="bg-slate-950 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Questions frequentes
          </h2>
        </div>
        <Accordion className="mt-10">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-slate-800">
              <AccordionTrigger className="text-left text-base font-medium text-slate-200 hover:text-white transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 leading-relaxed">
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
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Votre premiere visite 3D en 24h
        </h2>
        <p className="mt-4 text-lg text-blue-100/80">
          Rejoignez les agences qui reduisent les visites inutiles et
          impressionnent leurs acheteurs.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6 shadow-lg transition-all hover:shadow-xl"
            )}
          >
            Commander maintenant — 29 CHF
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Visite3D%20-%20Question`}
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "border border-white/25 text-white hover:bg-white/10 hover:text-white text-lg px-8 py-6 transition-all"
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
    <footer className="bg-slate-950 py-12 text-slate-400">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-bold text-white tracking-tight">
              Visite<span className="text-blue-400">3D</span> Immo
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Visites 3D photorealistes pour l&apos;immobilier suisse.
            </p>
            <p className="mt-1 text-sm text-slate-600">
              SwissEmpire2 Sarl — Moutier, Suisse (CHE-489.583.893)
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm sm:items-end">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:text-white transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
            <div className="flex gap-4 text-slate-600">
              <a href="#how" className="hover:text-slate-400 transition-colors">Comment ca marche</a>
              <a href="#pricing" className="hover:text-slate-400 transition-colors">Tarifs</a>
              <a href="#faq" className="hover:text-slate-400 transition-colors">FAQ</a>
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-slate-800" />
        <p className="text-center text-xs text-slate-600">
          © {new Date().getFullYear()} SwissEmpire2 Sarl. Tous droits reserves. Technologie Gaussian Splatting.
        </p>
      </div>
    </footer>
  );
}

function CheckIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
      <Navbar />
      <HeroSection />
      <DemoSection />
      <TrustBar />
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

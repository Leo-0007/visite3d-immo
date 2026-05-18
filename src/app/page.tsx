import { buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import {
  FadeIn,
  Stagger,
  StaggerItem,
  Counter,
  TextReveal,
  GrainOverlay,
  HoverScale,
} from "@/components/animations";
import { DemoViewer } from "@/components/demo-viewer";
import { JsonLd } from "@/components/json-ld";
import { CONTACT_EMAIL } from "@/lib/constants";
import { productSchemas, serviceSchema } from "@/lib/schema";

const DEMO_3D_URL =
  "https://cloud.splatlabs.ai/viewer/f95e1016-b5db-40ae-81cc-c6354b1c470c?view=splat";
const STRIPE_LINK_SINGLE = "https://buy.stripe.com/14A00i59Ch1c9pf4oXfEk00";
const STRIPE_LINK_PACK10 = "https://buy.stripe.com/cNi7sK31u6my58Z8FdfEk01";
const STRIPE_LINK_PACK50 = "https://buy.stripe.com/7sY5kC31u8uG44V2gPfEk02";

/* ════════════════════════════════════════════
   NAVBAR
   ════════════════════════════════════════════ */

function Navbar() {
  return (
    <nav className="fixed top-0 z-40 w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="/" className="text-lg font-bold text-white tracking-[-0.02em]">
          Visite<span className="text-blue-400">3D</span>
        </a>
        <div className="hidden items-center gap-8 text-[13px] text-white/30 sm:flex">
          <a href="#demo" className="transition-colors hover:text-white/70">
            Démo
          </a>
          <a href="#comment-ca-marche" className="transition-colors hover:text-white/70">
            Processus
          </a>
          <a href="#tarifs" className="transition-colors hover:text-white/70">
            Tarifs
          </a>
          <a href="#faq" className="transition-colors hover:text-white/70">
            FAQ
          </a>
        </div>
        <a
          href="#tarifs"
          className={cn(
            buttonVariants({ size: "sm" }),
            "bg-white text-[#060a13] hover:bg-white/90 text-xs font-semibold px-5 rounded-full"
          )}
        >
          Commander
        </a>
      </div>
    </nav>
  );
}

/* ════════════════════════════════════════════
   HERO
   ════════════════════════════════════════════ */

function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-blue-600/[0.06] blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-violet-600/[0.04] blur-[120px]" />
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      <div className="relative mx-auto max-w-4xl px-6 pt-28 pb-20 text-center">
        <FadeIn>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 text-xs text-white/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Nouveau en Suisse romande
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="mt-10 text-[clamp(2.5rem,6vw,5.5rem)] font-bold tracking-[-0.04em] leading-[0.95] text-white">
            Vos acheteurs visitent
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-violet-400 bg-clip-text text-transparent">
              avant de se déplacer
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mx-auto mt-8 max-w-lg text-[1.1rem] text-white/35 leading-relaxed tracking-[-0.01em]">
            Filmez votre bien avec un smartphone.
            On le transforme en visite 3D navigable en 24h.
            <br className="hidden sm:block" />
            Vos prospects explorent chaque pièce librement — seuls les vrais intéressés se déplacent.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#tarifs"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold px-8 py-6 rounded-full shadow-lg shadow-blue-500/20 transition-all hover:shadow-xl hover:shadow-blue-500/30"
              )}
            >
              Essayer pour 29 CHF
            </a>
            <a
              href="#demo"
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "border border-white/[0.06] text-white/40 hover:bg-white/[0.03] hover:text-white/70 rounded-full text-sm px-8 py-6 transition-all"
              )}
            >
              Voir la démo ↓
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   VALUE — Why 3D, not video
   ════════════════════════════════════════════ */

function ValueSection() {
  return (
    <section className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-4xl px-6">
        <TextReveal
          text="Une vidéo, c'est linéaire. L'acheteur subit votre montage. Une visite 3D, c'est interactif. L'acheteur contrôle la caméra, navigue pièce par pièce, regarde où il veut. C'est la différence entre montrer et laisser explorer."
          className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-medium tracking-[-0.03em] leading-[1.25] text-white/90"
        />
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   DEMO — Browser frame + 3D viewer
   ════════════════════════════════════════════ */

function DemoSection() {
  return (
    <section id="demo" className="relative pb-24 sm:pb-32">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400/60 mb-4">
              Démo interactive
            </p>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.03em] text-white">
              Explorez cet intérieur
            </h2>
            <p className="mt-4 text-white/25 text-sm max-w-md mx-auto">
              Cliquez et déplacez-vous librement — exactement
              comme vos acheteurs le feront
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="rounded-2xl border border-white/[0.06] bg-[#0a0f1c] shadow-2xl shadow-black/40 overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.04]">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-white/[0.06]" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/[0.06]" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/[0.06]" />
              </div>
              <div className="flex-1 mx-8">
                <div className="h-7 max-w-xs mx-auto rounded-lg bg-white/[0.03] flex items-center justify-center text-[11px] text-white/15 font-mono">
                  visite3dimmo.ch/demo/appartement-geneve
                </div>
              </div>
            </div>
            <DemoViewer src={DEMO_3D_URL} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   STATS
   ════════════════════════════════════════════ */

function StatsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="gradient-divider mb-16" />
        <Stagger className="grid grid-cols-2 gap-y-12 md:grid-cols-4">
          <StaggerItem className="text-center">
            <p className="text-[2.5rem] font-bold tracking-[-0.04em] text-white">
              <Counter target={24} suffix="h" />
            </p>
            <p className="mt-2 text-xs text-white/20 uppercase tracking-[0.15em]">
              Délai de livraison
            </p>
          </StaggerItem>
          <StaggerItem className="text-center">
            <p className="text-[2.5rem] font-bold tracking-[-0.04em] text-white">
              <Counter target={29} suffix=" CHF" />
            </p>
            <p className="mt-2 text-xs text-white/20 uppercase tracking-[0.15em]">
              Par bien
            </p>
          </StaggerItem>
          <StaggerItem className="text-center">
            <p className="text-[2.5rem] font-bold tracking-[-0.04em] text-white">
              <Counter target={5} suffix=" min" />
            </p>
            <p className="mt-2 text-xs text-white/20 uppercase tracking-[0.15em]">
              De vidéo à filmer
            </p>
          </StaggerItem>
          <StaggerItem className="text-center">
            <p className="text-[2.5rem] font-bold tracking-[-0.04em] text-white">
              <Counter target={10} suffix="×" />
            </p>
            <p className="mt-2 text-xs text-white/20 uppercase tracking-[0.15em]">
              Moins cher que Matterport
            </p>
          </StaggerItem>
        </Stagger>
        <div className="gradient-divider mt-16" />
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   HOW IT WORKS
   ════════════════════════════════════════════ */

function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Filmez votre bien",
      desc: "Parcourez chaque pièce avec votre smartphone pendant 5 minutes. Mode paysage, à hauteur de poitrine.",
    },
    {
      num: "02",
      title: "Envoyez-nous la vidéo",
      desc: "Par WeTransfer, Google Drive ou WhatsApp. On s'occupe de tout le traitement technique.",
    },
    {
      num: "03",
      title: "Recevez votre visite 3D",
      desc: "En 24h : un lien partageable + un code embed pour votre site ou vos annonces.",
    },
  ];

  return (
    <section id="comment-ca-marche" className="relative py-28 sm:py-36">
      <div className="absolute inset-0 bg-[#080d18]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="relative mx-auto max-w-5xl px-6">
        <FadeIn>
          <div className="text-center mb-20">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400/60 mb-4">
              Processus
            </p>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.03em] text-white">
              Simple comme 1 — 2 — 3
            </h2>
          </div>
        </FadeIn>

        <Stagger className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <StaggerItem key={step.num}>
              <HoverScale>
                <div className="glass rounded-2xl p-8 h-full transition-colors duration-300">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-400/40">
                    Étape {step.num}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-white tracking-[-0.01em]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/25 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </HoverScale>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   PRICING
   ════════════════════════════════════════════ */

function PricingSection() {
  const plans = [
    {
      name: "À la carte",
      price: "29",
      unit: "CHF / bien",
      desc: "Testez le service sur un bien",
      features: [
        "1 visite 3D navigable",
        "Lien partageable",
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
      desc: "19.90 CHF par bien — économisez 30%",
      features: [
        "10 biens en visite 3D",
        "Lien + embed par bien",
        "Hébergé 12 mois",
        "Support prioritaire",
        "Utilisable sans limite de temps",
      ],
      cta: "Commander le pack",
      href: STRIPE_LINK_PACK10,
      highlighted: true,
    },
    {
      name: "Pack 50",
      price: "799",
      unit: "CHF",
      desc: "15.98 CHF par bien — économisez 45%",
      features: [
        "50 biens en visite 3D",
        "Lien + embed par bien",
        "Hébergé 12 mois",
        "Support dédié",
        "Utilisable sans limite de temps",
      ],
      cta: "Commander le pack",
      href: STRIPE_LINK_PACK50,
      highlighted: false,
    },
  ];

  return (
    <section id="tarifs" className="relative py-28 sm:py-36">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/[0.04] blur-[150px]" />
      </div>
      <div className="relative mx-auto max-w-5xl px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400/60 mb-4">
              Tarifs
            </p>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.03em] text-white">
              Un prix par bien. Pas d&apos;abonnement.
            </h2>
            <p className="mt-4 text-white/25 text-sm max-w-md mx-auto">
              Vous filmez un appartement, on vous livre sa visite 3D. C&apos;est tout.
            </p>
          </div>
        </FadeIn>

        <Stagger className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <div className="relative h-full">
                {plan.highlighted && (
                  <>
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-blue-500/30 via-blue-500/10 to-transparent" />
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                      <span className="rounded-full bg-blue-500 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white shadow-lg shadow-blue-500/30">
                        Le plus populaire
                      </span>
                    </div>
                  </>
                )}
                <div
                  className={cn(
                    "relative rounded-2xl p-8 h-full flex flex-col",
                    plan.highlighted ? "bg-[#0a0f1c]" : "glass"
                  )}
                >
                  <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-[-0.04em] text-white">
                      {plan.price}
                    </span>
                    <span className="text-sm text-white/20">{plan.unit}</span>
                  </div>
                  <p className="mt-2 text-sm text-white/25">{plan.desc}</p>

                  <div className="my-7 gradient-divider" />

                  <ul className="space-y-3 flex-1">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm text-white/40"
                      >
                        <svg
                          className="h-4 w-4 shrink-0 text-emerald-400/50 mt-0.5"
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
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.href}
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "mt-8 w-full rounded-xl transition-all",
                      plan.highlighted
                        ? "bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/20"
                        : "bg-white/[0.05] hover:bg-white/[0.08] text-white border border-white/[0.06]"
                    )}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.3}>
          <p className="mt-14 text-center text-sm text-white/15">
            Besoin de visites illimitées ?{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Visite3D%20-%20Plan%20illimité`}
              className="text-blue-400/50 underline underline-offset-4 hover:text-blue-400 transition-colors"
            >
              Contactez-nous pour un forfait sur mesure
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   FAQ
   ════════════════════════════════════════════ */

function FAQSection() {
  const faqs = [
    {
      q: "Qu'est-ce qu'une visite 3D exactement ?",
      a: "C'est un modèle 3D navigable de votre bien. L'acheteur contrôle la caméra et se déplace librement dans chaque pièce — comme dans un jeu vidéo, mais avec les vrais matériaux, la vraie lumière, les vrais reflets. Beaucoup plus immersif qu'une série de photos ou une vidéo.",
    },
    {
      q: "Quel smartphone faut-il ?",
      a: "Tout smartphone de 2020 ou plus récent — iPhone ou Android. Pas besoin de capteur LiDAR ni de caméra 360.",
    },
    {
      q: "Combien de temps dure la capture ?",
      a: "5 à 10 minutes pour un appartement standard (3-4 pièces). On vous fournit un guide de capture étape par étape.",
    },
    {
      q: "Quel est le délai de livraison ?",
      a: "24 heures après réception de votre vidéo. Vous recevez un lien partageable et un code embed pour votre site.",
    },
    {
      q: "Comment intégrer la visite sur mes annonces ?",
      a: "Vous recevez un code iframe à coller sur n'importe quel site — WordPress, Wix, Squarespace, Webflow, Homegate. Un simple copier-coller.",
    },
    {
      q: "Un bien = un paiement ?",
      a: "Exactement. 29 CHF par bien à la carte. Les packs 10 et 50 biens permettent de baisser le coût unitaire. Chaque bien correspond à un appartement ou une maison.",
    },
    {
      q: "Combien de temps la visite reste en ligne ?",
      a: "12 mois inclus. Renouvellement possible ensuite.",
    },
  ];

  return (
    <section id="faq" className="relative py-28 sm:py-36">
      <div className="absolute inset-0 bg-[#080d18]" />
      <div className="relative mx-auto max-w-2xl px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.03em] text-white">
              Questions fréquentes
            </h2>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Accordion className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left text-sm font-medium text-white/60 hover:text-white transition-colors py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-white/25 leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   CTA
   ════════════════════════════════════════════ */

function CTASection() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.06] blur-[150px]" />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.04em] text-white leading-[1.05]">
            Votre premier bien
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              en visite 3D demain
            </span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-6 text-lg text-white/25">
            Filmez ce soir. On livre demain matin.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#tarifs"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white text-[#060a13] hover:bg-white/90 font-semibold text-sm px-8 py-6 rounded-full shadow-lg transition-all hover:shadow-xl"
              )}
            >
              Essayer pour 29 CHF
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Visite3D%20-%20Question`}
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "border border-white/[0.06] text-white/35 hover:bg-white/[0.03] hover:text-white/60 rounded-full text-sm px-8 py-6 transition-all"
              )}
            >
              Nous contacter
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   FOOTER
   ════════════════════════════════════════════ */

function Footer() {
  return (
    <footer className="border-t border-white/[0.04] bg-[#050810] py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-bold text-white tracking-[-0.02em]">
              Visite<span className="text-blue-400">3D</span>
            </p>
            <p className="mt-2 text-[13px] text-white/15">
              Visites 3D navigables pour l&apos;immobilier suisse.
            </p>
            <p className="mt-1 text-[11px] text-white/8">
              SwissEmpire2 Sàrl — Moutier, Suisse
            </p>
          </div>
          <div className="flex flex-col gap-3 text-[13px] sm:items-end">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-white/20 hover:text-white/50 transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
            <div className="flex flex-wrap gap-5 text-white/10">
              <a href="#comment-ca-marche" className="hover:text-white/30 transition-colors">
                Comment ça marche
              </a>
              <a href="#tarifs" className="hover:text-white/30 transition-colors">
                Tarifs
              </a>
              <a href="#faq" className="hover:text-white/30 transition-colors">
                FAQ
              </a>
              <a href="/guide-capture" className="hover:text-white/30 transition-colors">
                Guide de capture
              </a>
            </div>
            <div className="flex gap-5 text-white/8">
              <a href="/cgv" className="hover:text-white/20 transition-colors">
                CGV
              </a>
              <a href="/confidentialite" className="hover:text-white/20 transition-colors">
                Confidentialité
              </a>
            </div>
          </div>
        </div>
        <div className="gradient-divider mt-10" />
        <p className="mt-6 text-center text-[11px] text-white/8">
          © {new Date().getFullYear()} SwissEmpire2 Sàrl. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

/* ════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════ */

export default function Home() {
  return (
    <main className="bg-[#060a13]">
      <JsonLd data={serviceSchema} />
      {productSchemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      <GrainOverlay />
      <Navbar />
      <HeroSection />
      <ValueSection />
      <DemoSection />
      <StatsSection />
      <HowItWorks />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}

import { buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const DEMO_3D_URL =
  "https://cloud.splatlabs.ai/viewer/f95e1016-b5db-40ae-81cc-c6354b1c470c?view=splat";
const STRIPE_LINK_SINGLE = "#"; // TODO: Stripe Payment Link
const STRIPE_LINK_PACK10 = "#";
const STRIPE_LINK_PACK50 = "#";
const CONTACT_EMAIL = "lionel.ndombele@gmail.com";

/* ════════════════════════════════════════════
   NAVBAR
   ════════════════════════════════════════════ */

function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/[0.04] bg-[#060a13]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="text-lg font-bold text-white tracking-tight">
          Visite<span className="text-blue-400">3D</span>
        </a>
        <div className="hidden items-center gap-8 text-[13px] text-white/40 sm:flex">
          <a href="#demo" className="transition-colors hover:text-white">
            Demo
          </a>
          <a href="#features" className="transition-colors hover:text-white">
            Avantages
          </a>
          <a href="#pricing" className="transition-colors hover:text-white">
            Tarifs
          </a>
          <a href="#faq" className="transition-colors hover:text-white">
            FAQ
          </a>
        </div>
        <a
          href="#pricing"
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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#060a13]">
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-blue-600/[0.07] blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-violet-600/[0.05] blur-[100px]" />
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      <div className="relative mx-auto max-w-4xl px-6 pt-28 pb-20 text-center">
        <div className="animate-slide-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-white/50 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Nouveau en Suisse romande
          </span>
        </div>

        <h1 className="animate-slide-up delay-1 mt-8 text-[2.75rem] font-bold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.08]">
          Visite 3D photoréaliste
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-violet-400 bg-clip-text text-transparent">
            de votre bien en 24h
          </span>
        </h1>

        <p className="animate-slide-up delay-2 mx-auto mt-7 max-w-xl text-lg text-white/40 leading-relaxed">
          Transformez une vidéo smartphone en visite 3D immersive navigable.
          <br className="hidden sm:block" />
          Sans caméra spéciale. Sans abonnement.{" "}
          <span className="text-white/80 font-medium">Dès 29 CHF.</span>
        </p>

        <div className="animate-slide-up delay-3 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#pricing"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold px-8 py-6 rounded-full shadow-lg shadow-blue-500/20 transition-all hover:shadow-xl hover:shadow-blue-500/30"
            )}
          >
            Commander une visite 3D
          </a>
          <a
            href="#demo"
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "border border-white/10 text-white/60 hover:bg-white/[0.04] hover:text-white rounded-full text-sm px-8 py-6 transition-all"
            )}
          >
            Voir la demo live ↓
          </a>
        </div>

        <div className="animate-slide-up delay-4 mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] text-white/25">
          <span className="flex items-center gap-2">
            <CheckCircle /> Smartphone suffit
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle /> Livré en 24h
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle /> 10x moins cher que Matterport
          </span>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   DEMO — Browser frame + 3D viewer
   ════════════════════════════════════════════ */

function DemoSection() {
  return (
    <section id="demo" className="relative bg-[#060a13] pb-24 sm:pb-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-10">
          <p className="text-xs font-medium uppercase tracking-widest text-blue-400/70 mb-3">
            Demo interactive
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Naviguez librement dans cet intérieur
          </h2>
          <p className="mt-3 text-white/30 text-sm">
            Cliquez et déplacez pour explorer chaque pièce — exactement comme vos acheteurs le feront
          </p>
        </div>

        {/* Browser frame */}
        <div className="rounded-2xl border border-white/[0.06] bg-[#0a0f1c] shadow-2xl shadow-blue-950/40 overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.04]">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-white/[0.07]" />
              <div className="h-2.5 w-2.5 rounded-full bg-white/[0.07]" />
              <div className="h-2.5 w-2.5 rounded-full bg-white/[0.07]" />
            </div>
            <div className="flex-1 mx-8">
              <div className="h-7 max-w-xs mx-auto rounded-lg bg-white/[0.04] flex items-center justify-center text-[11px] text-white/20 font-mono">
                visite3d.ch/demo/appartement-geneve
              </div>
            </div>
          </div>
          <iframe
            src={DEMO_3D_URL}
            width="100%"
            height="500"
            className="block w-full sm:h-[560px]"
            allow="fullscreen; xr-spatial-tracking"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   METRICS BAR
   ════════════════════════════════════════════ */

function MetricsBar() {
  const metrics = [
    { value: "24h", label: "Délai de livraison" },
    { value: "29 CHF", label: "Par visite 3D" },
    { value: "5 min", label: "De capture vidéo" },
    { value: "12 mois", label: "Hébergement inclus" },
  ];

  return (
    <section className="bg-[#060a13] py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="glass rounded-xl px-6 py-5 text-center transition-all duration-300"
            >
              <p className="text-2xl font-bold text-white">{m.value}</p>
              <p className="mt-1 text-[11px] text-white/25 uppercase tracking-wider">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   BENTO FEATURES GRID
   ════════════════════════════════════════════ */

function BentoFeatures() {
  return (
    <section id="features" className="relative bg-[#060a13] py-24 sm:py-32">
      <div className="absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/[0.04] blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-medium uppercase tracking-widest text-blue-400/70 mb-3">
            Avantages
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Pourquoi les agences nous choisissent
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Large cell — spans 2 rows */}
          <div className="glass rounded-2xl p-8 md:row-span-2 flex flex-col justify-between transition-all duration-300">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                <CameraIcon />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Qualité photoréaliste
              </h3>
              <p className="mt-3 text-sm text-white/35 leading-relaxed">
                Technologie Gaussian Splatting — la meme utilisée par Zillow aux États-Unis. Vrais reflets, vraie lumière, vrai parquet. Plus immersif qu&apos;une visite 360 classique.
              </p>
            </div>
            <div className="mt-8 rounded-xl bg-white/[0.03] p-4">
              <div className="flex items-center gap-3 text-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-bold">
                  3D
                </span>
                <div>
                  <p className="text-white/60 font-medium">Navigation libre et continue</p>
                  <p className="text-[11px] text-white/25">Pas de téléportation entre points fixes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cell 2 */}
          <div className="glass rounded-2xl p-7 transition-all duration-300">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10">
              <PhoneIcon />
            </div>
            <h3 className="text-lg font-semibold text-white">Smartphone suffit</h3>
            <p className="mt-2 text-sm text-white/30 leading-relaxed">
              Pas de caméra 360, pas de LiDAR. Votre iPhone ou Android fait l&apos;affaire.
            </p>
          </div>

          {/* Cell 3 */}
          <div className="glass rounded-2xl p-7 transition-all duration-300">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
              <ClockIcon />
            </div>
            <h3 className="text-lg font-semibold text-white">Livré en 24 heures</h3>
            <p className="mt-2 text-sm text-white/30 leading-relaxed">
              Envoyez votre vidéo le matin, recevez votre visite 3D le soir. URL + embed prêts.
            </p>
          </div>

          {/* Cell 4 — spans 2 cols */}
          <div className="glass rounded-2xl p-7 md:col-span-2 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
                <FrancIcon />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  10x moins cher que Matterport
                </h3>
                <p className="mt-2 text-sm text-white/30 leading-relaxed">
                  29 CHF par tour au lieu de 3&apos;000+ CHF de camera + 70 CHF/mois d&apos;abonnement.
                  Pas d&apos;équipement à acheter. Marge maximale pour votre agence.
                </p>
              </div>
            </div>
          </div>
        </div>
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
      desc: "Parcourez chaque pièce avec votre smartphone pendant 5 minutes. On vous fournit un guide de capture simple.",
    },
    {
      num: "02",
      title: "Envoyez-nous la vidéo",
      desc: "Par WeTransfer, Google Drive ou WhatsApp. On s&apos;occupe de tout le traitement technique.",
    },
    {
      num: "03",
      title: "Recevez votre visite 3D",
      desc: "En 24h : un lien partageable + un code embed pour l&apos;intégrer sur votre site ou vos annonces.",
    },
  ];

  return (
    <section id="how" className="relative bg-[#080d18] py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-widest text-blue-400/70 mb-3">
            Processus
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Simple comme 1 — 2 — 3
          </h2>
          <p className="mt-3 text-white/30">
            Aucune compétence technique requise
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-px w-6 bg-gradient-to-r from-white/10 to-transparent sm:block translate-x-full z-10" />
              )}
              <div className="glass rounded-2xl p-8 h-full transition-all duration-300">
                <span className="text-[11px] font-bold uppercase tracking-widest text-blue-400/50">
                  Étape {step.num}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p
                  className="mt-3 text-sm text-white/30 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: step.desc }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   COMPARISON — Side by side cards
   ════════════════════════════════════════════ */

function ComparisonSection() {
  return (
    <section className="bg-[#060a13] py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Visite3D vs Matterport
          </h2>
          <p className="mt-3 text-white/30">
            La même qualité pour une fraction du prix
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Visite3D — highlighted */}
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-blue-500/30 via-blue-500/10 to-transparent" />
            <div className="relative rounded-2xl bg-[#0a0f1c] p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-lg font-bold text-white">
                  Visite<span className="text-blue-400">3D</span>
                </span>
                <span className="rounded-full bg-blue-500/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-400">
                  Recommandé
                </span>
              </div>
              <ul className="space-y-4">
                <ComparisonRow check label="Équipement" value="Smartphone" />
                <ComparisonRow check label="Coût par tour" value="29 CHF" />
                <ComparisonRow check label="Abonnement" value="Aucun" />
                <ComparisonRow check label="Qualité reflets" value="Photoréaliste" />
                <ComparisonRow check label="Navigation" value="Libre et continue" />
                <ComparisonRow check label="Délai" value="24h" />
              </ul>
            </div>
          </div>

          {/* Matterport — dimmed */}
          <div className="glass rounded-2xl p-8 opacity-50">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-lg font-semibold text-white/70">Matterport</span>
            </div>
            <ul className="space-y-4">
              <ComparisonRow label="Équipement" value="Camera 3'000+ CHF" />
              <ComparisonRow label="Coût par tour" value="~150+ CHF" />
              <ComparisonRow label="Abonnement" value="70-150 CHF/mois" />
              <ComparisonRow label="Qualité reflets" value="Surfaces déformées" />
              <ComparisonRow label="Navigation" value="Téléportation" />
              <ComparisonRow label="Délai" value="1h+ sur place" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonRow({
  check,
  label,
  value,
}: {
  check?: boolean;
  label: string;
  value: string;
}) {
  return (
    <li className="flex items-center justify-between text-sm">
      <span className="flex items-center gap-2 text-white/40">
        {check ? (
          <svg
            className="h-4 w-4 text-emerald-400"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        ) : (
          <svg
            className="h-4 w-4 text-white/15"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
        {label}
      </span>
      <span className={check ? "font-medium text-white" : "text-white/30"}>
        {value}
      </span>
    </li>
  );
}

/* ════════════════════════════════════════════
   PRICING — Glass cards
   ════════════════════════════════════════════ */

function PricingSection() {
  const plans = [
    {
      name: "A la carte",
      price: "29",
      unit: "CHF / tour",
      desc: "Idéal pour tester",
      features: [
        "1 visite 3D photoréaliste",
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
      desc: "Le plus populaire — 19.90 CHF/tour",
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
      desc: "Pour les agences actives — 15.98 CHF/tour",
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
    <section id="pricing" className="relative bg-[#080d18] py-24 sm:py-32">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/[0.05] blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-medium uppercase tracking-widest text-blue-400/70 mb-3">
            Tarifs
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Tarifs simples, sans surprise
          </h2>
          <p className="mt-3 text-white/30">
            Payez par tour. Pas d&apos;abonnement obligatoire.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="relative">
              {plan.highlighted && (
                <>
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-blue-500/40 via-blue-500/10 to-violet-500/5" />
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                    <span className="rounded-full bg-blue-500 px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/30">
                      Le plus populaire
                    </span>
                  </div>
                </>
              )}
              <div
                className={cn(
                  "relative rounded-2xl p-8 h-full flex flex-col",
                  plan.highlighted
                    ? "bg-[#0a0f1c]"
                    : "glass"
                )}
              >
                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-sm text-white/25">{plan.unit}</span>
                </div>
                <p className="mt-2 text-sm text-white/30">{plan.desc}</p>

                <div className="my-7 h-px bg-white/[0.06]" />

                <ul className="space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/50">
                      <CheckSmall />
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
                      : "bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/[0.08]"
                  )}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-white/20">
          Besoin de visites illimitées ?{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Visite3D%20-%20Plan%20illimité`}
            className="text-blue-400/70 underline underline-offset-4 hover:text-blue-400 transition-colors"
          >
            Contactez-nous pour un forfait sur mesure
          </a>
        </p>
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
      q: "Comment intégrer la visite sur mon site ou mes annonces ?",
      a: "Vous recevez un code iframe à coller sur n'importe quel site (WordPress, Wix, Squarespace, Webflow, Homegate...). Un simple copier-coller.",
    },
    {
      q: "Combien de temps la visite reste en ligne ?",
      a: "12 mois inclus dans chaque tour. Renouvellement possible ensuite.",
    },
    {
      q: "C'est quoi le Gaussian Splatting ?",
      a: "La technologie utilisée par Zillow aux États-Unis. Elle crée une scène 3D photoréaliste à partir d'une vidéo — avec les vrais reflets, la vraie lumière. Plus immersif qu'une visite 360 classique.",
    },
    {
      q: "Est-ce que ça marche sur mobile ?",
      a: "Oui. Desktop, tablette et smartphone. Vos acheteurs explorent le bien directement depuis leur canapé.",
    },
  ];

  return (
    <section id="faq" className="bg-[#060a13] py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Questions fréquentes
          </h2>
        </div>
        <Accordion className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass rounded-xl px-6 border-none"
            >
              <AccordionTrigger className="text-left text-sm font-medium text-white/70 hover:text-white transition-colors py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-white/30 leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   CTA
   ════════════════════════════════════════════ */

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#060a13] py-24 sm:py-32">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.08] blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-5xl">
          Votre première visite 3D
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            en 24 heures
          </span>
        </h2>
        <p className="mt-5 text-lg text-white/30">
          Rejoignez les agences qui réduisent les visites inutiles et
          impressionnent leurs acheteurs.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#pricing"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-white text-[#060a13] hover:bg-white/90 font-semibold text-sm px-8 py-6 rounded-full shadow-lg transition-all hover:shadow-xl"
            )}
          >
            Commander maintenant — 29 CHF
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Visite3D%20-%20Question`}
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "border border-white/10 text-white/50 hover:bg-white/[0.04] hover:text-white rounded-full text-sm px-8 py-6 transition-all"
            )}
          >
            Nous contacter
          </a>
        </div>
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
            <p className="text-lg font-bold text-white tracking-tight">
              Visite<span className="text-blue-400">3D</span>
            </p>
            <p className="mt-2 text-[13px] text-white/20">
              Visites 3D photoréalistes pour l&apos;immobilier suisse.
            </p>
            <p className="mt-1 text-[11px] text-white/10">
              SwissEmpire2 Sarl — Moutier, Suisse
            </p>
          </div>
          <div className="flex flex-col gap-2 text-[13px] sm:items-end">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-white/25 hover:text-white/60 transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
            <div className="flex gap-5 text-white/15">
              <a href="#how" className="hover:text-white/40 transition-colors">
                Comment ça marche
              </a>
              <a href="#pricing" className="hover:text-white/40 transition-colors">
                Tarifs
              </a>
              <a href="#faq" className="hover:text-white/40 transition-colors">
                FAQ
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 h-px bg-white/[0.04]" />
        <p className="mt-6 text-center text-[11px] text-white/10">
          © {new Date().getFullYear()} SwissEmpire2 Sarl. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

/* ════════════════════════════════════════════
   ICONS
   ════════════════════════════════════════════ */

function CheckCircle() {
  return (
    <svg className="h-4 w-4 shrink-0 text-blue-400/50" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function CheckSmall() {
  return (
    <svg className="h-4 w-4 shrink-0 text-emerald-400/60 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5 text-violet-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function FrancIcon() {
  return (
    <svg className="h-7 w-7 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    </svg>
  );
}

/* ════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════ */

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <DemoSection />
      <MetricsBar />
      <BentoFeatures />
      <HowItWorks />
      <ComparisonSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}

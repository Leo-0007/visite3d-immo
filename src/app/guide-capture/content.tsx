"use client";

import { useState, useCallback } from "react";
import {
  Smartphone,
  Footprints,
  Sun,
  RotateCcw,
  Ban,
  Link2,
  DoorOpen,
  Sofa,
  CookingPot,
  Bed,
  Bath,
  Warehouse,
  Trees,
  Check,
  X,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn, Stagger, StaggerItem, HoverScale } from "@/components/animations";

/* ═══════════════════════════════════════════
   SECTION 1 — Hero
   ═══════════════════════════════════════════ */

function HeroSection() {
  return (
    <section className="relative flex min-h-[45svh] items-center justify-center overflow-hidden pt-24 pb-8">
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <span className="inline-flex items-center gap-2 rounded-lg border border-[var(--v3d-warm-border)] bg-[var(--v3d-warm-bg)] px-4 py-1.5 text-xs text-[var(--v3d-text-muted)]">
            iPhone 12+ &middot; Android recent &middot; 1080p minimum
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="mt-8 text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.04em] leading-[0.95] text-[var(--v3d-text)]">
            Filmez votre bien{" "}
            <span className="text-[var(--v3d-blue)]">
              en 5 minutes
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mx-auto mt-6 max-w-lg text-base text-[var(--v3d-text-secondary)] leading-relaxed">
            Suivez ce guide pour obtenir une visite 3D de qualite
            professionnelle avec votre smartphone.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — Checklist interactive
   ═══════════════════════════════════════════ */

const checklistItems = [
  "Ranger et nettoyer chaque piece",
  "Ouvrir tous les volets et stores",
  "Allumer toutes les lumieres",
  "Retirer objets personnels (photos, courrier, medicaments)",
  "Verifier batterie smartphone : 50%+ minimum",
  "Liberer 2 Go de stockage",
  "Mode paysage active (horizontal)",
  "Desactiver les notifications (mode ne pas deranger)",
];

function ChecklistSection() {
  const [checked, setChecked] = useState<boolean[]>(
    new Array(checklistItems.length).fill(false)
  );

  const toggle = useCallback((i: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  }, []);

  const doneCount = checked.filter(Boolean).length;
  const allDone = doneCount === checklistItems.length;
  const pct = (doneCount / checklistItems.length) * 100;

  return (
    <SectionWrapper>
      <FadeIn>
        <SectionHeader
          badge="Preparation"
          title="Avant de filmer — 5 minutes de preparation"
        />
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mx-auto max-w-lg">
          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-[var(--v3d-text-muted)]">
                {doneCount}/{checklistItems.length} elements
              </span>
              <span className="text-xs text-[var(--v3d-text-muted)]">{Math.round(pct)}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-[var(--v3d-warm-bg)]">
              <div
                className={cn(
                  "h-full rounded-full transition-all duration-500",
                  allDone ? "bg-emerald-500" : "bg-[var(--v3d-blue)]"
                )}
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>

          {/* Items */}
          <div className="space-y-2">
            {checklistItems.map((item, i) => (
              <button
                key={item}
                type="button"
                onClick={() => toggle(i)}
                className={cn(
                  "flex w-full items-center gap-4 rounded-xl px-5 py-3.5 text-left transition-all duration-200",
                  checked[i]
                    ? "bg-emerald-50 border border-emerald-200"
                    : "border border-[var(--v3d-warm-border)] bg-white shadow-sm hover:bg-[var(--v3d-warm-bg)]"
                )}
              >
                <div
                  className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-md border transition-all",
                    checked[i]
                      ? "border-emerald-300 bg-emerald-100"
                      : "border-[var(--v3d-warm-border)] bg-[var(--v3d-warm-bg)]"
                  )}
                >
                  {checked[i] && (
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                  )}
                </div>
                <span
                  className={cn(
                    "text-sm transition-colors",
                    checked[i] ? "text-[var(--v3d-text-muted)] line-through" : "text-[var(--v3d-text-secondary)]"
                  )}
                >
                  {item}
                </span>
              </button>
            ))}
          </div>

          {/* All done message */}
          {allDone && (
            <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center">
              <p className="text-sm font-semibold text-emerald-600">
                Vous etes pret a filmer !
              </p>
            </div>
          )}
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}

/* ═══════════════════════════════════════════
   SECTION 3 — Guide pièce par pièce
   ═══════════════════════════════════════════ */

const rooms = [
  {
    icon: DoorOpen,
    name: "Entree / Couloir",
    duration: "30 sec",
    tip: "Commencez ici, tournez lentement",
    avoid: "Ne pas filmer le paillasson ou la porte d'entree de trop pres",
  },
  {
    icon: Sofa,
    name: "Salon",
    duration: "90 sec",
    tip: "Faites 2 tours complets, capturez les angles",
    avoid: "Eviter la tele allumee (reflets et artefacts)",
  },
  {
    icon: CookingPot,
    name: "Cuisine",
    duration: "60 sec",
    tip: "Plan de travail propre, portes fermees",
    avoid: "Pas de vaisselle visible, poubelle videe",
  },
  {
    icon: Bed,
    name: "Chambre principale",
    duration: "60 sec",
    tip: "Lit fait, volets ouverts",
    avoid: "Retirer les effets personnels sur les tables de nuit",
  },
  {
    icon: Bed,
    name: "Chambre(s)",
    duration: "45 sec",
    tip: "Idem chambre principale",
    avoid: "Bureau range, cables invisibles",
  },
  {
    icon: Bath,
    name: "Salle de bain",
    duration: "30 sec",
    tip: "Abattant WC ferme, miroir propre",
    avoid: "Retirer les produits d'hygiene du lavabo",
  },
  {
    icon: Warehouse,
    name: "Cave / Garage",
    duration: "30 sec",
    tip: "Lumiere allumee obligatoire",
    avoid: "Deplacer les objets qui bloquent le passage",
  },
  {
    icon: Trees,
    name: "Exterieur / Balcon",
    duration: "45 sec",
    tip: "Dernier, lumiere naturelle",
    avoid: "Eviter le contre-jour direct du soleil",
  },
];

function RoomGuideSection() {
  return (
    <SectionWrapper>
      <FadeIn>
        <SectionHeader
          badge="Piece par piece"
          title="Parcours de capture recommande"
          description="Suivez cet ordre pour un resultat optimal. Durees indicatives pour un bien standard."
        />
      </FadeIn>

      <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {rooms.map((room) => (
          <StaggerItem key={room.name}>
            <div className="border border-[var(--v3d-warm-border)] bg-white shadow-sm rounded-xl p-5 h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
                  <room.icon
                    className="h-4 w-4 text-[var(--v3d-blue)]"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-[var(--v3d-text)]">
                    {room.name}
                  </h3>
                  <span className="text-[11px] text-[var(--v3d-blue)]">
                    {room.duration}
                  </span>
                </div>
              </div>
              <p className="text-[13px] text-[var(--v3d-text-secondary)] mb-2">{room.tip}</p>
              <p className="text-[11px] text-[var(--v3d-text-muted)] italic">
                A eviter : {room.avoid}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </SectionWrapper>
  );
}

/* ═══════════════════════════════════════════
   SECTION 4 — Règles d'or
   ═══════════════════════════════════════════ */

const goldenRules = [
  {
    icon: Smartphone,
    title: "Hauteur",
    description:
      "Tenez le smartphone a hauteur de poitrine (1.20m), pas au-dessus de la tete.",
  },
  {
    icon: Footprints,
    title: "Vitesse",
    description:
      "Marchez lentement, 2x moins vite que d'habitude. Comptez 3 secondes par pas.",
  },
  {
    icon: RotateCcw,
    title: "Stabilite",
    description:
      "Deux mains sur le telephone. Gimbal recommande mais non obligatoire.",
  },
];

function GoldenRulesSection() {
  return (
    <SectionWrapper>
      <FadeIn>
        <SectionHeader badge="Regles d'or" title="3 principes essentiels" />
      </FadeIn>

      <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {goldenRules.map((rule) => (
          <StaggerItem key={rule.title}>
            <HoverScale>
              <div className="relative h-full">
                <div className="relative flex flex-col items-center rounded-2xl border border-[var(--v3d-warm-border)] bg-white shadow-sm p-8 text-center h-full">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-50 ring-1 ring-[var(--v3d-blue)]/20">
                    <rule.icon
                      className="h-6 w-6 text-[var(--v3d-blue)]"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-[var(--v3d-text)]">
                    {rule.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--v3d-text-secondary)]">
                    {rule.description}
                  </p>
                </div>
              </div>
            </HoverScale>
          </StaggerItem>
        ))}
      </Stagger>
    </SectionWrapper>
  );
}

/* ═══════════════════════════════════════════
   SECTION 5 — Causes de refus
   ═══════════════════════════════════════════ */

const rejectionCauses = [
  "Video en mode portrait (vertical) — Rejet automatique",
  "Duree inferieure a 3 minutes — Bien incomplet",
  "Flou majeur sur plus de 30% — Filmer plus lentement",
  "Personnes ou animaux visibles — Refaire cette piece",
  "Eclairage insuffisant — Allumer plus de lumieres",
];

function RejectionSection() {
  return (
    <SectionWrapper>
      <FadeIn>
        <SectionHeader
          badge="A eviter"
          title="Ce qui peut invalider votre capture"
        />
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mx-auto max-w-lg">
          <div className="border border-[var(--v3d-warm-border)] bg-white shadow-sm rounded-2xl p-6 sm:p-8">
            <ul className="space-y-3">
              {rejectionCauses.map((cause) => (
                <li
                  key={cause}
                  className="flex items-start gap-3 text-sm text-[var(--v3d-text-secondary)]"
                >
                  <X
                    className="mt-0.5 h-4 w-4 shrink-0 text-red-500"
                    aria-hidden="true"
                  />
                  {cause}
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle
                  className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                  aria-hidden="true"
                />
                <p className="text-sm text-[var(--v3d-text-secondary)] leading-relaxed">
                  En cas de rejet, nous vous expliquons exactement quoi
                  corriger.{" "}
                  <strong className="text-[var(--v3d-text)]">
                    1 reprise gratuite incluse.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}

/* ═══════════════════════════════════════════
   SECTION 6 — CTA
   ═══════════════════════════════════════════ */

function CTASection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <FadeIn>
          <h2 className="text-2xl font-bold text-[var(--v3d-text)] sm:text-3xl">
            Pret ? Envoyez votre video maintenant
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/envoyer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-[var(--v3d-blue)] hover:bg-[#164060] text-white text-sm font-semibold px-8 py-6 rounded-lg shadow-md transition-all"
              )}
            >
              Envoyer ma video
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="/#tarifs"
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "border border-[var(--v3d-warm-border)] text-[var(--v3d-text-secondary)] hover:bg-[var(--v3d-warm-bg)] hover:text-[var(--v3d-text)] rounded-lg text-sm px-8 py-6 transition-all"
              )}
            >
              Ou commandez d&apos;abord
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   MAIN EXPORT
   ═══════════════════════════════════════════ */

export function GuideCaptureContent() {
  return (
    <>
      <HeroSection />
      <ChecklistSection />
      <RoomGuideSection />
      <GoldenRulesSection />
      <RejectionSection />
      <CTASection />
    </>
  );
}

"use client";

import {
  FileText,
  Globe,
  Zap,
  Check,
  X,
  FolderOpen,
  Image,
  FileType,
  Link2,
  QrCode,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn, Stagger, StaggerItem, HoverScale } from "@/components/animations";
import { CONTACT_EMAIL } from "@/lib/constants";

/* ═══════════════════════════════════════════
   SECTION 1 — Hero
   ═══════════════════════════════════════════ */

function HeroSection() {
  return (
    <section className="relative flex min-h-[50svh] items-center justify-center overflow-hidden pt-24 pb-12">
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <span className="inline-flex items-center gap-2 rounded-lg border border-[var(--v3d-warm-border)] bg-[var(--v3d-warm-bg)] px-4 py-1.5 text-xs text-[var(--v3d-text-muted)]">
            Compatible Homegate &middot; ImmoScout24 &middot; Comparis
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="mt-8 text-[clamp(2rem,5vw,4rem)] font-bold tracking-[-0.04em] leading-[0.95] text-[var(--v3d-text)]">
            Publiez sur Homegate{" "}
            <span className="text-[var(--v3d-blue)]">
              en 5 minutes
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mx-auto mt-6 max-w-lg text-base text-[var(--v3d-text-secondary)] leading-relaxed">
            Votre dossier Visite3D contient tout ce dont vous avez besoin,
            au bon format, pr{"ê"}t {"à"} copier-coller.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <a
            href="#tarifs"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-8 bg-[var(--v3d-blue)] hover:bg-[#164060] text-white text-sm font-semibold px-8 py-6 rounded-lg shadow-md transition-all"
            )}
          >
            Cr{"é"}er mon dossier publication — 89 CHF
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — Avant / Après
   ═══════════════════════════════════════════ */

const beforeItems = [
  "Photographe a planifier : 3-5 jours d'attente",
  "Upload photos une par une (mauvais nommage)",
  "Texte d'annonce a rediger soi-meme (45 min)",
  "Lien visite 3D oublie dans l'annonce",
  "Total : ~90 minutes de travail de publication",
];

const afterItems = [
  "Votre dossier livre en 24h",
  "Photos HD nommees homegate-01.jpg a homegate-05.jpg",
  "Texte d'annonce redige par IA, optimise longueur Homegate",
  "Lien visite 3D et code embed prets",
  "Plan d'etage au bon format",
  "Total : 5 minutes de publication",
];

function ComparisonSection() {
  return (
    <SectionWrapper>
      <FadeIn>
        <SectionHeader
          badge="Avant / Apres"
          title="Publier une annonce ne devrait pas prendre 90 minutes"
        />
      </FadeIn>

      <div className="grid gap-6 lg:grid-cols-2">
        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8 h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100">
                <X className="h-4 w-4 text-red-500" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--v3d-text)]">
                Sans Visite3D
              </h3>
            </div>
            <ul className="space-y-3">
              {beforeItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-[var(--v3d-text-secondary)]"
                >
                  <X
                    className="mt-0.5 h-4 w-4 shrink-0 text-red-400"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100">
                <Check
                  className="h-4 w-4 text-emerald-600"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-lg font-semibold text-[var(--v3d-text)]">
                Avec le Pack Immo
              </h3>
            </div>
            <ul className="space-y-3">
              {afterItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-[var(--v3d-text-secondary)]"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}

/* ═══════════════════════════════════════════
   SECTION 3 — Guide Homegate étape par étape
   ═══════════════════════════════════════════ */

const homegateSteps = [
  {
    icon: Globe,
    title: "Connectez-vous a votre compte Homegate",
    description:
      "Dans la gestion de vos annonces, cliquez sur 'Nouvelle annonce' ou modifiez une annonce existante.",
  },
  {
    icon: FileText,
    title: "Utilisez notre dossier publication",
    description:
      "Copiez le texte d'annonce, uploadez les photos (deja nommees dans le bon ordre), et collez le lien visite 3D dans le champ 'Visite virtuelle'.",
  },
  {
    icon: Zap,
    title: "Publiez et suivez vos resultats",
    description:
      "Votre annonce est prete. Les acheteurs explorent le bien avant de se deplacer.",
  },
];

const immoscoutSteps = [
  {
    icon: Globe,
    title: "Ouvrez votre espace ImmoScout24",
    description:
      "Accedez a la gestion d'annonces et selectionnez 'Creer une annonce' ou editez une annonce existante.",
  },
  {
    icon: FileText,
    title: "Importez le dossier Visite3D",
    description:
      "Meme processus que Homegate : collez le texte, uploadez les photos nommees, et ajoutez le lien visite virtuelle.",
  },
  {
    icon: Zap,
    title: "Publiez en quelques clics",
    description:
      "Le format est identique pour les deux portails. Un seul dossier, deux publications.",
  },
];

function PortalGuideSection({
  title,
  portalName,
  steps,
}: {
  title: string;
  portalName: string;
  steps: typeof homegateSteps;
}) {
  return (
    <SectionWrapper>
      <FadeIn>
        <SectionHeader
          badge={portalName}
          title={title}
        />
      </FadeIn>

      <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <StaggerItem key={step.title}>
            <HoverScale>
              <div className="flex flex-col items-center rounded-2xl border border-[var(--v3d-warm-border)] bg-white p-8 text-center shadow-sm h-full">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--v3d-blue)] shadow-md">
                  <span className="text-lg font-bold text-white">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mb-3 text-lg font-semibold tracking-tight text-[var(--v3d-text)]">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--v3d-text-muted)]">
                  {step.description}
                </p>
              </div>
            </HoverScale>
          </StaggerItem>
        ))}
      </Stagger>
    </SectionWrapper>
  );
}

/* ═══════════════════════════════════════════
   SECTION 5 — Contenu du dossier
   ═══════════════════════════════════════════ */

const dossierItems = [
  { icon: Image, name: "homegate-01.jpg ... homegate-05.jpg", label: "5 photos HD" },
  { icon: FileType, name: "plan-etage-2d.png", label: "Plan d'etage 2D" },
  { icon: FileText, name: "texte-annonce-fr.txt", label: "Texte d'annonce IA" },
  { icon: Link2, name: "visite3d-url.txt", label: "Lien visite 3D" },
  { icon: QrCode, name: "qr-code-vitrine.png", label: "QR code imprimable" },
  { icon: ClipboardCheck, name: "checklist-publication.pdf", label: "Checklist publication" },
];

function DossierSection() {
  return (
    <SectionWrapper>
      <FadeIn>
        <SectionHeader
          badge="Livrables"
          title="Ce que contient votre dossier"
          description="Tout est pret, au bon format, pret a uploader."
        />
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="mx-auto max-w-lg">
          <div className="rounded-2xl border border-[var(--v3d-warm-border)] bg-white p-6 shadow-sm sm:p-8">
            {/* Folder header */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--v3d-warm-border)]">
              <FolderOpen
                className="h-6 w-6 text-[var(--v3d-blue)]"
                aria-hidden="true"
              />
              <span className="text-sm font-mono text-[var(--v3d-text-secondary)]">
                dossier-visite3d-[adresse]/
              </span>
            </div>

            {/* File list */}
            <ul className="space-y-3">
              {dossierItems.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center gap-3"
                >
                  <item.icon
                    className="h-4 w-4 shrink-0 text-[var(--v3d-text-muted)]"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-mono text-[var(--v3d-text-secondary)] flex-1">
                    {item.name}
                  </span>
                  <span className="text-[11px] text-[var(--v3d-text-muted)]">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}

/* ═══════════════════════════════════════════
   SECTION 6 — FAQ portails
   ═══════════════════════════════════════════ */

const portalFaq = [
  {
    q: "Mon agence a deja un compte Homegate. Est-ce compatible ?",
    a: "Oui, notre dossier fonctionne avec tous les comptes Homegate existants, qu'ils soient particuliers ou agences.",
  },
  {
    q: "Puis-je utiliser la visite 3D sur plusieurs portails ?",
    a: "Oui. Le lien de partage fonctionne sur Homegate, ImmoScout24, Comparis, votre propre site web, et partout ou vous pouvez inserer un lien.",
  },
  {
    q: "Quand sera disponible la publication automatique ?",
    a: "Nous travaillons sur l'integration API directe avec Homegate et ImmoScout24. Disponible en Q3 2026 pour les comptes Pack Agence et Regie.",
  },
];

function PortalFAQ() {
  return (
    <SectionWrapper>
      <FadeIn>
        <SectionHeader badge="FAQ" title="Questions sur les portails" />
      </FadeIn>

      <div className="mx-auto max-w-2xl space-y-4">
        {portalFaq.map((item) => (
          <FadeIn key={item.q}>
            <div className="rounded-xl border border-[var(--v3d-warm-border)] bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-[var(--v3d-text)] mb-2">
                {item.q}
              </h3>
              <p className="text-sm text-[var(--v3d-text-muted)] leading-relaxed">
                {item.a}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}

/* ═══════════════════════════════════════════
   SECTION 7 — CTA final
   ═══════════════════════════════════════════ */

function CTAFinal() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <FadeIn>
          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold tracking-[-0.03em] text-[var(--v3d-text)]">
            Pr{"ê"}t {"à"} publier votre prochain bien en 5 minutes ?
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/#tarifs"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-[var(--v3d-blue)] hover:bg-[#164060] text-white text-sm font-semibold px-8 py-6 rounded-lg shadow-md transition-all"
              )}
            >
              Commencer avec le Pack Immo — 89 CHF
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="/#demo"
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "border border-[var(--v3d-warm-border)] text-[var(--v3d-text-secondary)] hover:bg-[var(--v3d-warm-bg)] hover:text-[var(--v3d-text)] rounded-lg text-sm px-8 py-6 transition-all"
              )}
            >
              Voir la d{"é"}mo 3D
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

export function GuidePortailsContent() {
  return (
    <>
      <HeroSection />
      <ComparisonSection />
      <PortalGuideSection
        title="Integrer votre visite 3D sur Homegate"
        portalName="Homegate"
        steps={homegateSteps}
      />
      <PortalGuideSection
        title="Publier sur ImmoScout24"
        portalName="ImmoScout24"
        steps={immoscoutSteps}
      />
      <DossierSection />
      <PortalFAQ />
      <CTAFinal />
    </>
  );
}

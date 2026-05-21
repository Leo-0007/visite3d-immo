import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Conditions generales de vente",
  description: "Conditions generales de vente de Visite3D Immo, service de SwissEmpire2 Sarl.",
  alternates: {
    canonical: "/cgv",
  },
};

export default function CGVPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={breadcrumbSchema("Conditions generales de vente", "/cgv")} />
      <div className="mx-auto max-w-3xl px-6 py-20">
        {/* Back */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--v3d-text-muted)] hover:text-[var(--v3d-text)] transition-colors mb-12"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Retour
        </a>

        <h1 className="text-3xl font-bold text-[var(--v3d-text)] tracking-[-0.03em] mb-2">
          Conditions generales de vente
        </h1>
        <p className="text-sm text-[var(--v3d-text-muted)] mb-12">
          Derniere mise a jour : mai 2026
        </p>

        <div className="space-y-10 text-sm text-[var(--v3d-text-secondary)] leading-relaxed">
          <Section title="1. Prestataire">
            <p>
              SwissEmpire2 Sarl<br />
              Moutier, Suisse<br />
              Contact : {CONTACT_EMAIL}
            </p>
          </Section>

          <Section title="2. Service">
            <p>
              Visite3D Immo propose un service de creation de visites virtuelles
              3D navigables a partir de videos fournies par le client. Le service
              comprend le traitement de la video, la generation du modele 3D et
              l&apos;hebergement de la visite (6 mois pour l&apos;offre Solo,
              12 mois pour les offres Pack Immo et Pack Agence).
            </p>
          </Section>

          <Section title="3. Commande et paiement">
            <p>
              Les commandes sont passees via le site visite3dimmo.ch. Le
              paiement est effectue en ligne par carte bancaire via Stripe. Les
              prix sont affiches en francs suisses (CHF) et comprennent toutes
              les taxes applicables. Le paiement est du au moment de la
              commande.
            </p>
          </Section>

          <Section title="4. Livraison">
            <p>
              La visite 3D est livree par email dans un delai de 24 heures
              ouvrees apres reception de la video du bien. La livraison comprend
              un lien de visite partageable et un code embed iframe. Ce delai
              est indicatif et non contractuel.
            </p>
          </Section>

          <Section title="5. Qualite et reprise">
            <p>
              Si la qualite de la visite 3D est jugee insuffisante en raison
              d&apos;un probleme de traitement de notre part, nous nous engageons
              a reprendre le traitement gratuitement. Si la qualite insuffisante
              est due a la qualite de la video fournie par le client (floue,
              trop sombre, trop rapide), une nouvelle video pourra etre demandee.
            </p>
          </Section>

          <Section title="6. Hebergement">
            <p>
              Chaque visite 3D est hebergee pendant 6 mois (offre Solo) ou
              12 mois (Pack Immo, Pack Agence) a compter de la livraison.
              Au-dela, le client peut renouveler l&apos;hebergement a
              9 CHF/mois.
              SwissEmpire2 Sarl se reserve le droit de supprimer les visites non
              renouvelees apres un delai de grace de 30 jours.
            </p>
          </Section>

          <Section title="7. Propriete intellectuelle">
            <p>
              Le client reste proprietaire de la video source et du contenu
              qu&apos;elle represente. SwissEmpire2 Sarl conserve un droit
              d&apos;utilisation du modele 3D genere a des fins de demonstration et
              de marketing, sauf demande contraire explicite du client.
            </p>
          </Section>

          <Section title="8. Responsabilite">
            <p>
              SwissEmpire2 Sarl ne peut etre tenue responsable des dommages
              indirects lies a l&apos;utilisation du service. La responsabilite
              est limitee au montant de la commande concernee.
            </p>
          </Section>

          <Section title="9. Droit de retractation">
            <p>
              Conformement a la legislation suisse, le client peut annuler sa
              commande dans un delai de 14 jours apres le paiement, a condition
              que le traitement de la video n&apos;ait pas encore commence. Une
              fois le traitement lance, aucun remboursement n&apos;est possible.
            </p>
          </Section>

          <Section title="10. Droit applicable">
            <p>
              Les presentes conditions sont soumises au droit suisse. Tout
              litige sera porte devant les tribunaux competents du canton de
              Berne.
            </p>
          </Section>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-base font-semibold text-[var(--v3d-text)] mb-3">{title}</h2>
      {children}
    </div>
  );
}

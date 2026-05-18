import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Politique de confidentialite",
  description: "Politique de confidentialite de Visite3D Immo, service de SwissEmpire2 Sarl.",
  alternates: {
    canonical: "/confidentialite",
  },
};

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-[#060a13] relative">
      <JsonLd data={breadcrumbSchema("Politique de confidentialite", "/confidentialite")} />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="relative mx-auto max-w-3xl px-6 py-20">
        {/* Back */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/20 hover:text-white/50 transition-colors mb-12"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Retour
        </a>

        <h1 className="text-3xl font-bold text-white tracking-[-0.03em] mb-2">
          Politique de confidentialite
        </h1>
        <p className="text-sm text-white/20 mb-12">
          Derniere mise a jour : mai 2026
        </p>

        <div className="space-y-10 text-sm text-white/35 leading-relaxed">
          <Section title="1. Responsable du traitement">
            <p>
              SwissEmpire2 Sarl<br />
              Moutier, Suisse<br />
              Contact : {CONTACT_EMAIL}
            </p>
          </Section>

          <Section title="2. Donnees collectees">
            <p>Nous collectons les donnees suivantes :</p>
            <ul className="mt-2 space-y-1.5 list-disc pl-5">
              <li>Nom et prenom ou raison sociale</li>
              <li>Adresse email</li>
              <li>Numero de telephone (si fourni via WhatsApp)</li>
              <li>Adresse du bien immobilier concerne</li>
              <li>Video du bien (contenu fourni par le client)</li>
              <li>Donnees de paiement (traitees par Stripe, jamais stockees chez nous)</li>
            </ul>
          </Section>

          <Section title="3. Finalite du traitement">
            <p>Vos donnees sont utilisees exclusivement pour :</p>
            <ul className="mt-2 space-y-1.5 list-disc pl-5">
              <li>La creation et la livraison de votre visite 3D</li>
              <li>La communication relative a votre commande</li>
              <li>La facturation et le suivi comptable</li>
            </ul>
          </Section>

          <Section title="4. Partage des donnees">
            <p>
              Vos donnees ne sont jamais vendues ni partagees a des tiers a des
              fins commerciales. Elles peuvent etre transmises a :
            </p>
            <ul className="mt-2 space-y-1.5 list-disc pl-5">
              <li>Stripe (traitement des paiements)</li>
              <li>Vercel (hebergement du site)</li>
              <li>Services de stockage cloud (hebergement des modeles 3D)</li>
            </ul>
          </Section>

          <Section title="5. Duree de conservation">
            <p>
              Les videos source sont conservees pendant la duree du traitement
              puis supprimees dans un delai de 30 jours apres livraison. Les
              modeles 3D sont heberges pendant 12 mois (renouvelable). Les
              donnees de facturation sont conservees 10 ans conformement au droit
              suisse.
            </p>
          </Section>

          <Section title="6. Vos droits">
            <p>
              Conformement a la Loi federale sur la protection des donnees
              (LPD), vous disposez des droits suivants :
            </p>
            <ul className="mt-2 space-y-1.5 list-disc pl-5">
              <li>Droit d&apos;acces a vos donnees personnelles</li>
              <li>Droit de rectification des donnees inexactes</li>
              <li>Droit de suppression de vos donnees</li>
              <li>Droit de portabilite de vos donnees</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous a {CONTACT_EMAIL}.
            </p>
          </Section>

          <Section title="7. Cookies">
            <p>
              Le site visite3dimmo.ch utilise uniquement des cookies
              techniques necessaires au fonctionnement du site. Aucun cookie
              publicitaire ou de suivi n&apos;est utilise. Les analytics, si
              actives, utilisent des solutions respectueuses de la vie privee et
              conformes au droit suisse.
            </p>
          </Section>

          <Section title="8. Securite">
            <p>
              Nous prenons des mesures techniques et organisationnelles
              appropriees pour proteger vos donnees contre tout acces non
              autorise, toute modification ou toute destruction. Les paiements
              sont securises par Stripe (certifie PCI DSS Niveau 1).
            </p>
          </Section>

          <Section title="9. Modifications">
            <p>
              Cette politique peut etre mise a jour. La date de derniere
              modification est indiquee en haut de page. L&apos;utilisation
              continuee du service apres modification vaut acceptation.
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
      <h2 className="text-base font-semibold text-white/60 mb-3">{title}</h2>
      {children}
    </div>
  );
}

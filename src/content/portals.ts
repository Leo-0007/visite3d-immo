/**
 * Swiss real estate portal information.
 * Used by portal-integration section and guide-portails page.
 */

export interface Portal {
  id: string;
  name: string;
  logo: string;
  description: string;
  features: string[];
  status: "live" | "coming-soon";
  comingSoonLabel?: string;
}

export const portals: Portal[] = [
  {
    id: "homegate",
    name: "Homegate",
    logo: "/portals/homegate.svg",
    description:
      "Le portail immobilier n1 en Suisse. Integrez votre visite 3D directement dans vos annonces.",
    features: [
      "Lien visite 3D dans le champ virtualTourUrl",
      "Miniature optimisee pour le listing",
      "Dossier complet pret a publier",
    ],
    status: "live",
  },
  {
    id: "immoscout24",
    name: "ImmoScout24",
    logo: "/portals/immoscout24.svg",
    description:
      "Deuxieme portail suisse. Publication via le meme dossier que Homegate.",
    features: [
      "Meme format de visite 3D compatible",
      "Embed iframe dans la description",
      "Guide de publication inclus",
    ],
    status: "live",
  },
];

export const portalIntegrationSteps = [
  {
    step: 1,
    title: "Recevez votre dossier",
    description:
      "Avec le Pack Immo, vous recevez un dossier complet : visite 3D, plan 2D, photos HD et texte d'annonce.",
  },
  {
    step: 2,
    title: "Copiez le lien 3D",
    description:
      "Un seul lien a coller dans le champ 'Visite virtuelle' de Homegate ou ImmoScout24.",
  },
  {
    step: 3,
    title: "Publiez en 5 minutes",
    description:
      "Photos deja renommees, texte pret a copier. Votre annonce est en ligne en quelques clics.",
  },
];

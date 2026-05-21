/**
 * Source de verite absolue pour les offres Visite3D Immo.
 * NE JAMAIS MODIFIER les prix ou features sans validation business.
 */

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number | null;
  priceLabel: string;
  priceSubLabel?: string;
  badge: string | null;
  highlighted: boolean;
  stripeLink: string | null;
  deliveryTime: string;
  features: string[];
  notIncluded?: string[];
  cta: string;
}

export interface Upsell {
  id: string;
  name: string;
  price: string;
  description: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "solo",
    name: "Solo",
    description: "Pour les particuliers et agents occasionnels",
    price: 49,
    priceLabel: "49 CHF / bien",
    badge: null,
    highlighted: false,
    stripeLink: "https://buy.stripe.com/eVq28q6dGeT4bxn4oXfEk04",
    deliveryTime: "24h",
    features: [
      "Visite 3D navigable (navigation libre)",
      "Lien de partage + code embed",
      "Miniature optimisee Homegate",
      "QR code vitrine imprimable",
      "Hebergement 6 mois inclus",
      "Livraison en 24h",
    ],
    notIncluded: [
      "Plan d'etage 2D",
      "Photos HD extraites",
      "Texte d'annonce IA",
      "Dossier publication Homegate",
    ],
    cta: "Commander",
  },
  {
    id: "pack-immo",
    name: "Pack Immo",
    description:
      "Tout pour publier votre bien sur Homegate en 5 minutes",
    price: 89,
    priceLabel: "89 CHF / bien",
    badge: "Recommande",
    highlighted: true,
    stripeLink: "https://buy.stripe.com/9B6eVc9pS4eqdFv7B9fEk05",
    deliveryTime: "24h",
    features: [
      "Tout du Solo, plus :",
      "Plan d'etage 2D professionnel",
      "5 photos HD extraites de la 3D",
      "Texte d'annonce optimise IA",
      "Dossier pret a publier Homegate",
      "Hebergement 12 mois inclus",
      "Support prioritaire",
    ],
    cta: "Choisir le Pack",
  },
  {
    id: "pack-agence",
    name: "Pack Agence",
    description:
      "Pour les agences avec un flux regulier de mandats",
    price: 399,
    priceLabel: "399 CHF / 10 biens",
    priceSubLabel: "soit 39.90 CHF par bien",
    badge: "Meilleure valeur",
    highlighted: false,
    stripeLink: process.env.NEXT_PUBLIC_STRIPE_LINK_AGENCE ?? null,
    deliveryTime: "24h",
    features: [
      "Tout du Pack Immo x10 biens",
      "Dashboard client dedie",
      "Branding agence (votre logo)",
      "Support prioritaire par email",
      "Hebergement 12 mois inclus",
      "Utilisable sans limite de temps",
    ],
    cta: "Commander le pack",
  },
  {
    id: "regie",
    name: "Regie",
    description:
      "Volume illimite, integration sur mesure, white-label",
    price: null,
    priceLabel: "Sur mesure",
    priceSubLabel: "des 29 CHF/bien",
    badge: null,
    highlighted: false,
    stripeLink: null,
    deliveryTime: "Meme jour",
    features: [
      "Tout du Pack Agence, plus :",
      "Tarif degressif illimite",
      "API d'integration disponible",
      "Marque blanche complete",
      "Account manager personnel",
      "Publication auto Homegate (Q3 2026)",
    ],
    cta: "Nous contacter",
  },
];

export const upsells: Upsell[] = [
  {
    id: "plan-2d",
    name: "Plan 2D seul",
    price: "+19 CHF",
    description: "Plan d'etage professionnel sans le pack complet",
  },
  {
    id: "staging",
    name: "Staging virtuel IA",
    price: "+39 CHF",
    description: "Meubles virtuels ajoutes dans les pieces vides",
  },
  {
    id: "video-social",
    name: "Video reseaux sociaux",
    price: "+25 CHF",
    description: "Clip 30s optimise Instagram/TikTok depuis la 3D",
  },
  {
    id: "hebergement",
    name: "Hebergement prolonge",
    price: "9 CHF/mois",
    description: "Prolonger l'hebergement au-dela de la periode incluse",
  },
  {
    id: "analytics",
    name: "Analytics visiteurs",
    price: "15 CHF/mois",
    description: "Statistiques de visites, temps passe, zones vues",
  },
];

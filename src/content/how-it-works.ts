export const steps = [
  {
    number: 1,
    title: "Filmez",
    description:
      "Filmez chaque pièce de votre bien avec votre smartphone. Un simple panoramique lent à 360° suffit — pas besoin de matériel professionnel. Comptez environ 5 minutes pour un appartement standard.",
    icon: "Smartphone",
  },
  {
    number: 2,
    title: "Envoyez",
    description:
      "Uploadez vos vidéos via notre formulaire sécurisé ou envoyez-les par WeTransfer. Nos techniciens prennent le relais immédiatement pour créer votre visite 3D.",
    icon: "Upload",
  },
  {
    number: 3,
    title: "Recevez",
    description:
      "Recevez votre visite 3D interactive en 24h avec un lien partageable, un code embed pour votre site et une miniature HD prête pour vos annonces immobilières.",
    icon: "Eye",
  },
] as const;

export type Step = (typeof steps)[number];

/**
 * Temoignages clients.
 * NOTE: Ces temoignages sont fictifs pour le MVP.
 * A remplacer par de vrais retours clients des que possible.
 * Chaque temoignage doit etre valide par le client avant publication.
 */
export const testimonials = [
  {
    name: "Marc B.",
    role: "Directeur d'agence",
    company: "Agence immobiliere",
    location: "Geneve",
    quote:
      "On a teste le service sur un appartement. Le rendu est bluffant pour le prix. On attend de voir les retours sur Homegate avant de passer au volume.",
  },
  {
    name: "Sophie F.",
    role: "Courtiere independante",
    company: "Immobilier romand",
    location: "Lausanne",
    quote:
      "J'ai envoye la video le matin, la visite etait en ligne l'apres-midi. Mes clients apprecient de pouvoir visiter a distance avant de se deplacer.",
  },
  {
    name: "Thomas M.",
    role: "Gerant de regie",
    company: "Regie immobiliere",
    location: "Bienne",
    quote:
      "Le Pack Agence nous a permis d'equiper notre portefeuille locatif en visites 3D. Le rapport qualite-prix est correct pour une solution sans materiel.",
  },
] as const;

export type Testimonial = (typeof testimonials)[number];

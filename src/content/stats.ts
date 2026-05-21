export const stats = [
  {
    value: "24",
    suffix: "h",
    label: "Délai de livraison",
  },
  {
    value: "49",
    suffix: " CHF",
    label: "Par bien immobilier",
  },
  {
    value: "5",
    suffix: " min",
    label: "Temps de capture",
  },
  {
    value: "0",
    suffix: " CHF",
    label: "D'équipement supplémentaire",
  },
] as const;

export type Stat = (typeof stats)[number];

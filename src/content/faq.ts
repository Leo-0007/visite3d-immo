export const faqItems = [
  {
    question: "Qu'est-ce qu'une visite virtuelle 3D exactement ?",
    answer:
      "C'est une reconstitution interactive de votre bien immobilier que vos clients peuvent explorer librement depuis leur navigateur, comme s'ils y étaient. Ils se déplacent de pièce en pièce, regardent autour d'eux à 360° et zooment sur les détails. C'est bien plus immersif qu'une simple galerie photo.",
  },
  {
    question: "Comment filmer mon bien pour obtenir une visite 3D ?",
    answer:
      "Rien de plus simple : filmez chaque pièce avec votre smartphone en effectuant un panoramique lent et régulier à 360°. Tenez le téléphone à hauteur de poitrine, en mode paysage. Nous vous fournissons un guide de capture détaillé avec toutes les astuces pour un résultat optimal.",
  },
  {
    question: "Quel équipement est nécessaire pour filmer ?",
    answer:
      "Un smartphone récent suffit (iPhone ou Android). Pas besoin de caméra 360°, de trépied ou de matériel professionnel. Si votre téléphone filme en Full HD, c'est parfait. Pour un rendu encore meilleur, un simple stabilisateur de smartphone est un plus, mais pas une obligation.",
  },
  {
    question: "Quel est le délai de livraison ?",
    answer:
      "Le délai standard est de 24 heures ouvrées après réception de votre vidéo. Pour les offres Régie, la livraison express est disponible : votre visite est prête le jour même si vous envoyez la vidéo avant 14h.",
  },
  {
    question: "Sous quel format est livrée la visite 3D ?",
    answer:
      "Vous recevez un lien web direct à partager, un code embed iframe à intégrer sur votre site ou portail immobilier, et une miniature HD optimisée pour vos annonces. La visite fonctionne sur tous les navigateurs et appareils, sans application à installer.",
  },
  {
    question: "Est-ce compatible avec Homegate, ImmoScout24 et les portails suisses ?",
    answer:
      "Oui. Le lien de visite peut être ajouté dans le champ « visite virtuelle » de la plupart des portails immobiliers suisses, dont Homegate, ImmoScout24, Immomig et acheter-louer.ch. Le code embed iframe fonctionne également sur votre propre site web.",
  },
  {
    question: "Combien de temps la visite reste-t-elle en ligne ?",
    answer:
      "L'hébergement est inclus 6 mois avec l'offre Solo et 12 mois avec le Pack Immo et Pack Agence. Passé ce délai, vous pouvez prolonger à 9 CHF/mois ou télécharger vos fichiers. Nous vous prévenons un mois avant l'expiration.",
  },
  {
    question: "Puis-je faire modifier une visite après livraison ?",
    answer:
      "Oui, une révision mineure est incluse (recadrage, ajustement de luminosité, retrait d'un élément). Pour une modification majeure ou une refonte complète, nous vous proposons un tarif préférentiel. Contactez-nous simplement par email.",
  },
  {
    question: "Quelle est votre politique de remboursement ?",
    answer:
      "Si le résultat ne correspond pas à vos attentes malgré une vidéo conforme à nos recommandations, nous refaisons la visite gratuitement. Si le problème persiste, nous vous remboursons intégralement. La satisfaction client est notre priorité.",
  },
  {
    question: "Quelle est la difference entre Solo et Pack Immo ?",
    answer:
      "L'offre Solo (49 CHF) vous donne la visite 3D navigable avec lien et embed. Le Pack Immo (89 CHF) ajoute un plan d'etage 2D, 5 photos HD extraites, un texte d'annonce optimise par IA et un dossier pret a publier sur Homegate. Pour les agences, le Pack Agence (399 CHF / 10 biens) inclut un dashboard client et le branding agence.",
  },
  {
    question: "Le service est-il disponible dans toute la Suisse ?",
    answer:
      "Oui, Visite3D Immo est disponible dans toute la Suisse. Vous filmez vous-même et nous envoyez la vidéo en ligne — aucun déplacement nécessaire. Nous servons des clients à Genève, Lausanne, Berne, Zurich, Bâle, Lugano et partout ailleurs en Suisse.",
  },
] as const;

export type FaqItem = (typeof faqItems)[number];

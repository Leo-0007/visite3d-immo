/**
 * Schema.org structured data definitions for Visite3D Immo.
 *
 * All schemas use JSON-LD format with https://schema.org context.
 * Validated against Google's supported rich result types (May 2025).
 *
 * NOTE: FAQPage schema is intentionally omitted.
 * Since August 2023, Google restricts FAQ rich results to government
 * and healthcare authority sites only. Adding it would be ignored.
 */

import { SITE_URL, CONTACT_EMAIL } from "./constants";

/** LocalBusiness schema -- company info + service area */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Visite3D Immo",
  legalName: "SwissEmpire2 Sarl",
  description:
    "Visites 3D navigables pour l'immobilier suisse. Transformez une video smartphone en visite 3D immersive en 24h.",
  url: SITE_URL,
  email: CONTACT_EMAIL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Moutier",
    addressRegion: "Berne",
    addressCountry: "CH",
  },
  areaServed: {
    "@type": "Country",
    name: "Switzerland",
  },
  priceRange: "CHF 15-29 par bien",
  currenciesAccepted: "CHF",
  paymentAccepted: "Credit Card, Debit Card",
  image: `${SITE_URL}/og-image.png`,
  sameAs: [],
};

/** WebSite schema -- enables sitelinks search box in Google */
export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Visite3D Immo",
  url: SITE_URL,
  inLanguage: "fr-CH",
  publisher: {
    "@id": `${SITE_URL}/#business`,
  },
};

/** Product/Offer schemas for the 3 pricing tiers */
export const productSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/#product-single`,
    name: "Visite 3D - A la carte",
    description:
      "1 visite 3D navigable d'un bien immobilier. Lien partageable, code embed iframe, heberge 12 mois, livre en 24h.",
    brand: {
      "@type": "Brand",
      name: "Visite3D Immo",
    },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/#tarifs`,
      price: "29",
      priceCurrency: "CHF",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2027-12-31",
      seller: {
        "@id": `${SITE_URL}/#business`,
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/#product-pack10`,
    name: "Visite 3D - Pack 10 biens",
    description:
      "10 visites 3D navigables de biens immobiliers. 19.90 CHF par bien. Lien + embed par bien, heberge 12 mois, support prioritaire.",
    brand: {
      "@type": "Brand",
      name: "Visite3D Immo",
    },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/#tarifs`,
      price: "199",
      priceCurrency: "CHF",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2027-12-31",
      seller: {
        "@id": `${SITE_URL}/#business`,
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/#product-pack50`,
    name: "Visite 3D - Pack 50 biens",
    description:
      "50 visites 3D navigables de biens immobiliers. 15.98 CHF par bien. Lien + embed par bien, heberge 12 mois, support dedie.",
    brand: {
      "@type": "Brand",
      name: "Visite3D Immo",
    },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/#tarifs`,
      price: "799",
      priceCurrency: "CHF",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2027-12-31",
      seller: {
        "@id": `${SITE_URL}/#business`,
      },
    },
  },
];

/**
 * BreadcrumbList generator for any subpage.
 *
 * Usage: breadcrumbSchema("Guide de capture", "/guide-capture")
 */
export function breadcrumbSchema(pageName: string, pagePath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pageName,
        item: `${SITE_URL}${pagePath}`,
      },
    ],
  };
}

/**
 * Service schema -- describes the core offering.
 * Complements Product schemas by describing the service itself.
 */
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/#service`,
  name: "Creation de visites 3D immobilieres",
  description:
    "Transformation de videos smartphone en visites 3D navigables pour l'immobilier. Livraison en 24h.",
  provider: {
    "@id": `${SITE_URL}/#business`,
  },
  serviceType: "Visite virtuelle 3D",
  areaServed: {
    "@type": "Country",
    name: "Switzerland",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Forfaits Visite 3D",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@id": `${SITE_URL}/#product-single` },
      },
      {
        "@type": "Offer",
        itemOffered: { "@id": `${SITE_URL}/#product-pack10` },
      },
      {
        "@type": "Offer",
        itemOffered: { "@id": `${SITE_URL}/#product-pack50` },
      },
    ],
  },
};

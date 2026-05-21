import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/marketing/footer";
import { GuidePortailsContent } from "./content";

export const metadata: Metadata = {
  title: "Comment publier une visite 3D sur Homegate",
  description:
    "Guide complet pour integrer votre visite 3D sur Homegate et ImmoScout24. Dossier pret a publier inclus dans le Pack Immo. Livraison en 24h des 89 CHF.",
  alternates: { canonical: "/guide-portails" },
  openGraph: {
    title: "Comment publier une visite 3D sur Homegate | Visite3D Immo",
    description:
      "Guide complet pour integrer votre visite 3D sur Homegate et ImmoScout24. Dossier pret a publier inclus.",
  },
};

export default function GuidePortailsPage() {
  return (
    <main className="bg-white">
      <JsonLd data={breadcrumbSchema("Guide portails", "/guide-portails")} />
      <Navbar />
      <GuidePortailsContent />
      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/marketing/footer";
import { UploadContent } from "./content";

export const metadata: Metadata = {
  title: "Envoyer votre video",
  description:
    "Envoyez la video de votre bien immobilier. Formulaire simple et securise.",
  robots: { index: false, follow: false },
};

export default function UploadPage() {
  return (
    <main className="bg-white">
      <JsonLd data={breadcrumbSchema("Upload", "/upload")} />
      <Navbar />
      <UploadContent />
      <Footer />
    </main>
  );
}

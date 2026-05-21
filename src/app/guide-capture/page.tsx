import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/marketing/footer";
import { GuideCaptureContent } from "./content";

export const metadata: Metadata = {
  title: "Guide de capture smartphone",
  description:
    "Comment filmer votre appartement ou maison pour obtenir une visite 3D professionnelle. Guide complet etape par etape avec checklist.",
  alternates: { canonical: "/guide-capture" },
  openGraph: {
    title: "Guide de capture smartphone | Visite3D Immo",
    description:
      "Filmez votre bien en 5 minutes avec votre smartphone. Checklist, guide piece par piece et regles d'or.",
  },
};

export default function GuideCapturePage() {
  return (
    <main className="bg-white">
      <JsonLd data={breadcrumbSchema("Guide de capture", "/guide-capture")} />
      <Navbar />
      <GuideCaptureContent />
      <Footer />
    </main>
  );
}

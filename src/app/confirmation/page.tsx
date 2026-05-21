import type { Metadata } from "next";
import { Suspense } from "react";
import { ConfirmationContent } from "./content";

export const metadata: Metadata = {
  title: "Paiement confirme",
  robots: { index: false, follow: false },
};

export default function ConfirmationPage() {
  return (
    <Suspense>
      <ConfirmationContent />
    </Suspense>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Visite3D Immo — Visite 3D photoréaliste de votre bien en 24h",
  description:
    "Transformez une vidéo smartphone en visite 3D immersive. 29 CHF par tour. Sans caméra spéciale. Livré en 24h. Service suisse.",
  keywords: [
    "visite 3D",
    "immobilier",
    "Gaussian Splatting",
    "visite virtuelle",
    "Suisse",
    "agence immobilière",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

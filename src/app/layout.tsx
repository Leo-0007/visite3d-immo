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
    "visite 3D Suisse romande",
    "visite virtuelle appartement",
  ],
  metadataBase: new URL("https://visite3d.vercel.app"),
  openGraph: {
    title: "Visite3D — Visite 3D photoréaliste en 24h | Dès 29 CHF",
    description:
      "Transformez une vidéo smartphone en visite 3D immersive pour vos annonces immobilières. Sans caméra spéciale. Livré en 24h.",
    url: "https://visite3d.vercel.app",
    siteName: "Visite3D Immo",
    locale: "fr_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visite3D — Visite 3D photoréaliste en 24h",
    description:
      "Transformez une vidéo smartphone en visite 3D immersive. Dès 29 CHF. Sans caméra spéciale.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
      <head>
        <meta name="theme-color" content="#060a13" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

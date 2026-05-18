import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScrollProvider } from "./providers";
import { JsonLd } from "@/components/json-ld";
import { localBusinessSchema, webSiteSchema } from "@/lib/schema";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Visite3D Immo — Visite 3D navigable de votre bien | Dès 29 CHF",
    template: "%s | Visite3D Immo",
  },
  description:
    "Transformez une vidéo smartphone en visite 3D immersive. Vos acheteurs explorent librement chaque pièce. 29 CHF par bien. Sans caméra spéciale. Livré en 24h.",
  keywords: [
    "visite 3D",
    "immobilier",
    "Gaussian Splatting",
    "visite virtuelle",
    "Suisse",
    "agence immobilière",
    "visite 3D Suisse romande",
    "visite virtuelle appartement",
    "visite virtuelle immobilier Suisse",
    "visite 3D immobilière",
    "Matterport alternative Suisse",
  ],
  metadataBase: new URL("https://visite3dimmo.ch"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Visite3D Immo — Visite 3D navigable en 24h | Dès 29 CHF",
    description:
      "Vos acheteurs explorent le bien en 3D depuis leur écran. Filmez avec votre smartphone, on s'occupe du reste. 29 CHF par bien.",
    url: "https://visite3dimmo.ch",
    siteName: "Visite3D Immo",
    locale: "fr_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visite3D — Visite 3D navigable en 24h",
    description:
      "Vos acheteurs explorent le bien en 3D depuis leur écran. Dès 29 CHF par bien. Sans caméra spéciale.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
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
        <meta name="geo.region" content="CH-BE" />
        <meta name="geo.placename" content="Moutier" />
        {/* DNS prefetch for external origins used later in the page */}
        <link rel="dns-prefetch" href="https://cloud.splatlabs.ai" />
        <link rel="dns-prefetch" href="https://buy.stripe.com" />
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={webSiteSchema} />
      </head>
      <body className="min-h-full flex flex-col bg-[#060a13]">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}

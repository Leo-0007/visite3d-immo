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
      "Visite3D Immo — Visite 3D navigable de votre bien | Des 49 CHF",
    template: "%s | Visite3D Immo",
  },
  description:
    "Transformez une video smartphone en visite 3D immersive. Vos acheteurs explorent librement chaque piece. 49 CHF par bien. Sans camera speciale. Livre en 24h.",
  keywords: [
    "visite 3D",
    "immobilier",
    "visite virtuelle",
    "Suisse",
    "agence immobiliere",
    "visite 3D Suisse romande",
    "visite virtuelle appartement",
    "visite virtuelle immobilier Suisse",
    "visite 3D immobiliere",
    "Matterport alternative Suisse",
    "Homegate visite virtuelle",
  ],
  metadataBase: new URL("https://visite3dimmo.ch"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Visite3D Immo — Visite 3D navigable en 24h | Des 49 CHF",
    description:
      "Vos acheteurs explorent le bien en 3D depuis leur ecran. Filmez avec votre smartphone, on s'occupe du reste. 49 CHF par bien.",
    url: "https://visite3dimmo.ch",
    siteName: "Visite3D Immo",
    locale: "fr_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visite3D — Visite 3D navigable en 24h",
    description:
      "Vos acheteurs explorent le bien en 3D depuis leur ecran. Des 49 CHF par bien. Sans camera speciale.",
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
        <meta name="theme-color" content="#ffffff" />
        <meta name="geo.region" content="CH-BE" />
        <meta name="geo.placename" content="Moutier" />
        <link rel="dns-prefetch" href="https://cloud.splatlabs.ai" />
        <link rel="dns-prefetch" href="https://buy.stripe.com" />
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={webSiteSchema} />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#1A1A1A]">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}

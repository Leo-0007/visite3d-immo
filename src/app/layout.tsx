import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScrollProvider } from "./providers";
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
  title: "Visite3D Immo — Visite 3D navigable de votre bien | Dès 29 CHF",
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
  ],
  metadataBase: new URL("https://visite3d.vercel.app"),
  openGraph: {
    title: "Visite3D — Visite 3D navigable en 24h | Dès 29 CHF",
    description:
      "Vos acheteurs explorent le bien en 3D depuis leur écran. Filmez avec votre smartphone, on s'occupe du reste. 29 CHF par bien.",
    url: "https://visite3d.vercel.app",
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
      <body className="min-h-full flex flex-col bg-[#060a13]">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}

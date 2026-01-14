import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSiteSettings } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const settings = getSiteSettings();

export const metadata: Metadata = {
  title: {
    default: `${settings.name} - ${settings.tagline}`,
    template: `%s | ${settings.name}`,
  },
  description: settings.tagline,
  keywords: [
    "devis travaux",
    "artisan",
    "rénovation",
    "panneaux solaires",
    "pompe à chaleur",
    "isolation",
    "toiture",
    "plomberie",
  ],
  authors: [{ name: settings.name }],
  creator: settings.name,
  metadataBase: new URL(`https://${settings.domain}`),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: `https://${settings.domain}`,
    siteName: settings.name,
    title: settings.name,
    description: settings.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: settings.name,
    description: settings.tagline,
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
  verification: {
    google: "D287S-sbSARe7c0sKHHY0bw8ajoi5tW-ULAbt3Z4ZH4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

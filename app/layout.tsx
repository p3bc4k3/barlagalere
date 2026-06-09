import type { Metadata } from "next";
import { Inter, Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://p3bc4k3.github.io/barlagalere"),
  title: {
    default: "La Galère · Bar Glacier Cocktail · Valras-Plage",
    template: "%s | La Galère · Valras-Plage",
  },
  description:
    "Bar · Glacier · Cocktail en front de mer à Valras-Plage (34350). Profiter du moment présent face à la Méditerranée. 94% de clients satisfaits · 273 avis.",
  keywords: [
    "bar valras-plage",
    "glacier valras-plage",
    "cocktail bord de mer",
    "la galère valras",
    "bar plage hérault",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "La Galère Valras-Plage",
    title: "La Galère · Bar Glacier Cocktail · Valras-Plage",
    description:
      "Bar · Glacier · Cocktail en front de mer à Valras-Plage. Profiter du moment présent face à la Méditerranée.",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Galère · Bar Glacier Cocktail · Valras-Plage",
    description:
      "Bar · Glacier · Cocktail en front de mer à Valras-Plage. Profiter du moment présent.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${playfair.variable} ${lato.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

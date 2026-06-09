import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Esprit } from "@/components/sections/Esprit";
import { SocialProof } from "@/components/sections/SocialProof";
import { CTA } from "@/components/sections/CTA";
import { WaveSeparator } from "@/components/animations/WaveSeparator";

export const metadata: Metadata = {
  title: "La Galère · Bar Glacier Cocktail · Valras-Plage",
  description:
    "Bar · Glacier · Cocktail en front de mer à Valras-Plage (34350). Profiter du moment présent face à la Méditerranée. 94% de clients satisfaits · 273 avis.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Esprit />
      {/* Vague animée séparant Esprit (fond sombre) du reste */}
      <WaveSeparator className="-mt-20 relative z-10" />
      <SocialProof />
      <CTA />
    </>
  );
}

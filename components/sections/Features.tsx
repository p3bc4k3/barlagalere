"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Waves } from "lucide-react";
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/animations/FadeIn";
import { CocktailGlass } from "@/components/animations/CocktailGlass";
import { IceCreamScoop } from "@/components/animations/IceCreamScoop";

const pillars = [
  {
    id: "cocktails",
    title: "Bar & Cocktails",
    description:
      "Des créations artisanales élaborées avec soin, inspirées par la Méditerranée. Herbes fraîches, agrumes du Sud, spiritueux de qualité — chaque verre est une invitation au voyage.",
  },
  {
    id: "glacier",
    title: "Glacier",
    description:
      "Coupes généreuses, sorbets frais, sundaes gourmands. La douceur glacée au bord de l'eau, pour se rafraîchir sans se presser sous le soleil de Valras.",
  },
  {
    id: "mer",
    title: "Vue mer",
    description:
      "En terrasse face à la Méditerranée, les pieds dans le sable. La mer comme horizon, le soleil comme décor — l'endroit idéal pour savourer l'instant.",
  },
];

function WavesIcon() {
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center"
      animate={shouldReduce ? {} : { rotate: [0, 5, -5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <Waves size={22} className="text-accent" aria-hidden="true" />
    </motion.div>
  );
}

export function Features() {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="pillars-heading">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            L&apos;expérience La Galère
          </p>
          <h2
            id="pillars-heading"
            className="font-heading text-3xl md:text-4xl font-bold tracking-tight"
          >
            Un lieu, trois plaisirs
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.id}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
                className="h-full"
              >
                <div className="rounded-2xl border border-border bg-card p-8 h-full transition-shadow duration-300 hover:shadow-lg hover:border-primary/40 cursor-default">
                  <div className="mb-6">
                    {pillar.id === "cocktails" ? (
                      <CocktailGlass />
                    ) : pillar.id === "glacier" ? (
                      <IceCreamScoop />
                    ) : (
                      <WavesIcon />
                    )}
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

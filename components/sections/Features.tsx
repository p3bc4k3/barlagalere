import { Wine, IceCream, Waves } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { FadeIn } from "@/components/animations/FadeIn";

const pillars = [
  {
    icon: Wine,
    title: "Bar & Cocktails",
    description:
      "Des créations artisanales élaborées avec soin, inspirées par la Méditerranée. Herbes fraîches, agrumes du Sud, spiritueux de qualité — chaque verre est une invitation au voyage.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: IceCream,
    title: "Glacier",
    description:
      "Coupes généreuses, sorbets frais, sundaes gourmands. La douceur glacée au bord de l'eau, pour se rafraîchir sans se presser sous le soleil de Valras.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Waves,
    title: "Vue mer",
    description:
      "En terrasse face à la Méditerranée, les pieds dans le sable. La mer comme horizon, le soleil comme décor — l'endroit idéal pour savourer l'instant.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
];

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
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <StaggerItem key={pillar.title}>
                <div className="rounded-2xl border border-border bg-card p-8 h-full transition-shadow duration-200 hover:shadow-lg cursor-default">
                  <div
                    className={`w-12 h-12 rounded-full ${pillar.bg} flex items-center justify-center mb-6`}
                  >
                    <Icon size={22} className={pillar.color} aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

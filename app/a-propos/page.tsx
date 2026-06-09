import type { Metadata } from "next";
import { Heart, Users, Leaf, MapPin, Wifi, CreditCard, Music, Clock } from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "La Galère, bar-glacier-cocktail en front de mer à Valras-Plage. Découvrez notre esprit et notre lieu.",
};

const values = [
  {
    icon: Heart,
    title: "Convivialité",
    description:
      "Un endroit où l'on se sent bien. Où chaque client est accueilli comme un habitué, avec la chaleur propre aux établissements du bord de mer méditerranéen.",
  },
  {
    icon: Leaf,
    title: "Qualité",
    description:
      "Des boissons préparées avec soin, des glaces fraîches, des produits sélectionnés. La qualité n'est pas une option quand on a la chance d'être face à la mer.",
  },
  {
    icon: Users,
    title: "Lieu de vie",
    description:
      "Plus qu'un bar, un lieu de vie. Un point de repère à Valras-Plage où se retrouver — en famille, entre amis, ou simplement seul face à la Méditerranée.",
  },
];

export default function AProposPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, hsl(197,68%,32%) 0%, hsl(33,78%,59%) 60%, hsl(13,64%,48%) 100%)",
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="font-accent text-sm uppercase tracking-[0.25em] text-white/65 mb-5">
              Front de mer · Valras-Plage
            </p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white leading-tight">
              La Galère
            </h1>
            <div
              className="w-16 h-px bg-white/50 mx-auto my-5"
              aria-hidden="true"
            />
            <p className="font-heading text-xl italic text-white/80">
              Bar · Glacier · Cocktail
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeIn direction="right">
              <div className="space-y-6">
                <div>
                  <p className="font-accent text-xs uppercase tracking-widest text-primary mb-3">
                    Notre lieu
                  </p>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                    Valras-Plage,
                    <br />
                    les pieds dans la Méditerranée
                  </h2>
                </div>
                <p className="text-base leading-[1.85] text-muted-foreground">
                  Valras-Plage est une station balnéaire de l&apos;Hérault, nichée à
                  l&apos;embouchure de l&apos;Orb sur la côte méditerranéenne. Ses plages de
                  sable fin, son front de mer animé et sa proximité avec Béziers en
                  font l&apos;une des destinations estivales incontournables du Languedoc.
                </p>
                <p className="text-base leading-[1.85] text-muted-foreground">
                  C&apos;est dans ce cadre privilégié, directement en bord de mer, que
                  La Galère a posé ses tables. Depuis 2008, ce bar-glacier-cocktail
                  ouvert sur l&apos;horizon invite à la lenteur et à la douceur de vivre.
                </p>
                <p className="text-base leading-[1.85] text-muted-foreground">
                  Ici, pas de précipitation. On vient pour s&apos;arrêter, pour regarder
                  la mer, pour savourer un verre en bonne compagnie. C&apos;est ce que
                  résume notre manière d&apos;être :
                </p>
                <p className="font-heading text-xl italic text-primary">
                  &ldquo;Profiter du moment présent.&rdquo;
                </p>
              </div>
            </FadeIn>

            {/* Location visual */}
            <FadeIn direction="left">
              <div
                className="relative rounded-2xl overflow-hidden aspect-square"
                style={{
                  background:
                    "linear-gradient(145deg, #1A6B8A 0%, #2A7FA5 35%, #E8A045 70%, #C94F2C 100%)",
                }}
                aria-label="Situation de La Galère sur le front de mer de Valras-Plage"
              >
                <div
                  className="absolute inset-0 bg-foreground/20"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-5 border border-white/25">
                    <MapPin size={24} className="text-white" aria-hidden="true" />
                  </div>
                  <p className="font-heading text-xl font-bold text-white">
                    1 Boulevard Jean Moulin
                  </p>
                  <p className="font-heading text-lg text-white/75 mt-1">
                    34350 Valras-Plage
                  </p>
                  <p className="font-accent text-xs text-white/55 mt-2 tracking-widest uppercase">
                    Hérault (34) · Méditerranée
                  </p>
                  <p className="font-accent text-xs text-white/40 mt-3 tracking-wide">
                    Depuis 2008
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Équipements */}
      <section className="py-12 sm:py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <FadeIn>
            <p className="font-accent text-xs uppercase tracking-widest text-primary mb-6 text-center">
              Services & équipements
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                { icon: Clock, label: "Happy Hours" },
                { icon: Music, label: "Animations" },
                { icon: Wifi, label: "Wi-Fi gratuit" },
                { icon: CreditCard, label: "Paiement CB" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium"
                >
                  <Icon size={15} className="text-primary" aria-hidden="true" />
                  {label}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-muted/40" aria-labelledby="values-heading">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="font-accent text-xs uppercase tracking-widest text-primary mb-3">
              Ce qui nous anime
            </p>
            <h2
              id="values-heading"
              className="font-heading text-3xl md:text-4xl font-bold tracking-tight"
            >
              Nos valeurs
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={value.title}>
                  <div className="rounded-2xl border border-border bg-card p-8 h-full text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                      <Icon size={22} className="text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Localisation CTA */}
      <section className="py-20 sm:py-28">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <FadeIn>
            <p className="font-accent text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Où nous trouver
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight">
              Au cœur de Valras-Plage
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              1 Boulevard Jean Moulin, 34350 Valras-Plage — en plein front de mer,
              à deux pas du sable. Station balnéaire de l&apos;Hérault, sur la côte
              méditerranéenne du Languedoc.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://maps.google.com/?q=1+Boulevard+Jean+Moulin+34350+Valras-Plage"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 text-sm font-semibold transition-colors duration-150 cursor-pointer shadow"
              >
                <MapPin size={15} aria-hidden="true" />
                Voir sur Google Maps
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card hover:bg-muted px-6 py-3 text-sm font-medium transition-colors duration-150 cursor-pointer"
              >
                Nous contacter
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

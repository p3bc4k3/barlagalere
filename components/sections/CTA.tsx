import { MapPin } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

export function CTA() {
  return (
    <section
      className="py-24 sm:py-32"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="relative rounded-2xl bg-primary px-8 py-16 md:py-20 text-center overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>

            <p className="font-accent text-primary-foreground/70 text-xs font-medium uppercase tracking-widest mb-4">
              Front de mer · Valras-Plage
            </p>
            <h2
              id="cta-heading"
              className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground tracking-tight"
            >
              Venez nous rendre visite
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-lg mx-auto text-base leading-relaxed">
              Que ce soit pour un cocktail au coucher du soleil, une glace en famille,
              ou simplement profiter de la Méditerranée — La Galère vous attend.
            </p>

            <div className="mt-10">
              <a
                href="https://maps.google.com/?q=La+Galère+Valras-Plage"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background hover:bg-foreground/90 px-8 py-3.5 text-sm font-semibold transition-colors duration-150 cursor-pointer shadow"
              >
                <MapPin size={16} aria-hidden="true" />
                Accéder à Google Maps
              </a>
            </div>

            <p className="mt-6 font-accent text-primary-foreground/60 text-xs">
              Front de mer · Valras-Plage · 34350 · Hérault
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

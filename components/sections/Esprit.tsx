import { MapPin } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

export function Esprit() {
  return (
    <section
      className="py-24 sm:py-32 bg-foreground text-background"
      aria-labelledby="esprit-heading"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Text column — 60% */}
          <FadeIn direction="right" className="lg:col-span-3 space-y-6">
            <div>
              <p className="font-accent text-xs uppercase tracking-[0.25em] text-primary mb-4">
                Notre esprit
              </p>
              <h2
                id="esprit-heading"
                className="font-heading text-3xl md:text-4xl font-bold text-background leading-tight"
              >
                L&apos;art de savourer l&apos;instant
              </h2>
            </div>
            <p className="text-base leading-[1.85] text-background/75">
              Il y a des endroits où le temps se suspend. Où le bruit des vagues remplace
              le brouhaha du quotidien. Valras-Plage est l&apos;une de ces stations balnéaires
              du littoral héraultais qui sait encore offrir cette parenthèse — le sable
              chaud, la mer qui brille, et l&apos;horizon qui s&apos;étire à l&apos;infini.
            </p>
            <p className="text-base leading-[1.85] text-background/75">
              La Galère est née de cet endroit, sur ce front de mer. Un bar-glacier-cocktail
              où chaque détail est pensé pour que vous n&apos;ayez qu&apos;à profiter — du soleil,
              de la vue sur la Méditerranée, et de ce moment qui ne ressemble à aucun autre.
            </p>
            <p className="font-heading text-xl italic text-primary">
              &ldquo;Profiter du moment présent.&rdquo;
            </p>
          </FadeIn>

          {/* Visual placeholder — 40% */}
          <FadeIn direction="left" className="lg:col-span-2">
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/5]"
              style={{
                background:
                  "linear-gradient(135deg, #1A6B8A 0%, #2A7FA5 40%, #E8A045 75%, #C94F2C 100%)",
              }}
              aria-label="Vue sur la mer depuis La Galère, Valras-Plage"
            >
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-foreground/20" aria-hidden="true" />

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 border border-white/20">
                    <MapPin size={20} className="text-white" aria-hidden="true" />
                  </div>
                  <p className="font-heading text-lg font-semibold text-white">
                    Valras-Plage
                  </p>
                  <p className="font-accent text-xs text-white/65 mt-1 tracking-wide">
                    Hérault · Méditerranée
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

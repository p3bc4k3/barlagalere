import { Facebook } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

export function SocialProof() {
  return (
    <section
      className="py-20 bg-primary/5"
      aria-labelledby="social-proof-heading"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn className="text-center">
          <p className="font-accent text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Ils nous font confiance
          </p>
          <h2
            id="social-proof-heading"
            className="font-heading text-3xl md:text-4xl font-bold tracking-tight"
          >
            94% de clients satisfaits
          </h2>
          <p className="mt-3 text-muted-foreground text-base">
            273 avis vérifiés · Google &amp; Facebook
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-1" aria-label="Note 94% — 5 étoiles">
              {[1, 2, 3, 4, 5].map((i) => (
                <span
                  key={i}
                  className="text-xl text-yellow-400"
                  aria-hidden="true"
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              Note moyenne basée sur 273 avis clients
            </span>
          </div>

          <div className="mt-8">
            <p className="text-sm text-muted-foreground mb-3">
              Retrouvez-nous sur Facebook · La Galère Valras-Plage
            </p>
            <a
              href="https://www.facebook.com/lagalereplage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors duration-150 cursor-pointer shadow-sm"
            >
              <Facebook size={16} aria-hidden="true" />
              Voir nos avis sur Facebook
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

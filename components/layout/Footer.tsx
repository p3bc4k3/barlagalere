import Link from "next/link";
import { MapPin, Facebook } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/carte", label: "La Carte" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-heading text-2xl font-bold text-primary">La Galère</p>
            <p className="mt-1 font-accent text-xs tracking-[0.2em] text-background/50 uppercase">
              Bar · Glacier · Cocktail
            </p>
            <p className="mt-4 font-heading text-lg italic text-background/80 leading-relaxed">
              &ldquo;Profiter du moment présent&rdquo;
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-background/40">
              Navigation
            </p>
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-background/70 hover:text-primary transition-colors duration-150 cursor-pointer"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-sm text-background/70 hover:text-primary transition-colors duration-150 cursor-pointer"
                >
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-background/40">
              Nous trouver
            </p>
            <address className="not-italic space-y-3">
              <a
                href="https://maps.google.com/?q=1+Boulevard+Jean+Moulin+34350+Valras-Plage"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-background/70 hover:text-primary transition-colors duration-150 cursor-pointer"
              >
                <MapPin
                  size={14}
                  className="mt-0.5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span>
                  1 Boulevard Jean Moulin
                  <br />
                  34350 Valras-Plage
                </span>
              </a>
              <a
                href="https://www.facebook.com/lagalereplage"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-background/70 hover:text-primary transition-colors duration-150 cursor-pointer"
              >
                <Facebook size={14} className="text-primary" aria-hidden="true" />
                facebook.com/lagalereplage
              </a>
            </address>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-background/40">
            © 2025 La Galère · Valras-Plage
          </p>
          <p className="text-xs text-background/40">
            #valrasplage &middot; #lagalerevalras
          </p>
        </div>
      </div>

      {/* Primary accent line */}
      <div className="h-1 w-full bg-primary" aria-hidden="true" />
    </footer>
  );
}

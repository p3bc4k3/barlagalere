import Link from 'next/link'
import { MapPin, Facebook } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/carte', label: 'La Carte' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[#E8DFD0] bg-[#1C2B2D] text-[#FDF8F0]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-heading text-2xl font-bold text-[#E8A045]">La Galère</p>
            <p className="mt-1 text-xs tracking-widest text-[#7A9699] uppercase">
              Bar · Glacier · Cocktail
            </p>
            <p className="mt-4 font-heading text-lg italic text-[#FAF4E8] leading-relaxed">
              &ldquo;Profiter du moment présent&rdquo;
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#7A9699]">
              Navigation
            </p>
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#BFD0D2] transition-colors duration-150 hover:text-[#E8A045] cursor-pointer"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-sm text-[#BFD0D2] transition-colors duration-150 hover:text-[#E8A045] cursor-pointer"
                >
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#7A9699]">
              Nous trouver
            </p>
            <address className="not-italic space-y-3">
              <a
                href="https://maps.google.com/maps?q=La+Galère+Valras-Plage"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-[#BFD0D2] transition-colors duration-150 hover:text-[#E8A045] cursor-pointer"
              >
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#E8A045]" aria-hidden="true" />
                <span>Front de mer<br />Valras-Plage, 34350</span>
              </a>
              <a
                href="https://facebook.com/lagalereplage"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#BFD0D2] transition-colors duration-150 hover:text-[#E8A045] cursor-pointer"
              >
                <Facebook size={14} className="text-[#E8A045]" aria-hidden="true" />
                facebook.com/lagalereplage
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-[#4A6366]">
            © {new Date().getFullYear()} La Galère · Valras-Plage
          </p>
          <p className="text-xs text-[#4A6366]">
            #valrasplage · #lagalerevalras
          </p>
        </div>
      </div>

      {/* Primary color accent line */}
      <div className="h-1 w-full bg-[#E8A045]" aria-hidden="true" />
    </footer>
  )
}

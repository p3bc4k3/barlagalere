import { MapPin } from 'lucide-react'
import FadeIn from '@/components/FadeIn'

export default function CtaSection() {
  return (
    <section
      className="py-20 sm:py-28"
      style={{
        background: 'linear-gradient(135deg, #FDF3E3 0%, #EBF5FA 100%)',
      }}
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <FadeIn>
          <h2
            id="cta-heading"
            className="font-heading text-3xl font-bold text-[#1C2B2D] sm:text-4xl"
          >
            Venez nous rendre visite
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-5 text-base leading-relaxed text-[#4A6366]">
            Nous vous attendons en front de mer, à Valras-Plage.
            Que ce soit pour un cocktail au coucher du soleil, une glace en famille
            ou simplement un moment de détente face à la Méditerranée.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-8">
          <address className="not-italic">
            <a
              href="https://maps.google.com/maps?q=La+Galère+Valras-Plage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#1C2B2D] px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#2A3F42] cursor-pointer"
            >
              <MapPin size={15} aria-hidden="true" />
              Front de mer, Valras-Plage 34350
            </a>
          </address>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-8 text-sm text-[#4A6366]">
            Ouvert d&apos;avril à octobre · 10h – 2h du matin
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

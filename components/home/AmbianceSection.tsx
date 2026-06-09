'use client'

import { motion } from 'framer-motion'
import { GlassWater, IceCream, Sun } from 'lucide-react'
import FadeIn from '@/components/FadeIn'

const cards = [
  {
    icon: GlassWater,
    title: 'Bar à cocktails',
    description:
      "Des créations artisanales inspirées par la Méditerranée — herbes fraîches, agrumes du Sud, et le savoir-faire de nos bartenders.",
    color: '#2A7FA5',
    bg: '#EBF5FA',
  },
  {
    icon: IceCream,
    title: 'Glacier artisanal',
    description:
      "Coupes généreuses, sorbets maison aux fruits du terroir, sundaes gourmands. La fraîcheur au bord de l'eau.",
    color: '#E8A045',
    bg: '#FDF3E3',
  },
  {
    icon: Sun,
    title: 'Vue mer imprenable',
    description:
      "En terrasse ou les pieds dans le sable, la Méditerranée s'étend à perte de vue. Le cadre idéal pour les couchers de soleil.",
    color: '#C94F2C',
    bg: '#FBF0EC',
  },
]

export default function AmbianceSection() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="ambiance-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4A6366]">
            L&apos;expérience La Galère
          </p>
          <h2
            id="ambiance-heading"
            className="mt-3 font-heading text-3xl font-bold text-[#1C2B2D] sm:text-4xl"
          >
            Un lieu, trois plaisirs
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-[#E8DFD0] bg-white p-8 transition-shadow duration-200 hover:shadow-lg cursor-default"
              >
                <div
                  className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: card.bg }}
                >
                  <Icon
                    size={22}
                    style={{ color: card.color }}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#1C2B2D]">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4A6366]">
                  {card.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

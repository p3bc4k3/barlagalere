'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import FadeIn from '@/components/FadeIn'

const reviews = [
  {
    author: 'Sophie M.',
    date: 'Août 2024',
    rating: 5,
    text: "Endroit magique ! Le cadre est juste parfait — on est littéralement les pieds dans le sable avec une vue dégagée sur la mer. Le cocktail Sunset Riviera était délicieux, et le service super sympathique. On reviendra sans hésiter.",
  },
  {
    author: 'Thomas L.',
    date: 'Juillet 2024',
    rating: 5,
    text: "La meilleure adresse de Valras-Plage à mon sens. La coupe glacée Méditerranée était généreuse et fraîche à souhait. L'ambiance est détendue sans être trop touristique. Parfait pour un après-midi en famille.",
  },
  {
    author: 'Céline B.',
    date: 'Juin 2024',
    rating: 5,
    text: "Un vrai coup de cœur. L'équipe est accueillante et les mocktails super bien travaillés — même les non-alcoolisés sont pensés avec soin. La terrasse face à la mer au coucher du soleil, c'est quelque chose d'inoubliable.",
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} étoiles sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < count ? '#E8A045' : 'none'}
          className={i < count ? 'text-[#E8A045]' : 'text-[#E8DFD0]'}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export default function ReviewsSection() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4A6366]">
            Ils nous font confiance
          </p>
          <h2
            id="reviews-heading"
            className="mt-3 font-heading text-3xl font-bold text-[#1C2B2D] sm:text-4xl"
          >
            94% de clients satisfaits
          </h2>
          <p className="mt-3 text-sm text-[#4A6366]">273 avis Google &amp; Facebook</p>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.div
              key={review.author}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-[#E8DFD0] bg-white p-6"
            >
              <StarRating count={review.rating} />
              <p className="mt-4 text-sm leading-relaxed text-[#1C2B2D] italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-5 flex items-center justify-between">
                <p className="text-sm font-semibold text-[#1C2B2D]">{review.author}</p>
                <p className="text-xs text-[#7A9699]">{review.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof badge */}
        <FadeIn delay={0.2} className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#E8DFD0] bg-white px-6 py-3 shadow-sm">
            <div className="flex">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 -ml-2 first:ml-0 rounded-full border-2 border-white"
                  style={{
                    background: `hsl(${200 + i * 30}, 50%, ${55 + i * 5}%)`,
                  }}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="text-sm text-[#1C2B2D]">
              <span className="font-semibold">273 clients</span> nous ont noté
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

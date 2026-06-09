'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Bienvenue à La Galère"
    >
      {/* Gradient background simulating sunset over sea */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background: `
            linear-gradient(
              170deg,
              #1a4a6e 0%,
              #2A7FA5 20%,
              #E8A045 55%,
              #C94F2C 75%,
              #1C2B2D 100%
            )
          `,
        }}
      />

      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, #FDF8F0 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(232,160,69,0.4) 0%, transparent 40%)`,
        }}
      />

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 50 C240 0 480 100 720 50 C960 0 1200 100 1440 50 L1440 100 L0 100 Z"
            fill="#FDF8F0"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 text-sm font-medium tracking-[0.3em] text-white/70 uppercase"
        >
          Front de mer · Valras-Plage
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl"
        >
          La Galère
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 font-heading text-xl font-medium italic text-white/80 sm:text-2xl"
        >
          Bar · Glacier · Cocktail
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-lg text-base text-white/70 leading-relaxed"
        >
          Le soleil se couche sur la Méditerranée. Laissez-vous porter par l&apos;instant,
          les pieds dans le sable, un verre à la main.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <Link
            href="/carte"
            className="w-full rounded-full bg-[#E8A045] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-150 hover:bg-[#C8852A] sm:w-auto cursor-pointer"
          >
            Découvrir la carte
          </Link>
          <a
            href="https://maps.google.com/maps?q=La+Galère+Valras-Plage"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-150 hover:bg-white/20 sm:w-auto cursor-pointer"
          >
            <MapPin size={15} aria-hidden="true" />
            Nous trouver
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={22} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}

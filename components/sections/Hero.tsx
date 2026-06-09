"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      aria-label="La Galère — Bar Glacier Cocktail Valras-Plage"
    >
      {/* Sunset over Mediterranean — CSS gradient placeholder */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(175deg, #0d2b45 0%, #1a4a6e 15%, #2A7FA5 32%, #E8A045 58%, #C94F2C 76%, #1C2B2D 100%)",
        }}
      />

      {/* Atmospheric overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50"
        aria-hidden="true"
      />

      {/* Subtle light scatter */}
      <div
        className="absolute inset-0 opacity-15"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 40% at 50% 30%, rgba(253,248,240,0.6) 0%, transparent 70%)",
        }}
      />

      {/* Wave transition */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40 C360 0 720 80 1080 40 C1260 20 1380 60 1440 40 L1440 80 L0 80 Z"
            fill="hsl(38, 76%, 97%)"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-accent text-sm uppercase tracking-[0.3em] text-white/65 mb-5"
        >
          Front de mer · Valras-Plage · Hérault
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-wide leading-tight"
        >
          La Galère
        </motion.h1>

        {/* Decorative separator */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="w-16 h-px bg-primary mx-auto my-5"
          aria-hidden="true"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-accent text-sm uppercase tracking-[0.25em] text-white/75 mb-3"
        >
          Bar · Glacier · Cocktail
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-xl italic text-primary mb-10"
        >
          &ldquo;Profiter du moment présent&rdquo;
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/carte"
            className="w-full sm:w-auto rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3.5 text-sm font-semibold transition-colors duration-150 cursor-pointer shadow"
          >
            Voir la carte
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto rounded-full border border-white/50 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-3.5 text-sm font-semibold transition-colors duration-150 cursor-pointer"
          >
            Nous trouver
          </Link>
        </motion.div>

        {/* Social proof badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-4 py-2"
        >
          <span className="text-yellow-300 text-sm" aria-hidden="true">★</span>
          <span className="text-xs text-white/85 font-medium">
            94% de clients satisfaits · 273 avis
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={22} className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}

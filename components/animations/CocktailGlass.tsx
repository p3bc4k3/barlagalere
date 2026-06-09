"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export function CocktailGlass() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const shouldReduce = useReducedMotion();

  const liquidY = shouldReduce ? 20 : inView ? 20 : 64;

  return (
    <div ref={ref} className="w-16 h-16 mx-auto" aria-hidden="true">
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Verre */}
        <path
          d="M16 8 L48 8 L38 44 L26 44 Z"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          fill="none"
        />
        {/* Pied */}
        <line x1="32" y1="44" x2="32" y2="56" stroke="hsl(var(--primary))" strokeWidth="2" />
        <line x1="24" y1="56" x2="40" y2="56" stroke="hsl(var(--primary))" strokeWidth="2" />

        {/* Liquide */}
        <clipPath id="glass-clip">
          <path d="M16 8 L48 8 L38 44 L26 44 Z" />
        </clipPath>
        <motion.rect
          x="0" y="0" width="64" height="64"
          fill="hsl(var(--primary))"
          fillOpacity="0.35"
          clipPath="url(#glass-clip)"
          initial={{ y: 64 }}
          animate={{ y: liquidY }}
          transition={shouldReduce ? { duration: 0 } : { duration: 1.4, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        />

        {/* Bulles */}
        {!shouldReduce && [
          { cx: 28, cy: 35, r: 2, delay: 0.8 },
          { cx: 34, cy: 28, r: 1.5, delay: 1.1 },
          { cx: 30, cy: 22, r: 1, delay: 1.4 },
        ].map((b, i) => (
          <motion.circle
            key={i}
            cx={b.cx} cy={b.cy} r={b.r}
            fill="white" fillOpacity="0.6"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: [0, 0.8, 0], y: -15 } : {}}
            transition={{ duration: 1.2, delay: b.delay, repeat: Infinity, repeatDelay: 2 }}
          />
        ))}

        {/* Paille */}
        <motion.line
          x1="36" y1="12" x2="42" y2="4"
          stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={shouldReduce ? { duration: 0 } : { duration: 0.4, delay: 1.2 }}
        />
      </svg>
    </div>
  );
}

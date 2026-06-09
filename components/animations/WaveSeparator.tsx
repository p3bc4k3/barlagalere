"use client";

import { motion, useReducedMotion } from "framer-motion";

const wavePaths = [
  { d: "M0,40 C200,10 400,70 600,40 C800,10 1000,70 1200,40 C1400,10 1600,70 1800,40 L1800,80 L0,80Z", opacity: 0.15, duration: 6 },
  { d: "M0,50 C300,20 500,80 800,50 C1100,20 1300,80 1800,50 L1800,80 L0,80Z", opacity: 0.25, duration: 8 },
  { d: "M0,55 C250,30 550,75 900,55 C1150,30 1450,75 1800,55 L1800,80 L0,80Z", opacity: 1, duration: 10 },
];

export function WaveSeparator({ className }: { className?: string }) {
  const shouldReduce = useReducedMotion();

  return (
    <div
      className={`relative w-full overflow-hidden pointer-events-none ${className ?? ""}`}
      style={{ height: 80 }}
      aria-hidden="true"
    >
      {wavePaths.map((wave, i) => (
        <motion.svg
          key={i}
          viewBox="0 0 1800 80"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
          style={{ opacity: wave.opacity }}
        >
          <motion.path
            d={wave.d}
            fill="hsl(var(--background))"
            animate={shouldReduce ? {} : { x: [0, -200, 0] }}
            transition={{
              duration: wave.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.svg>
      ))}
    </div>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";

const waves = [
  {
    path: "M0,30 Q200,0 400,30 Q600,60 800,30 Q1000,0 1200,30 Q1400,60 1600,30 L1600,80 L0,80Z",
    color: "hsl(var(--secondary))",
    opacity: 0.15,
    duration: 4,
  },
  {
    path: "M0,40 Q250,10 500,40 Q750,70 1000,40 Q1250,10 1600,40 L1600,80 L0,80Z",
    color: "hsl(var(--secondary))",
    opacity: 0.25,
    duration: 6,
  },
  {
    path: "M0,50 Q200,25 400,50 Q600,75 800,50 Q1000,25 1200,50 Q1400,75 1600,50 L1600,80 L0,80Z",
    color: "hsl(var(--background))",
    opacity: 1,
    duration: 8,
  },
];

export function OceanWaves() {
  const shouldReduce = useReducedMotion();

  return (
    <div
      className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {waves.map((w, i) => (
        <motion.svg
          key={i}
          viewBox="0 0 1600 80"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full"
          style={{ opacity: w.opacity, height: 80 }}
        >
          <motion.path
            d={w.path}
            fill={w.color}
            animate={shouldReduce ? {} : { x: [0, -100, 0] }}
            transition={{
              duration: w.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        </motion.svg>
      ))}
    </div>
  );
}

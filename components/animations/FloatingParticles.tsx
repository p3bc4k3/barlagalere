"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: (i * 83 + 11) % 100,
  size: 3 + (i % 4) * 2,
  duration: 8 + (i % 5) * 2,
  delay: (i * 0.7) % 4,
  drift: i % 2 === 0 ? 20 : -20,
}));

export function FloatingParticles() {
  const [mounted, setMounted] = useState(false);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || shouldReduce) return null;

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${p.x}%`,
            bottom: "10%",
            width: p.size,
            height: p.size,
            opacity: 0,
          }}
          animate={{
            y: [0, -300, -600],
            opacity: [0, 0.4, 0],
            x: [0, p.drift],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

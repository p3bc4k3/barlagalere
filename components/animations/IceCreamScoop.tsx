"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const SCOOPS = [
  { cy: 38, color: "hsl(var(--primary))", opacity: 1, delay: 0.2 },
  { cy: 22, color: "hsl(var(--secondary))", opacity: 0.85, delay: 0.5 },
  { cy: 8, color: "hsl(var(--accent))", opacity: 0.75, delay: 0.8 },
];

export function IceCreamScoop() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const shouldReduce = useReducedMotion();

  return (
    <div ref={ref} className="w-16 h-16 mx-auto" aria-hidden="true">
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Cornet */}
        <path
          d="M22 44 L32 60 L42 44 Z"
          fill="hsl(var(--primary) / 0.3)"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
        />
        {/* Boules */}
        {SCOOPS.map((s, i) => (
          <motion.circle
            key={i}
            cx="32"
            cy={s.cy}
            r="11"
            fill={s.color}
            fillOpacity={s.opacity}
            initial={{ y: shouldReduce ? 0 : -40, opacity: shouldReduce ? 1 : 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={
              shouldReduce
                ? { duration: 0 }
                : {
                    duration: 0.5,
                    delay: s.delay,
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }
            }
          />
        ))}
      </svg>
    </div>
  );
}

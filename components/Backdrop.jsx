"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

// Editorial backdrop: warm paper, a faint baseline grid, hairline column
// guides, a slowly drifting cool light pool, and a few floating rock-chip
// particles that nod to the moraine metaphor. Deliberately quiet — the
// layout and type carry the design; motion here is "almost imperceptible
// but breathing."
//
// The grid and glow track the cursor very subtly for depth. Everything
// flattens out under prefers-reduced-motion.

// A single rock-chip particle. Triangle glyph, low opacity, floats gently.
function Chip({ className, delay = 0 }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className={`pointer-events-none absolute ${className}`}
      fill="none"
    >
      <motion.path
        d="M16 4 28 26H4L16 4Z"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinejoin="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{
          opacity: { duration: 1.4, delay },
          y: {
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          },
        }}
      />
    </svg>
  );
}

export default function Backdrop() {
  const reduceMotion = useReducedMotion();
  const wrapRef = useRef(null);

  // Subtle grid parallax — translate ±4px with the cursor.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const gridX = useTransform(mx, [-0.5, 0.5], [-4, 4]);
  const gridY = useTransform(my, [-0.5, 0.5], [-4, 4]);

  const onMouseMove = (e) => {
    if (reduceMotion) return;
    mx.set(e.clientX / window.innerWidth - 0.5);
    my.set(e.clientY / window.innerHeight - 0.5);
  };

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMouseMove}
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-paper" />

      {/* Faint baseline grid, fading toward the edges. Tracks cursor gently. */}
      <motion.div
        style={reduceMotion ? undefined : { x: gridX, y: gridY }}
        className="absolute inset-0 paper-grid [background-size:96px_96px] opacity-50 [mask-image:radial-gradient(95%_80%_at_50%_30%,black,transparent)]"
      />

      {/* A single, very soft cool light pool near the top. Drifts slowly. */}
      <div
        className={`absolute left-1/2 top-[-12rem] h-[28rem] w-[44rem] -translate-x-1/2 rounded-full bg-glacier-200/30 blur-[140px] ${
          reduceMotion ? "" : "animate-drift-slow"
        }`}
      />

      {/* Floating rock-chip particles (moraine metaphor). Hidden on small
          screens to keep mobile clean. */}
      {!reduceMotion && (
        <>
          <Chip
            className="left-[12%] top-[28%] h-7 w-7 text-accent/15 sm:block hidden"
            delay={0}
          />
          <Chip
            className="right-[15%] top-[42%] h-5 w-5 text-glacier-400/20 sm:block hidden"
            delay={1.2}
          />
          <Chip
            className="left-[22%] top-[68%] h-6 w-6 text-accent/10 sm:block hidden"
            delay={2.4}
          />
          <Chip
            className="right-[26%] top-[75%] h-4 w-4 text-glacier-500/20 sm:block hidden"
            delay={3.6}
          />
        </>
      )}

      {/* Hairline column guides (the editorial grid made visible) */}
      <div className="absolute inset-y-0 left-1/2 hidden w-full max-w-6xl -translate-x-1/2 px-6 sm:px-8 lg:block">
        <div className="relative h-full">
          <span className="absolute inset-y-0 left-1/4 w-px bg-ink/[0.05]" />
          <span className="absolute inset-y-0 left-1/2 w-px bg-ink/[0.05]" />
          <span className="absolute inset-y-0 left-3/4 w-px bg-ink/[0.05]" />
        </div>
      </div>
    </div>
  );
}

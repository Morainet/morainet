"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

// Wraps a card with a restrained 3D tilt + cursor-tracking spotlight.
// Tilt amplitude is intentionally small (±4deg) to stay within the
// editorial "quiet" register. A radial highlight follows the cursor via
// CSS custom properties. Everything flattens under reduced-motion.
export default function TiltCard({ children, className = "", spotlight = true }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);

  const px = useMotionValue(0.5); // 0..1 across the card
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [4, -4]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-4, 4]), {
    stiffness: 150,
    damping: 18,
  });

  const onMouseMove = (e) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };
  const onMouseLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={reduceMotion ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative h-full"
      >
        {spotlight && !reduceMotion && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), rgba(21,98,126,0.10), transparent 60%)",
            }}
            // Spotlight position is driven by the same px/py via CSS vars so
            // it tracks the cursor without re-rendering.
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
              e.currentTarget.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
            }}
          />
        )}
        {children}
      </motion.div>
    </div>
  );
}

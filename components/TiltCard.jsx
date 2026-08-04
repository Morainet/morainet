"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

// Wraps a card with a restrained 3D tilt + cursor-tracking spotlight.
// Tilt amplitude is intentionally small (±4deg) to stay within the
// editorial "quiet" register. A radial highlight follows the cursor via
// a motion-template background (no DOM event juggling). Everything
// flattens under reduced-motion.
export default function TiltCard({ children, className = "" }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);

  // px/py in 0..1 across the card, driven by a single mouse handler on the
  // outer wrapper — one source of truth feeds both the tilt and the glow.
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(py, [0, 1], [4, -4]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-4, 4]), {
    stiffness: 150,
    damping: 18,
  });

  // Spotlight: radial gradient whose center is the cursor, expressed as a
  // single motion background string so it updates without re-rendering.
  const mxpct = useTransform(px, (v) => `${v * 100}%`);
  const mypct = useTransform(py, (v) => `${v * 100}%`);
  const spotlightBg = useMotionTemplate`radial-gradient(220px circle at ${mxpct} ${mypct}, rgba(21,98,126,0.10), transparent 60%)`;

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
        style={
          reduceMotion
            ? undefined
            : { rotateX, rotateY, transformStyle: "preserve-3d" }
        }
        className="group relative h-full"
      >
        {!reduceMotion && (
          <motion.div
            aria-hidden="true"
            style={{ backgroundImage: spotlightBg }}
            className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        )}
        {children}
      </motion.div>
    </div>
  );
}

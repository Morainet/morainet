"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

// A 2px accent-colored bar pinned under the nav that fills as the page is
// scrolled. Spring-smoothed so it tracks without jitter. Under reduced-motion
// it still reflects progress but drops the spring (no smoothing animation).
export default function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const raw = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const smooth = useSpring(raw, {
    stiffness: 120,
    damping: 28,
    mass: 0.4,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{
        scaleX: reduceMotion ? raw : smooth,
        transformOrigin: "0% 50%",
      }}
      className="fixed left-0 top-16 z-40 h-[2px] w-full bg-accent"
    />
  );
}

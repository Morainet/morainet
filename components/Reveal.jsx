"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.21, 0.6, 0.35, 1];

// Build variants on the fly so we can honour prefers-reduced-motion.
// When reduced motion is requested, everything snaps in instantly (no
// displacement, no blur, ~0 duration) — this is the a11y floor.
function buildVariants(reduceMotion, y, blur, duration) {
  if (reduceMotion) {
    return {
      hidden: { opacity: 1 },
      show: (i = 0) => ({
        opacity: 1,
        transition: { duration: 0, delay: 0 },
      }),
    };
  }
  return {
    hidden: { opacity: 0, y, ...(blur ? { filter: "blur(8px)" } : {}) },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration, delay: i * 0.07, ease: EASE },
    }),
  };
}

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
  duration = 0.6,
  y = 18,
  blur = false,
}) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;
  const variants = buildVariants(reduceMotion, y, blur, duration);

  return (
    <MotionTag
      className={className}
      variants={variants}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}

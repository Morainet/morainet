"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";

// Parse a stat value into { num, prefix, suffix, animate: boolean }.
//   "7"     -> { num: 7,   animate: true }
//   "100%"  -> { num: 100, suffix: "%", animate: true }
//   "2026"  -> { animate: false }   (years don't count up — too jarring)
//   "AI"    -> { animate: false }   (non-numeric stays as-is)
function parse(value) {
  const str = String(value ?? "");
  // 4-digit year — render literally, no animation.
  if (/^\d{4}$/.test(str)) return { raw: str, animate: false };
  const match = str.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { raw: str, animate: false };
  const [, prefix, numStr, suffix] = match;
  return {
    prefix: prefix || "",
    num: parseFloat(numStr),
    suffix: suffix || "",
    animate: true,
  };
}

// Counts a numeric stat from 0 → target when it scrolls into view.
// Years and non-numeric values render as-is. Under reduced-motion the
// final value is shown immediately with no animation.
export default function Counter({ value, duration = 1.4, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState("0");
  const parsed = parse(value);

  useEffect(() => {
    if (!parsed.animate || !inView) return;

    if (reduceMotion) {
      setDisplay(String(parsed.num));
      return;
    }

    mv.set(0);
    const controls = animate(mv, parsed.num, {
      duration,
      ease: [0.21, 0.6, 0.35, 1],
      onUpdate: (v) => {
        setDisplay(
          Number.isInteger(parsed.num) ? String(Math.round(v)) : v.toFixed(1)
        );
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduceMotion, parsed.num, parsed.animate, duration, mv]);

  if (!parsed.animate) {
    return (
      <span ref={ref} className={className}>
        {parsed.raw}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {parsed.prefix}
      {display}
      {parsed.suffix}
    </span>
  );
}

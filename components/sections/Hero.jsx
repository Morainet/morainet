"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { content, GITHUB_URL } from "@/lib/content";
import { useLanguage, useT } from "../LanguageProvider";
import { IconArrow } from "../Icons";

const EASE = [0.21, 0.6, 0.35, 1];

// Split the headline into per-word tokens for staggered reveal.
// English ("Build. Share. Evolve.") splits on dots/spaces; Chinese
// ("构建 · 共享 · 演化") splits on the middot. Empty tokens are dropped.
function splitTitle(str) {
  if (typeof str !== "string") return [];
  return str
    .split(/[·\s.]+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

export default function Hero() {
  const t = useT();
  const { lang } = useLanguage();
  const h = content.hero;
  const scope = content.focus.items.map((i) => i[lang].t);

  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);

  // Mouse parallax — restrained amplitude (±6px headline / ±12px glow).
  // Only active while Hero is on screen and motion is allowed.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const pxSmooth = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.6 });
  const pySmooth = useSpring(my, { stiffness: 60, damping: 20, mass: 0.6 });
  const headlineX = useTransform(pxSmooth, [-0.5, 0.5], [-6, 6]);
  const headlineY = useTransform(pySmooth, [-0.5, 0.5], [-6, 6]);
  const glowX = useTransform(pxSmooth, [-0.5, 0.5], [12, -12]);
  const glowY = useTransform(pySmooth, [-0.5, 0.5], [12, -12]);

  const onMouseMove = (e) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const words = reduceMotion ? [t(h.title)] : splitTitle(t(h.title));

  // Parent variants for word stagger
  const headlineContainer = {
    hidden: {},
    show: {
      transition: reduceMotion
        ? {}
        : { staggerChildren: 0.09, delayChildren: 0.08 },
    },
  };
  const wordVariant = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE },
    },
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative flex min-h-screen flex-col justify-center pt-28 pb-16"
    >
      {/* Parallax glow — drifts opposite to the headline for depth.
          Motion values stay bound at all times (mx/my reset to 0 on
          mouseleave), so there's no style flicker on enter/leave. */}
      <motion.div
        aria-hidden="true"
        style={reduceMotion ? undefined : { x: glowX, y: glowY }}
        className="pointer-events-none absolute left-1/2 top-[-14rem] h-[30rem] w-[48rem] -translate-x-1/2 rounded-full bg-glacier-200/30 blur-[150px]"
      />

      <div className="container-mx relative w-full">
        {/* Kicker row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex items-center justify-between border-t border-ink/15 pt-4 section-label"
        >
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t(h.eyebrow)}
          </span>
          <span className="hidden sm:block">{t(h.established)}</span>
        </motion.div>

        {/* Oversized headline — per-word stagger with mouse parallax */}
        <motion.h1
          variants={headlineContainer}
          initial="hidden"
          animate="show"
          style={reduceMotion ? undefined : { x: headlineX, y: headlineY }}
          className="display mt-8 flex flex-wrap gap-x-[0.25em] text-[16vw] leading-[0.92] sm:text-[12vw] lg:text-[9.5rem]"
        >
          {words.map((w, i) => (
            <motion.span
              key={i}
              variants={wordVariant}
              style={{ display: "inline-block", willChange: "transform, opacity" }}
            >
              {w}
            </motion.span>
          ))}
        </motion.h1>

        {/* Lower grid: intro + actions */}
        <div className="mt-12 grid gap-x-8 gap-y-8 border-t border-ink/15 pt-8 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="md:col-span-7"
          >
            <p className="max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              {t(h.subtitle)}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="flex flex-wrap items-start gap-3 md:col-span-5 md:justify-end"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 border border-ink bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-colors hover:bg-transparent hover:text-ink"
            >
              {t(h.primary)}
              <span className="transition-transform group-hover:translate-x-1">
                <IconArrow />
              </span>
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-ink/25 px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:border-ink"
            >
              {t(h.secondary)}
            </a>
          </motion.div>
        </div>

        {/* Scope ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
          className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-ink/15 pt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-mute"
        >
          {scope.map((s, i) => (
            <span key={i} className="flex items-center gap-3">
              {i > 0 && <span className="text-accent">/</span>}
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

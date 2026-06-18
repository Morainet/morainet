"use client";

import { motion } from "framer-motion";
import { content, GITHUB_URL } from "@/lib/content";
import { useLanguage, useT } from "../LanguageProvider";
import { IconArrow } from "../Icons";

const ease = [0.21, 0.6, 0.35, 1];

export default function Hero() {
  const t = useT();
  const { lang } = useLanguage();
  const h = content.hero;
  const scope = content.focus.items.map((i) => i[lang].t);

  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center pt-28 pb-16">
      <div className="container-mx w-full">
        {/* Kicker row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center justify-between border-t border-ink/15 pt-4 section-label"
        >
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t(h.eyebrow)}
          </span>
          <span className="hidden sm:block">Est. 2024</span>
        </motion.div>

        {/* Oversized headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease }}
          className="display mt-8 text-[16vw] leading-[0.92] sm:text-[12vw] lg:text-[9.5rem]"
        >
          {t(h.title)}
        </motion.h1>

        {/* Lower grid: intro + actions */}
        <div className="mt-12 grid gap-x-8 gap-y-8 border-t border-ink/15 pt-8 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="md:col-span-7"
          >
            <p className="max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              {t(h.subtitle)}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
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
          transition={{ duration: 0.8, delay: 0.45 }}
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

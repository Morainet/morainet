"use client";

import { motion } from "framer-motion";
import { content, GITHUB_URL } from "@/lib/content";
import { useT } from "../LanguageProvider";
import { IconArrow, IconGitHub } from "../Icons";

export default function Hero() {
  const t = useT();
  const h = content.hero;

  return (
    <section id="top" className="relative flex min-h-screen items-center pt-24">
      <div className="container-mx grid w-full gap-12">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-glacier-200"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_8px_2px_rgba(72,230,212,0.7)]" />
            {t(h.eyebrow)}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="text-glacier-gradient">{t(h.title)}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slatey-300"
          >
            {t(h.subtitle)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-neon px-6 py-3 text-sm font-medium text-slatey-950 transition-all hover:bg-neon-glow hover:shadow-[0_0_32px_-6px_rgba(72,230,212,0.8)]"
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
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-slatey-100 transition-colors hover:border-neon/50 hover:text-white"
            >
              <IconGitHub />
              {t(h.secondary)}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5"
        >
          {h.stats.map((s, i) => (
            <div key={i} className="bg-slatey-950/40 p-5 text-center">
              <div className="font-mono text-2xl font-semibold text-neon">{s.value}</div>
              <div className="mt-1 text-xs text-slatey-400">{t(s)}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="absolute inset-x-0 bottom-8 flex justify-center">
        <a href="#about" className="flex flex-col items-center gap-2 text-slatey-500 transition-colors hover:text-neon">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="h-8 w-px animate-pulse bg-gradient-to-b from-neon to-transparent" />
        </a>
      </div>
    </section>
  );
}

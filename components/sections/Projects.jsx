"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { content, GITHUB_URL } from "@/lib/content";
import { useLanguage, useT } from "../LanguageProvider";
import { IconArrow, IconGitHub } from "../Icons";
import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";
import TiltCard from "../TiltCard";

// Language → accent dot color, for the small chip beside each card title.
const LANG_COLORS = {
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  Java: "#b07219",
  Kotlin: "#A97BFF",
  TypeScript: "#3178c6",
};

function LangDot({ lang }) {
  const color = LANG_COLORS[lang] || "#79838a";
  return (
    <span
      aria-hidden="true"
      className="inline-block h-2 w-2 rounded-full"
      style={{ backgroundColor: color }}
    />
  );
}

export default function Projects() {
  const t = useT();
  const { lang } = useLanguage();
  const p = content.projects;

  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);

  // Restrained scroll-driven parallax on the section header: as the section
  // enters/leaves the viewport, the header drifts up slightly. This gives a
  // "layered" feel without a heavy full-screen horizontal pin.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const headerY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <section id="projects" ref={sectionRef} className="relative py-20 sm:py-28">
      <div className="container-mx">
        <motion.div style={reduceMotion ? undefined : { y: headerY }}>
          <SectionHeader
            index="04"
            label={t(p.label)}
            title={t(p.title)}
            intro={t(p.subtitle)}
          />
        </motion.div>

        <div className="mt-12 grid border-t border-l border-ink/12 sm:grid-cols-2 lg:grid-cols-3">
          {p.items.map((proj, i) => (
            <Reveal key={proj.name} delay={i % 3}>
              <TiltCard className="h-full">
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col border-b border-r border-ink/12 bg-white/40 p-7 transition-colors hover:bg-white"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 font-mono text-sm font-medium text-ink">
                      <LangDot lang={proj.lang} />
                      {proj.name}
                    </span>
                    <div className="flex items-center gap-3">
                      {proj.stars > 0 && (
                        <span className="font-mono text-[11px] text-ink-mute">
                          ★ {proj.stars}
                        </span>
                      )}
                      <span className="text-ink-mute transition-colors group-hover:text-accent">
                        <IconGitHub />
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-mute">
                    {proj[lang].d}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-wider text-ink-mute">
                    {proj.tech.map((tech, k) => (
                      <span key={tech} className="flex items-center gap-3">
                        {k > 0 && <span className="text-ink/20">/</span>}
                        {tech}
                      </span>
                    ))}
                  </div>
                </a>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:text-accent"
          >
            {t(p.viewAll)}
            <span className="transition-transform group-hover:translate-x-1">
              <IconArrow />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

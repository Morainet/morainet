"use client";

import { content, GITHUB_URL } from "@/lib/content";
import { useLanguage, useT } from "../LanguageProvider";
import { IconArrow, IconGitHub } from "../Icons";
import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";

export default function Projects() {
  const t = useT();
  const { lang } = useLanguage();
  const p = content.projects;

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="container-mx">
        <SectionHeader index="04" label={t(p.label)} title={t(p.title)} intro={t(p.subtitle)} />

        <div className="mt-12 grid border-t border-l border-ink/12 sm:grid-cols-2 lg:grid-cols-3">
          {p.items.map((proj, i) => (
            <Reveal key={proj.name} delay={i % 3}>
              <a
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col border-b border-r border-ink/12 bg-white/40 p-7 transition-colors hover:bg-white"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-medium text-ink">{proj.name}</span>
                  <span className="text-ink-mute transition-colors group-hover:text-accent">
                    <IconGitHub />
                  </span>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-mute">{proj[lang].d}</p>
                <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-wider text-ink-mute">
                  {proj.tech.map((tech, k) => (
                    <span key={tech} className="flex items-center gap-3">
                      {k > 0 && <span className="text-ink/20">/</span>}
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
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

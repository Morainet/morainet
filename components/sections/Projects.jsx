"use client";

import { content, GITHUB_URL } from "@/lib/content";
import { useLanguage, useT } from "../LanguageProvider";
import { IconArrow, IconGitHub } from "../Icons";
import Reveal from "../Reveal";

export default function Projects() {
  const t = useT();
  const { lang } = useLanguage();
  const p = content.projects;

  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="container-mx">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <span className="section-label">{t(p.label)}</span>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{t(p.title)}</h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-3 text-slatey-400">{t(p.subtitle)}</p>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm text-glacier-200 transition-colors hover:text-neon"
            >
              {t(p.viewAll)}
              <span className="transition-transform group-hover:translate-x-1">
                <IconArrow />
              </span>
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {p.items.map((proj, i) => (
            <Reveal key={proj.name} delay={i % 3}>
              <a
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover group flex h-full flex-col rounded-2xl p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-medium text-glacier-200">
                    {proj.name}
                  </span>
                  <span className="text-slatey-500 transition-colors group-hover:text-neon">
                    <IconGitHub />
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slatey-400">
                  {proj[lang].d}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {proj.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[11px] text-slatey-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

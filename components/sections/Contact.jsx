"use client";

import { content, EMAIL, GITHUB_URL } from "@/lib/content";
import { useT } from "../LanguageProvider";
import { IconArrow, IconGitHub } from "../Icons";
import Reveal from "../Reveal";

export default function Contact() {
  const t = useT();
  const c = content.contact;

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="container-mx">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="section-label">{t(c.label)}</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              {t(c.title)}
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 text-lg leading-relaxed text-slatey-300">{t(c.body)}</p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${EMAIL}`}
                className="group inline-flex items-center gap-2 rounded-full bg-neon px-6 py-3 text-sm font-medium text-slatey-950 transition-all hover:bg-neon-glow hover:shadow-[0_0_32px_-6px_rgba(72,230,212,0.8)]"
              >
                {t(c.email)}
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
                {t(c.github)}
              </a>
            </div>
          </Reveal>
          <Reveal delay={4}>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-6 inline-block font-mono text-sm text-slatey-500 transition-colors hover:text-neon"
            >
              {EMAIL}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

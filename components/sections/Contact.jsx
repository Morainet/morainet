"use client";

import { content, EMAIL, GITHUB_URL } from "@/lib/content";
import { useT } from "../LanguageProvider";
import { IconArrow } from "../Icons";
import Reveal from "../Reveal";

export default function Contact() {
  const t = useT();
  const c = content.contact;

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-mx">
        <div className="rule pt-8 sm:pt-10">
          <Reveal>
            <div className="section-label flex items-center gap-3">
              <span className="text-accent">08</span>
              <span>{t(c.label)}</span>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-x-8 gap-y-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <Reveal delay={1}>
                <h2 className="display text-4xl leading-[1.02] sm:text-5xl lg:text-6xl">
                  {t(c.title)}
                </h2>
              </Reveal>
              <Reveal delay={2}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{t(c.body)}</p>
              </Reveal>
            </div>

            <div className="flex flex-col items-start gap-3 md:col-span-4 md:items-end">
              <Reveal delay={2}>
                <a
                  href={`mailto:${EMAIL}`}
                  className="group inline-flex items-center gap-2 border border-ink bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-colors hover:bg-transparent hover:text-ink"
                >
                  {t(c.email)}
                  <span className="transition-transform group-hover:translate-x-1">
                    <IconArrow />
                  </span>
                </a>
              </Reveal>
              <Reveal delay={3}>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-ink/25 px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:border-ink"
                >
                  {t(c.github)}
                </a>
              </Reveal>
              <Reveal delay={4}>
                <a
                  href={`mailto:${EMAIL}`}
                  className="link-underline mt-2 font-mono text-sm text-ink-mute hover:text-accent"
                >
                  {EMAIL}
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

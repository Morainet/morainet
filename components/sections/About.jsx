"use client";

import { content } from "@/lib/content";
import { useLanguage, useT } from "../LanguageProvider";
import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";

export default function About() {
  const t = useT();
  const { lang } = useLanguage();
  const a = content.about;

  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="container-mx">
        <SectionHeader index="01" label={t(a.label)} title={t(a.title)} />

        <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-12">
          <div className="space-y-5 md:col-span-7">
            {a.body.map((p, i) => (
              <Reveal key={i} delay={i}>
                <p className="text-lg leading-relaxed text-ink-soft">{p[lang]}</p>
              </Reveal>
            ))}
          </div>

          <div className="md:col-span-5">
            <div className="border-t border-ink/15">
              {a.pillars.map((p, i) => (
                <Reveal key={i} delay={i}>
                  <div className="flex items-start gap-5 border-b border-ink/10 py-5">
                    <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="text-base font-medium text-ink">{p[lang].t}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-mute">{p[lang].d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

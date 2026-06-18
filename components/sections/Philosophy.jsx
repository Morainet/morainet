"use client";

import { content } from "@/lib/content";
import { useLanguage, useT } from "../LanguageProvider";
import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";

export default function Philosophy() {
  const t = useT();
  const { lang } = useLanguage();
  const ph = content.philosophy;

  return (
    <section id="philosophy" className="relative py-20 sm:py-28">
      <div className="container-mx">
        <SectionHeader index="06" label={t(ph.label)} title={t(ph.title)} />

        <div className="mt-12 grid border-t border-ink/15 md:grid-cols-3">
          {ph.steps.map((s, i) => (
            <Reveal key={s.num} delay={i}>
              <div className="h-full border-b border-ink/10 py-8 md:border-b-0 md:border-l md:px-8 md:[&:first-child]:border-l-0 md:[&:first-child]:pl-0">
                <div className="font-mono text-sm text-accent">{s.num}</div>
                <h3 className="display mt-6 text-3xl sm:text-4xl">{s[lang].t}</h3>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">{s[lang].d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

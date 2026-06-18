"use client";

import { content } from "@/lib/content";
import { useLanguage, useT } from "../LanguageProvider";
import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";

export default function Process() {
  const t = useT();
  const { lang } = useLanguage();
  const p = content.process;

  return (
    <section id="process" className="relative py-20 sm:py-28">
      <div className="container-mx">
        <SectionHeader index="03" label={t(p.label)} title={t(p.title)} intro={t(p.subtitle)} />

        <div className="mt-12 grid border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
          {p.steps.map((step, i) => (
            <Reveal key={step.num} delay={i}>
              <div className="h-full border-b border-ink/10 px-0 py-8 lg:border-b-0 lg:border-l lg:px-8 lg:[&:first-child]:border-l-0 lg:[&:first-child]:pl-0">
                <div className="font-mono text-sm text-accent">{step.num}</div>
                <h3 className="mt-6 text-xl font-medium tracking-tight text-ink">{step[lang].t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-mute">{step[lang].d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { content } from "@/lib/content";
import { useLanguage, useT } from "../LanguageProvider";
import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";

export default function Journey() {
  const t = useT();
  const { lang } = useLanguage();
  const j = content.journey;

  return (
    <section id="journey" className="relative py-20 sm:py-28">
      <div className="container-mx">
        <SectionHeader index="05" label={t(j.label)} title={t(j.title)} intro={t(j.subtitle)} />

        <div className="mt-12 border-t border-ink/15">
          {j.milestones.map((m, i) => (
            <Reveal key={i} delay={i}>
              <div className="group grid items-baseline gap-x-8 gap-y-2 border-b border-ink/10 py-7 transition-colors hover:bg-white/50 md:grid-cols-12">
                <div className="font-mono text-sm text-accent md:col-span-2">{m.year}</div>
                <h3 className="text-lg font-medium tracking-tight text-ink md:col-span-3">{m[lang].t}</h3>
                <p className="text-sm leading-relaxed text-ink-mute md:col-span-7">{m[lang].d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

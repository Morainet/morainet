"use client";

import { content } from "@/lib/content";
import { useLanguage, useT } from "../LanguageProvider";
import { focusIcons } from "../Icons";
import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";

export default function Focus() {
  const t = useT();
  const { lang } = useLanguage();
  const f = content.focus;

  return (
    <section id="focus" className="relative py-20 sm:py-28">
      <div className="container-mx">
        <SectionHeader index="02" label={t(f.label)} title={t(f.title)} intro={t(f.subtitle)} />

        <div className="mt-12 border-t border-ink/15">
          {f.items.map((item, i) => {
            const Icon = focusIcons[item.icon];
            return (
              <Reveal key={i} delay={i}>
                <div className="group grid items-baseline gap-x-8 gap-y-3 border-b border-ink/10 py-7 transition-colors hover:bg-white/50 md:grid-cols-12">
                  <div className="flex items-center gap-4 md:col-span-1">
                    <span className="font-mono text-sm text-ink-mute">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="flex items-center gap-3 md:col-span-4">
                    <span className="text-accent transition-transform duration-300 group-hover:-translate-y-0.5">
                      {Icon && <Icon />}
                    </span>
                    <h3 className="text-xl font-medium tracking-tight text-ink sm:text-2xl">{item[lang].t}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-ink-mute md:col-span-7">{item[lang].d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { content } from "@/lib/content";
import { useLanguage, useT } from "../LanguageProvider";
import { focusIcons } from "../Icons";
import Reveal from "../Reveal";

export default function Focus() {
  const t = useT();
  const { lang } = useLanguage();
  const f = content.focus;

  return (
    <section id="focus" className="relative py-28 sm:py-36">
      <div className="container-mx">
        <div className="max-w-2xl">
          <Reveal>
            <span className="section-label">{t(f.label)}</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{t(f.title)}</h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {f.items.map((item, i) => {
            const Icon = focusIcons[item.icon];
            return (
              <Reveal key={i} delay={i}>
                <div className="glass glass-hover group relative h-full overflow-hidden rounded-2xl p-7">
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-neon/5 blur-2xl transition-opacity duration-500 group-hover:bg-neon/15" />
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neon">
                      {Icon && <Icon />}
                    </span>
                    <h3 className="text-xl font-medium text-white">{item[lang].t}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slatey-400">{item[lang].d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

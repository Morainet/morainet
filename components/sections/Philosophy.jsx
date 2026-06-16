"use client";

import { content } from "@/lib/content";
import { useLanguage, useT } from "../LanguageProvider";
import Reveal from "../Reveal";

export default function Philosophy() {
  const t = useT();
  const { lang } = useLanguage();
  const ph = content.philosophy;

  return (
    <section id="philosophy" className="relative py-28 sm:py-36">
      {/* Strata band */}
      <div className="absolute inset-0 strata opacity-50 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />

      <div className="container-mx relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="section-label">{t(ph.label)}</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              <span className="text-glacier-gradient">{t(ph.title)}</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {ph.steps.map((s, i) => (
            <Reveal key={s.num} delay={i}>
              <div className="relative h-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-8">
                <span className="font-mono text-5xl font-semibold text-white/10">{s.num}</span>
                <h3 className="mt-4 text-2xl font-medium text-neon">{s[lang].t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slatey-300">{s[lang].d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

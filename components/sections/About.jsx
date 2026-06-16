"use client";

import { content } from "@/lib/content";
import { useLanguage, useT } from "../LanguageProvider";
import Reveal from "../Reveal";

export default function About() {
  const t = useT();
  const { lang } = useLanguage();
  const a = content.about;

  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="container-mx">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <Reveal>
              <span className="section-label">{t(a.label)}</span>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                {t(a.title)}
              </h2>
            </Reveal>
            <div className="mt-6 space-y-5">
              {a.body.map((p, i) => (
                <Reveal key={i} delay={i + 2}>
                  <p className="text-base leading-relaxed text-slatey-300">{p[lang]}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="grid gap-4 self-center">
            {a.pillars.map((p, i) => (
              <Reveal key={i} delay={i}>
                <div className="glass glass-hover flex items-start gap-5 rounded-2xl p-6">
                  <span className="mt-1 font-mono text-sm text-neon">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-white">{p[lang].t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slatey-400">{p[lang].d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

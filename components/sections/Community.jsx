"use client";

import { content } from "@/lib/content";
import { useT } from "../LanguageProvider";
import Reveal from "../Reveal";

export default function Community() {
  const t = useT();
  const c = content.community;

  return (
    <section id="community" className="relative py-28 sm:py-36">
      <div className="container-mx">
        <div className="glass relative overflow-hidden rounded-3xl p-10 sm:p-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-glacier-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-neon/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <Reveal>
                <span className="section-label">{t(c.label)}</span>
              </Reveal>
              <Reveal delay={1}>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  {t(c.title)}
                </h2>
              </Reveal>
              <Reveal delay={2}>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-slatey-300">
                  {t(c.body)}
                </p>
              </Reveal>
            </div>

            <div className="grid gap-3">
              {c.points.map((pt, i) => (
                <Reveal key={i} delay={i}>
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neon/15 text-neon">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="text-sm text-slatey-100">{t(pt)}</span>
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

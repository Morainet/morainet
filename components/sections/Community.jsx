"use client";

import { content } from "@/lib/content";
import { useT } from "../LanguageProvider";
import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";

export default function Community() {
  const t = useT();
  const c = content.community;

  return (
    <section id="community" className="relative py-20 sm:py-28">
      <div className="container-mx">
        <SectionHeader index="07" label={t(c.label)} title={t(c.title)} />

        <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <p className="max-w-xl text-lg leading-relaxed text-ink-soft">{t(c.body)}</p>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <div className="border-t border-ink/15">
              {c.points.map((pt, i) => (
                <Reveal key={i} delay={i}>
                  <div className="flex items-center gap-4 border-b border-ink/10 py-4">
                    <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-sm text-ink-soft">{t(pt)}</span>
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

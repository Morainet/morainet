"use client";

import { content } from "@/lib/content";
import { useT } from "../LanguageProvider";
import Reveal from "../Reveal";

export default function Stats() {
  const t = useT();
  const s = content.stats;

  return (
    <section className="relative pb-20 sm:pb-28">
      <div className="container-mx">
        <div className="grid grid-cols-2 border-t border-ink/15 md:grid-cols-4">
          {s.items.map((item, i) => (
            <Reveal key={i} delay={i}>
              <div className="border-b border-ink/10 px-2 py-8 md:border-b-0 md:border-l md:px-8 md:[&:first-child]:border-l-0">
                <div className="display text-4xl sm:text-5xl">{item.value}</div>
                <div className="mt-3 section-label">{t(item)}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Reveal from "./Reveal";

// Editorial section header: hairline rule, a mono index + label in the left
// column, and a large headline (with optional intro) in the right column.
export default function SectionHeader({ index, label, title, intro, align = "grid" }) {
  return (
    <div className="rule pt-8 sm:pt-10">
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-12">
        <div className="md:col-span-3">
          <Reveal>
            <div className="flex items-baseline gap-3 section-label">
              {index && <span className="text-accent">{index}</span>}
              <span>{label}</span>
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-9">
          <Reveal delay={1}>
            <h2 className="display text-3xl leading-[1.05] sm:text-4xl lg:text-[2.75rem]">
              {title}
            </h2>
          </Reveal>
          {intro && (
            <Reveal delay={2}>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{intro}</p>
            </Reveal>
          )}
        </div>
      </div>
    </div>
  );
}

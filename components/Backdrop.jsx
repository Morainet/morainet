"use client";

// Editorial backdrop: warm paper, a very faint baseline grid, and a pair of
// hairline column guides that hint at the underlying typographic grid.
// Deliberately quiet — the layout and type carry the design.

export default function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-paper" />

      {/* Faint baseline grid, fading toward the edges */}
      <div className="absolute inset-0 paper-grid [background-size:96px_96px] opacity-50 [mask-image:radial-gradient(95%_80%_at_50%_30%,black,transparent)]" />

      {/* A single, very soft cool light pool near the top */}
      <div className="absolute left-1/2 top-[-12rem] h-[28rem] w-[44rem] -translate-x-1/2 rounded-full bg-glacier-200/30 blur-[140px]" />

      {/* Hairline column guides (the editorial grid made visible) */}
      <div className="absolute inset-y-0 left-1/2 hidden w-full max-w-6xl -translate-x-1/2 px-6 sm:px-8 lg:block">
        <div className="relative h-full">
          <span className="absolute inset-y-0 left-1/4 w-px bg-ink/[0.05]" />
          <span className="absolute inset-y-0 left-1/2 w-px bg-ink/[0.05]" />
          <span className="absolute inset-y-0 left-3/4 w-px bg-ink/[0.05]" />
        </div>
      </div>
    </div>
  );
}

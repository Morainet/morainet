"use client";

// Decorative, full-bleed atmospheric background: glacier-blue gradient blobs,
// a faint grid, sediment strata, and floating particles. Pure CSS animation.

export default function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Base radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(35,132,173,0.25),transparent_60%)]" />

      {/* Drifting glacier blobs */}
      <div className="absolute -left-40 top-10 h-[36rem] w-[36rem] rounded-full bg-glacier-600/20 blur-[120px] animate-drift" />
      <div className="absolute right-[-10rem] top-1/3 h-[32rem] w-[32rem] rounded-full bg-neon/10 blur-[130px] animate-drift-slow" />
      <div className="absolute bottom-[-12rem] left-1/3 h-[34rem] w-[34rem] rounded-full bg-glacier-800/30 blur-[120px] animate-drift" />

      {/* Faint grid */}
      <div className="absolute inset-0 bg-grid-fade [background-size:64px_64px] opacity-40 [mask-image:radial-gradient(80%_60%_at_50%_30%,black,transparent)]" />

      {/* Sediment strata at the base */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 strata opacity-60 [mask-image:linear-gradient(to_top,black,transparent)]" />

      {/* Floating particles */}
      <Particles />

      {/* Subtle film grain */}
      <div className="absolute inset-0 noise opacity-[0.03] mix-blend-screen" />
    </div>
  );
}

function Particles() {
  const dots = [
    { l: "12%", t: "22%", s: 3, d: "0s" },
    { l: "28%", t: "68%", s: 2, d: "1.5s" },
    { l: "44%", t: "18%", s: 4, d: "0.6s" },
    { l: "61%", t: "52%", s: 2, d: "2.2s" },
    { l: "73%", t: "28%", s: 3, d: "1s" },
    { l: "86%", t: "62%", s: 2, d: "0.3s" },
    { l: "52%", t: "80%", s: 3, d: "1.8s" },
    { l: "18%", t: "44%", s: 2, d: "2.6s" },
  ];
  return (
    <>
      {dots.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-neon-glow/70 shadow-[0_0_8px_2px_rgba(122,245,232,0.5)] animate-floaty"
          style={{
            left: p.l,
            top: p.t,
            width: p.s,
            height: p.s,
            animationDelay: p.d,
          }}
        />
      ))}
    </>
  );
}

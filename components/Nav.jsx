"use client";

import { useEffect, useState } from "react";
import { content, GITHUB_URL } from "@/lib/content";
import { useT } from "./LanguageProvider";
import LanguageToggle from "./LanguageToggle";
import { IconMark } from "./Icons";

export default function Nav() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "border-ink/10 bg-paper/85 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="container-mx flex h-16 items-center justify-between">
        <a href="#top" className="group flex items-center gap-2.5 font-mono text-sm font-semibold uppercase tracking-[0.18em]">
          <span className="text-accent">
            <IconMark />
          </span>
          <span className="text-ink">Morainet</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {content.nav.links.map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="link-underline font-mono text-xs uppercase tracking-[0.15em] text-ink-mute transition-colors hover:text-ink"
            >
              {t(l)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LanguageToggle className="hidden sm:flex" />
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 border border-ink bg-ink px-4 py-1.5 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-colors hover:bg-transparent hover:text-ink sm:flex"
          >
            {t(content.nav.cta)}
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center border border-ink/20 text-ink md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="text-lg leading-none">{open ? "×" : "≡"}</span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-ink/10 bg-paper/97 px-6 py-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-3">
            {content.nav.links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="py-1 font-mono text-sm uppercase tracking-[0.12em] text-ink-soft"
              >
                {t(l)}
              </a>
            ))}
            <div className="mt-2 flex items-center justify-between">
              <LanguageToggle />
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-ink bg-ink px-4 py-1.5 font-mono text-xs uppercase tracking-[0.15em] text-paper"
              >
                {t(content.nav.cta)}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

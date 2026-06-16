"use client";

import { useEffect, useState } from "react";
import { content, GITHUB_URL } from "@/lib/content";
import { useT } from "./LanguageProvider";
import LanguageToggle from "./LanguageToggle";
import { IconMark, IconGitHub } from "./Icons";

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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/5 bg-slatey-950/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="container-mx flex h-16 items-center justify-between">
        <a href="#top" className="group flex items-center gap-2.5 font-mono text-sm font-semibold tracking-tight">
          <span className="text-neon transition-transform duration-300 group-hover:rotate-[-8deg]">
            <IconMark />
          </span>
          <span className="text-white">Morai<span className="text-glacier-300">net</span></span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {content.nav.links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm text-slatey-300 transition-colors hover:text-white"
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
            className="hidden items-center gap-2 rounded-full bg-neon px-4 py-1.5 text-sm font-medium text-slatey-950 transition-all hover:bg-neon-glow hover:shadow-[0_0_24px_-4px_rgba(72,230,212,0.7)] sm:flex"
          >
            <IconGitHub />
            {t(content.nav.cta)}
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="text-lg leading-none">{open ? "×" : "≡"}</span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/5 bg-slatey-950/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3">
            {content.nav.links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="py-1 text-slatey-200"
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
                className="flex items-center gap-2 rounded-full bg-neon px-4 py-1.5 text-sm font-medium text-slatey-950"
              >
                <IconGitHub />
                {t(content.nav.cta)}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import { content, GITHUB_URL } from "@/lib/content";
import { useT } from "../LanguageProvider";
import { IconMark } from "../Icons";

export default function Footer() {
  const t = useT();
  const f = content.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-ink/15 py-12">
      <div className="container-mx">
        <div className="grid gap-x-8 gap-y-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#top" className="flex items-center gap-2.5 font-mono text-sm font-semibold uppercase tracking-[0.18em]">
              <span className="text-accent">
                <IconMark />
              </span>
              <span className="text-ink">Morainet</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-mute">{t(f.tagline)}</p>
          </div>

          <nav className="md:col-span-4">
            <div className="grid grid-cols-2 gap-y-2 font-mono text-xs uppercase tracking-[0.12em]">
              {content.nav.links.map((l) => (
                <a key={l.id} href={`#${l.id}`} className="text-ink-mute transition-colors hover:text-ink">
                  {t(l)}
                </a>
              ))}
            </div>
          </nav>

          <div className="md:col-span-3 md:text-right">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:text-accent"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink/12 pt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-mute sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} Morainet</span>
          <span>Build · Share · Evolve</span>
          <span>{t(f.rights)}</span>
        </div>
      </div>
    </footer>
  );
}

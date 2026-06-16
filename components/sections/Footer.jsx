"use client";

import { content, GITHUB_URL } from "@/lib/content";
import { useT } from "../LanguageProvider";
import { IconMark, IconGitHub } from "../Icons";

export default function Footer() {
  const t = useT();
  const f = content.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="container-mx">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <a href="#top" className="flex items-center gap-2.5 font-mono text-sm font-semibold">
              <span className="text-neon">
                <IconMark />
              </span>
              <span className="text-white">Morai<span className="text-glacier-300">net</span></span>
            </a>
            <p className="mt-3 max-w-sm text-sm text-slatey-400">{t(f.tagline)}</p>
          </div>

          <div className="flex flex-col items-start gap-4 sm:items-end">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slatey-300 transition-colors hover:text-neon"
            >
              <IconGitHub />
              GitHub
            </a>
            <div className="flex flex-wrap gap-4">
              {content.nav.links.map((l) => (
                <a key={l.id} href={`#${l.id}`} className="text-xs text-slatey-500 hover:text-slatey-200">
                  {t(l)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 font-mono text-xs text-slatey-600">
          © {year} Morainet · Build. Share. Evolve. · {t(f.rights)}
        </div>
      </div>
    </footer>
  );
}

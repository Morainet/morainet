"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageToggle({ className = "" }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`relative flex items-center border border-ink/15 bg-white/60 font-mono text-xs ${className}`}
      role="group"
      aria-label="Language switcher"
    >
      <button
        onClick={() => setLang("en")}
        className={`relative z-10 px-2.5 py-1 transition-colors ${
          lang === "en" ? "text-paper" : "text-ink-mute hover:text-ink"
        }`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        onClick={() => setLang("zh")}
        className={`relative z-10 px-2.5 py-1 transition-colors ${
          lang === "zh" ? "text-paper" : "text-ink-mute hover:text-ink"
        }`}
        aria-pressed={lang === "zh"}
      >
        中文
      </button>
      <span
        className="absolute inset-y-0 left-0 w-1/2 bg-ink transition-transform duration-300 ease-out"
        style={{ transform: lang === "en" ? "translateX(0)" : "translateX(100%)" }}
        aria-hidden="true"
      />
    </div>
  );
}

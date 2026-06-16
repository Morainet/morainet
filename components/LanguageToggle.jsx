"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageToggle({ className = "" }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`relative flex items-center rounded-full border border-white/10 bg-white/5 p-0.5 font-mono text-xs ${className}`}
      role="group"
      aria-label="Language switcher"
    >
      <button
        onClick={() => setLang("en")}
        className={`relative z-10 rounded-full px-3 py-1 transition-colors ${
          lang === "en" ? "text-slatey-950" : "text-slatey-300 hover:text-white"
        }`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        onClick={() => setLang("zh")}
        className={`relative z-10 rounded-full px-3 py-1 transition-colors ${
          lang === "zh" ? "text-slatey-950" : "text-slatey-300 hover:text-white"
        }`}
        aria-pressed={lang === "zh"}
      >
        中文
      </button>
      <span
        className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-neon transition-transform duration-300 ease-out"
        style={{ transform: lang === "en" ? "translateX(2px)" : "translateX(calc(100% + 2px))" }}
        aria-hidden="true"
      />
    </div>
  );
}

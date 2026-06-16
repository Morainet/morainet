"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext({
  lang: "en",
  setLang: () => {},
  toggle: () => {},
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  // Restore saved preference on mount.
  useEffect(() => {
    const saved = typeof window !== "undefined" && window.localStorage.getItem("morainet-lang");
    if (saved === "en" || saved === "zh") setLang(saved);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("morainet-lang", lang);
      document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    }
  }, [lang]);

  const toggle = () => setLang((l) => (l === "en" ? "zh" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

// Helper: pick the active-language string from a { en, zh } object.
export function useT() {
  const { lang } = useLanguage();
  return (entry) => {
    if (entry == null) return "";
    if (typeof entry === "string") return entry;
    return entry[lang] ?? entry.en ?? "";
  };
}

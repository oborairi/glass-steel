"use client";

import { useLanguage } from "./LanguageProvider";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-0.5 text-2xs font-mono">
      <button
        onClick={() => setLang("tr")}
        className="px-1.5 py-1 rounded transition-colors"
        style={{
          color: lang === "tr" ? "var(--accent)" : "var(--fg-muted)",
          fontWeight: lang === "tr" ? 600 : 400,
        }}
        aria-label="Türkçe"
      >
        TR
      </button>
      <span style={{ color: "var(--fg-muted)" }}>/</span>
      <button
        onClick={() => setLang("en")}
        className="px-1.5 py-1 rounded transition-colors"
        style={{
          color: lang === "en" ? "var(--accent)" : "var(--fg-muted)",
          fontWeight: lang === "en" ? 600 : 400,
        }}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}

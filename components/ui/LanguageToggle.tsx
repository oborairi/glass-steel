"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { Flag } from "./Flags";
import type { Lang } from "@/lib/translations";

const languages: { code: Lang; short: string; name: string }[] = [
  { code: "tr", short: "TR", name: "Türkçe" },
  { code: "en", short: "EN", name: "English" },
  { code: "ru", short: "RU", name: "Русский" },
  { code: "de", short: "DE", name: "Deutsch" },
  { code: "zh", short: "ZH", name: "中文" },
];

const flagClass = "w-[22px] h-[15px] rounded-[2px] shrink-0 ring-1 ring-black/10";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = languages.find((l) => l.code === lang) ?? languages[0];

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 h-9 px-2.5 rounded border transition-colors"
        style={{ borderColor: "var(--line)", color: "var(--fg-primary)" }}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={current.name}
      >
        <Flag lang={current.code} className={flagClass} />
        <span className="text-xs font-semibold tracking-wider">{current.short}</span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          style={{ color: "var(--fg-muted)" }}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 min-w-[150px] py-1.5 rounded border shadow-lg z-50"
          style={{ background: "var(--bg-raised)", borderColor: "var(--line)" }}
        >
          {languages.map((l) => {
            const active = l.code === lang;
            return (
              <li key={l.code} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => {
                    setLang(l.code);
                    setOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-3.5 py-2 text-left transition-colors hover:bg-[var(--accent-soft)]"
                  style={{ color: active ? "var(--accent)" : "var(--fg-primary)" }}
                >
                  <Flag lang={l.code} className={flagClass} />
                  <span className="text-xs font-semibold tracking-wider w-6">{l.short}</span>
                  <span className="text-xs flex-1" style={{ color: "var(--fg-secondary)" }}>
                    {l.name}
                  </span>
                  {active && <Check size={14} />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { translations, Lang } from "@/lib/translations";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  t: (typeof translations)["tr"];
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("tr");

  useEffect(() => {
    const saved = localStorage.getItem("gs-lang") as Lang | null;
    if (saved === "tr" || saved === "en") {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("gs-lang", l);
    document.documentElement.lang = l;
  };

  const toggleLang = () => setLang(lang === "tr" ? "en" : "tr");

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggleLang, t: translations[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx)
    throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

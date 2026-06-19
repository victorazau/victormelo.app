"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { translations, type Locale, type Translations } from "./i18n";

type I18nContextType = {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18nContextType | null>(null);

function detectLocale(): Locale {
  if (typeof window === "undefined") return "en";

  // Check localStorage first (user previously chose)
  const saved = localStorage.getItem("locale");
  if (saved === "en" || saved === "pt" || saved === "es") return saved;

  // Detect from browser language
  const lang = (navigator.language || "en").toLowerCase();
  if (lang.startsWith("pt")) return "pt";
  if (lang.startsWith("es")) return "es";

  return "en";
}

export function I18nProvider({ children, initialLocale }: { children: ReactNode; initialLocale?: Locale }) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale ?? "en");

  // On blog pages the locale is fixed by the URL (initialLocale); elsewhere
  // detect from the browser/localStorage.
  useEffect(() => {
    if (initialLocale) {
      document.documentElement.lang = initialLocale === "pt" ? "pt-BR" : initialLocale;
      return;
    }
    const detected = detectLocale();
    setLocaleState(detected);
    document.documentElement.lang = detected;
  }, [initialLocale]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    document.documentElement.lang = newLocale;
    localStorage.setItem("locale", newLocale);
  }, []);

  const t = translations[locale] as Translations;

  return (
    <I18nContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}

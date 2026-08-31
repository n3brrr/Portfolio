"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { defaultLocale, type Locale, locales } from "./config";
import { translations } from "./translations";
import { getResumeData, type ResumeData } from "@/data/resume";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof translations)[Locale];
  data: ResumeData;
  toggleLocale: () => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "portfolio-locale";

function isValidLocale(v: string): v is Locale {
  return (locales as readonly string[]).includes(v);
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  // Hydration-safe init from localStorage / navigator
  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (stored && isValidLocale(stored)) {
      setLocaleState(stored);
    } else if (typeof navigator !== "undefined") {
      const nav = navigator.language.toLowerCase();
      if (nav.startsWith("es")) setLocaleState("es");
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = locale;
    localStorage.setItem(STORAGE_KEY, locale);
  }, [locale, mounted]);

  const setLocale = useCallback((next: Locale) => {
    if (isValidLocale(next)) setLocaleState(next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => (prev === "en" ? "es" : "en"));
  }, []);

  const t = translations[locale];
  const data = getResumeData(locale) as ResumeData;

  // Avoid hydration mismatch flashing: render with defaultLocale first, then update
  // We keep mounted flag to allow components to know if needed, but we still provide value

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, data, toggleLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

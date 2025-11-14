import { useEffect, useState } from "react";

import type { LanguageKey } from "@/data/site-content";

const STORAGE_KEY = "funpark-language";

const isLanguageKey = (value: string | null): value is LanguageKey => {
  return value === "pt" || value === "en" || value === "es" || value === "fr";
};

const getInitialLanguage = (): LanguageKey => {
  if (typeof window === "undefined") {
    return "pt";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isLanguageKey(stored)) {
    return stored;
  }

  const browser = window.navigator.language.slice(0, 2).toLowerCase();
  if (isLanguageKey(browser as LanguageKey)) {
    return browser as LanguageKey;
  }

  return "pt";
};

export const useLanguagePreference = () => {
  const [language, setLanguage] = useState<LanguageKey>(() => getInitialLanguage());

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  return { language, setLanguage };
};



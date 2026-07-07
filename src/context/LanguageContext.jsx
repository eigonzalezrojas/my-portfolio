import { createContext, useContext, useState, useEffect, useCallback } from "react";
import en from "../i18n/en";
import es from "../i18n/es";

const dictionaries = { en, es };
const SUPPORTED = ["en", "es"];
const STORAGE_KEY = "lang";

const LanguageContext = createContext(null);

function getInitialLang() {
  if (typeof window === "undefined") return "en";
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED.includes(saved)) return saved;
  } catch {
    /* localStorage unavailable */
  }
  const browser = (navigator.language || "en").slice(0, 2);
  return SUPPORTED.includes(browser) ? browser : "en";
}

// eslint-disable-next-line react/prop-types
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang;
  }, [lang]);

  // Resolves a dot-notation key (e.g. "nav.home") against the active dictionary.
  // Falls back to the key itself if the string is missing.
  const t = useCallback(
    (key) => {
      const value = key
        .split(".")
        .reduce((obj, k) => (obj == null ? obj : obj[k]), dictionaries[lang]);
      return value == null ? key : value;
    },
    [lang]
  );

  const toggleLang = useCallback(
    () => setLang((current) => (current === "en" ? "es" : "en")),
    []
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

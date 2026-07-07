import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

// CV links are configuration (language-independent), not translatable copy.
const CV_LINKS = {
  es: "https://drive.google.com/file/d/163HWK7vCwXo0_5AmB2W5yyGrI7RHpJik/view?usp=sharing",
  en: "https://drive.google.com/file/d/1XaPp5_NMGFvx5SaMAbUsqc-N3pcQmC6b/view?usp=sharing",
};

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
    } catch {
      /* localStorage unavailable */
    }
    return true; // default: dark
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    try {
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    } catch {
      /* ignore */
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((current) => !current);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isCvOpen, setIsCvOpen] = useState(false);
  const cvMenuRef = useRef(null);

  // Close the CV menu on outside click or Escape.
  useEffect(() => {
    if (!isCvOpen) return;
    const handleClick = (event) => {
      if (cvMenuRef.current && !cvMenuRef.current.contains(event.target)) {
        setIsCvOpen(false);
      }
    };
    const handleKey = (event) => {
      if (event.key === "Escape") setIsCvOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [isCvOpen]);

  const navLinks = [
    { href: "#home", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#experience", label: t("nav.experience") },
    { href: "#education", label: t("nav.education") },
    { href: "#projects", label: t("nav.projects") },
  ];

  const langButton = (code) =>
    `px-2 py-1 text-sm font-medium transition ${
      lang === code
        ? "bg-green-500 text-white"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="fixed w-full z-20 top-0 start-0 border-b border-gray-200" style={{ backgroundColor: "rgb(31, 41, 55)" }}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#home" className="hidden sm:flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap text-white">
            Eithel González Rojas
          </span>
        </a>

        <div className="flex items-center md:order-2 space-x-3 rtl:space-x-reverse">
          <div className="flex items-center rounded-lg overflow-hidden border border-green-500" role="group" aria-label="Language selector">
            <button type="button" onClick={() => setLang("es")} className={langButton("es")} aria-pressed={lang === "es"}>
              ES
            </button>
            <button type="button" onClick={() => setLang("en")} className={langButton("en")} aria-pressed={lang === "en"}>
              EN
            </button>
          </div>

          <button type="button" onClick={toggleTheme} aria-label="Toggle theme" aria-pressed={darkMode} className="flex items-center justify-center w-9 h-9 rounded-lg border border-green-500 text-green-400 hover:text-white hover:bg-green-500 transition">
            {darkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
          </button>

          <div className="relative" ref={cvMenuRef}>
            <button type="button" onClick={() => setIsCvOpen((open) => !open)} aria-haspopup="true" aria-expanded={isCvOpen} className="flex items-center gap-2 text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
              {t("nav.downloadCv")}
              <i className={`fas fa-chevron-down text-xs transition-transform ${isCvOpen ? "rotate-180" : ""}`}></i>
            </button>
            {isCvOpen && (
              <div role="menu" className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg overflow-hidden border border-green-500 z-30" style={{ backgroundColor: "rgb(31, 41, 55)" }}>
                <a role="menuitem" href={CV_LINKS.es} target="_blank" rel="noopener noreferrer" onClick={() => setIsCvOpen(false)} className="block px-4 py-2 text-sm text-white hover:bg-green-500 transition">
                  <span className="font-semibold text-green-400 mr-2">ES</span>Español
                </a>
                <a role="menuitem" href={CV_LINKS.en} target="_blank" rel="noopener noreferrer" onClick={() => setIsCvOpen(false)} className="block px-4 py-2 text-sm text-white hover:bg-green-500 transition">
                  <span className="font-semibold text-green-400 mr-2">EN</span>English
                </a>
              </div>
            )}
          </div>
          <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-300" aria-controls="navbar-sticky" aria-expanded={isMenuOpen}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>

        <div className={`${ isMenuOpen ? "block" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1`}id="navbar-sticky">
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:border-0" style={{ backgroundColor: "rgb(31, 41, 55)" }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="block py-2 px-3 text-white hover:text-green-400 md:p-0" onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

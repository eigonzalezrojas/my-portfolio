import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="dark:bg-gray-900 bg-white dark:text-gray-400 text-gray-600 border-t dark:border-gray-800 border-gray-200 text-center text-sm pt-8 pb-24">
      <p>
        © {year} Eithel González Rojas. {t("footer.rights")}
      </p>
    </footer>
  );
}

export default Footer;

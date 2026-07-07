import { useLanguage } from "../context/LanguageContext";

function About() {
  const { t } = useLanguage();

  return (
    <div className="dark:bg-gray-900 bg-white dark:text-white text-black flex items-center justify-center p-4 py-16">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl sm:text-4xl font-bold dark:text-green-400 text-black mb-6 text-center">
          {t("about.heading")}
        </h2>
        <p className="dark:text-gray-300 text-black text-sm sm:text-base leading-relaxed">
          {t("about.p1")}
        </p>
        <p className="dark:text-gray-300 text-black text-sm sm:text-base leading-relaxed mt-4">
          {t("about.p2")}
        </p>
        <div className="flex justify-center gap-8 mt-8">
          <div className="flex flex-col items-center">
            <i className="fas fa-laptop-code text-green-500 text-6xl"></i>
            <p className="mt-4 text-lg font-semibold">{t("about.role1")}</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-chalkboard-teacher text-green-500 text-6xl"></i>
            <p className="mt-4 text-lg font-semibold">{t("about.role2")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

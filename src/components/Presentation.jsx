import { useLanguage } from "../context/LanguageContext";

function Presentation() {
  const { t } = useLanguage();

  return (
    <div className="dark:bg-gray-900 bg-white dark:text-white text-black min-h-screen flex items-center justify-center p-4 mb-0">
      <div className="flex flex-col lg:flex-row items-center dark:bg-gray-800 bg-green-500 p-6 md:p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <div className="lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
          <p className="dark:text-green-400 text-white uppercase tracking-wide text-sm mb-2">
            {t("hero.greeting")}
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-green-400 text-white mb-4">
            Eithel González Rojas!
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
            {t("hero.title")}
          </h2>
          <p className="dark:text-gray-300 text-black text-sm sm:text-base mb-6">
            {t("hero.tagline")}
          </p>
          <div className="flex flex-col items-center gap-4 text-1xl text-gray-300">
            <a href="mailto:eithelgonzalezrojas@gmail.com" className="dark:bg-green-500 bg-black text-white px-6 py-2 rounded-lg hover:dark:bg-green-600 hover:bg-white transition hover:text-black">
              {t("hero.contact")}
            </a>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/eigonzalezrojas/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-black dark:text-white hover:dark:text-green-400 hover:text-white transition">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/eigonzalezrojas" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-black dark:text-white hover:dark:text-green-400 hover:text-white transition">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg bg-gray-700 p-2 flex items-center justify-center" style={{ backgroundColor: "rgb(247, 239, 228)" }}>
            <img
              src="/eithel_img.jpeg"
              alt="Eithel González Rojas"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;

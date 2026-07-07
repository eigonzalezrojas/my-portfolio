import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

// Static, language-independent data. Role, date and details come from the
// dictionaries via t(). Ordered by end date (most recent first).
const experiences = [
    { id: "geoinnova", company: "GeoInnova Consultores SPA", logo: "/logo_geoinnova.png" },
    { id: "duoc", company: "Duoc UC", logo: "/logo_duoc.jpg" },
    { id: "aiepOnline", company: "Instituto Profesional AIEP", logo: "/aiep.jpg" },
    { id: "iplacex", company: "Iplacex S.A.", logo: "/iplacex.png" },
    { id: "cftsa", company: "CFT San Agustín Talca", logo: "/cftsa.png" },
    { id: "utalcaProf", company: "Universidad de Talca", logo: "/utalca.png" },
    { id: "utalcaSysadmin", company: "Universidad de Talca", logo: "/utalca.png" },
    { id: "aiepEarlier", company: "Instituto Profesional AIEP", logo: "/aiep.jpg" },
    { id: "inacap", company: "INACAP", logo: "/inacap.jpg" },
];

function Experience() {
    const { t } = useLanguage();
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleAccordion = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="dark:bg-gray-900 bg-white dark:text-white text-black flex items-center justify-center p-4 py-16">
            <div className="max-w-4xl w-full">
                <h2 className="text-3xl font-bold dark:text-green-400 text-black mb-6 text-center">
                    {t("experience.heading")}
                </h2>
                <div className="space-y-6">
                    {experiences.map((experience, index) => (
                        <div key={index} className="dark:bg-gray-800 bg-green-500 p-4 rounded-lg shadow-md cursor-pointer" onClick={() => toggleAccordion(index)}>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img src={experience.logo} alt={`${experience.company} logo`} className="w-12 h-12 rounded-full mr-4 object-contain bg-white"/>
                                    <div>
                                        <h3 className="text-xl font-semibold">{experience.company}</h3>
                                        <p className="dark:text-gray-400 text-white">{t(`experience.items.${experience.id}.role`)}</p>
                                    </div>
                                </div>
                                <p className="dark:text-gray-400 text-white text-sm text-right ml-2">{t(`experience.items.${experience.id}.date`)}</p>
                            </div>
                            {expandedIndex === index && (
                                <div className="mt-4 dark:text-gray-300 text-white">
                                    <p>{t(`experience.items.${experience.id}.details`)}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;

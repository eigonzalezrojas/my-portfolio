import { useLanguage } from "../context/LanguageContext";

// Company names are language-independent; role and date come from the dictionaries.
const education = [
    { id: "udec", company: "Universidad de Concepción", logo: "/udec.jpg" },
    { id: "inacap", company: "Universidad Tecnológica de Chile INACAP", logo: "/inacap.jpg" },
];

function Education() {
    const { t } = useLanguage();

    return (
        <div className="dark:bg-gray-900 bg-white dark:text-white text-black flex items-center justify-center p-4 py-16">
            <div className="max-w-4xl w-full">
                <h2 className="text-3xl font-bold dark:text-green-400 text-black mb-6 text-center">{t("education.heading")}</h2>
                <div className="space-y-6">
                    {education.map((detail, index) => (
                        <div key={index} className="flex items-center justify-between dark:bg-gray-800 bg-green-500 p-4 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <img src={detail.logo} alt={`${detail.company} logo`} className="w-12 h-12 rounded-full mr-4 object-contain bg-white"/>
                                <div>
                                    <h3 className="text-xl font-semibold">{detail.company}</h3>
                                    <p className="dark:text-gray-400 text-white">{t(`education.items.${detail.id}.role`)}</p>
                                </div>
                            </div>
                            <p className="dark:text-gray-400 text-white text-sm text-right ml-2">{t(`education.items.${detail.id}.date`)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Education;

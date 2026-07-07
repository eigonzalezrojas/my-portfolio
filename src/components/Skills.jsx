import {
    FaPython,
    FaJs,
    FaJava,
    FaPhp,
    FaAws,
    FaDocker,
    FaGit,
    FaGithub,
    FaLinux,
    FaExchangeAlt,
    FaPlug,
    FaCode,
    FaProjectDiagram,
    FaCubes,
    FaNetworkWired,
    FaVial,
    FaInfinity,
    FaServer,
    FaStream,
    FaSyncAlt,
    FaTasks,
    FaColumns,
    FaMagic,
} from "react-icons/fa";
import {
    SiFastapi,
    SiDjango,
    SiFlask,
    SiTypescript,
    SiSpringboot,
    SiGo,
    SiOracle,
    SiGraphql,
    SiPostgresql,
    SiMysql,
    SiMariadb,
    SiApachekafka,
    SiClaude,
} from "react-icons/si";
import { useLanguage } from "../context/LanguageContext";

const ACCENT = "#16a34a"; // green-600 for concept icons without a brand mark
const SIZE = 26;

function Skills() {
    const { t } = useLanguage();

    // Skill names are proper nouns → shared across languages. Only category
    // titles are translated (via t()).
    const categories = [
        {
            titleKey: "skills.languages",
            items: [
                { name: "Python", icon: <FaPython size={SIZE} color="#3776AB" /> },
                { name: "FastAPI", icon: <SiFastapi size={SIZE} color="#009688" /> },
                { name: "Django", icon: <SiDjango size={SIZE} color="#092E20" /> },
                { name: "Flask", icon: <SiFlask size={SIZE} color="#000000" /> },
                { name: "JavaScript", icon: <FaJs size={SIZE} color="#F7DF1E" /> },
                { name: "TypeScript", icon: <SiTypescript size={SIZE} color="#3178C6" /> },
                { name: "Java", icon: <FaJava size={SIZE} color="#007396" /> },
                { name: "Spring Boot", icon: <SiSpringboot size={SIZE} color="#6DB33F" /> },
                { name: "Go", icon: <SiGo size={SIZE} color="#00ADD8" /> },
                { name: "PHP", icon: <FaPhp size={SIZE} color="#777BB4" /> },
                { name: "PL/SQL", icon: <SiOracle size={SIZE} color="#F80000" /> },
            ],
        },
        {
            titleKey: "skills.apis",
            items: [
                { name: "REST", icon: <FaExchangeAlt size={SIZE} color={ACCENT} /> },
                { name: "GraphQL", icon: <SiGraphql size={SIZE} color="#E10098" /> },
                { name: "SOAP", icon: <FaPlug size={SIZE} color={ACCENT} /> },
            ],
        },
        {
            titleKey: "skills.architecture",
            items: [
                { name: "Clean Code", icon: <FaCode size={SIZE} color={ACCENT} /> },
                { name: "Domain-Driven Design", icon: <FaProjectDiagram size={SIZE} color={ACCENT} /> },
                { name: "Hexagonal Architecture", icon: <FaCubes size={SIZE} color={ACCENT} /> },
                { name: "Microservices", icon: <FaNetworkWired size={SIZE} color={ACCENT} /> },
                { name: "Event-Driven", icon: <SiApachekafka size={SIZE} color="#231F20" /> },
                { name: "Unit Testing", icon: <FaVial size={SIZE} color={ACCENT} /> },
            ],
        },
        {
            titleKey: "skills.databases",
            items: [
                { name: "PostgreSQL", icon: <SiPostgresql size={SIZE} color="#4169E1" /> },
                { name: "MySQL", icon: <SiMysql size={SIZE} color="#4479A1" /> },
                { name: "MariaDB", icon: <SiMariadb size={SIZE} color="#003545" /> },
            ],
        },
        {
            titleKey: "skills.cloud",
            items: [
                { name: "AWS", icon: <FaAws size={SIZE} color="#FF9900" /> },
                { name: "Docker", icon: <FaDocker size={SIZE} color="#2496ED" /> },
                { name: "CI/CD", icon: <FaInfinity size={SIZE} color={ACCENT} /> },
                { name: "Azure DevOps", icon: <FaServer size={SIZE} color="#0078D7" /> },
                { name: "Git", icon: <FaGit size={SIZE} color="#F05032" /> },
                { name: "GitHub", icon: <FaGithub size={SIZE} color="#181717" /> },
                { name: "Linux", icon: <FaLinux size={SIZE} color="#FCC624" /> },
            ],
        },
        {
            titleKey: "skills.batch",
            items: [
                { name: "Pentaho", icon: <FaStream size={SIZE} color={ACCENT} /> },
            ],
        },
        {
            titleKey: "skills.methodologies",
            items: [
                { name: "Agile", icon: <FaSyncAlt size={SIZE} color={ACCENT} /> },
                { name: "Scrum", icon: <FaTasks size={SIZE} color={ACCENT} /> },
                { name: "Kanban", icon: <FaColumns size={SIZE} color={ACCENT} /> },
            ],
        },
        {
            titleKey: "skills.ai",
            items: [
                { name: "Claude Code", icon: <SiClaude size={SIZE} color="#D97757" /> },
                { name: "Prompt Engineering", icon: <FaMagic size={SIZE} color={ACCENT} /> },
            ],
        },
    ];

    return (
        <div className="dark:bg-gray-900 bg-white dark:text-white text-black flex items-center justify-center p-4 py-16">
            <div className="max-w-4xl w-full dark:bg-gray-800 bg-green-500 p-6 md:p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold dark:text-green-400 text-black mb-8 text-center">
                    {t("skills.heading")}
                </h2>
                <div className="space-y-6">
                    {categories.map((category) => (
                        <div key={category.titleKey}>
                            <h3 className="text-lg font-semibold dark:text-green-400 text-white mb-3">
                                {t(category.titleKey)}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.items.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-2 bg-white rounded-lg shadow-sm border border-gray-200 px-3 py-2"
                                    >
                                        {skill.icon}
                                        <span className="text-gray-900 text-sm font-medium whitespace-nowrap">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;

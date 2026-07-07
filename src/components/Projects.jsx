import { useLanguage } from "../context/LanguageContext";

// Titles, technologies and GitHub links are language-independent.
// Date and description come from the dictionaries via t().
const projects = [
  {
    id: "lab",
    title: "Laboratory System IQRN",
    technologies: ["Flask", "JavaScript", "Tailwind CSS", "Docker", "MariaDB"],
    github: "https://github.com/eigonzalezrojas/lab-system",
  },
  {
    id: "trello",
    title: "Trello Clone",
    technologies: ["React", "Material-UI", "Node", "Express", "Docker", "PostgreSQL"],
    github: "https://github.com/eigonzalezrojas/trello-clone",
  },
  {
    id: "wordpress",
    title: "WordPress Website",
    technologies: ["WordPress", "CSS", "JavaScript", "Elementor"],
    github: "https://github.com/eigonzalezrojas/wp-iqrn",
  },
  {
    id: "eca",
    title: "ECA Agro System",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask", "Bootstrap", "MySQL"],
    github: "https://github.com/eigonzalezrojas/eca_agro_system",
  },
];

function Projects() {
  const { t } = useLanguage();

  return (
    <div className="dark:bg-gray-900 bg-white text-white flex items-center justify-center p-4 py-16">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold dark:text-green-400 text-gray-900 mb-6 text-center">
          {t("projects.heading")}
        </h2>
        <p className="dark:text-gray-300 text-gray-900 text-center mb-8">
          {t("projects.intro")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="dark:bg-gray-800 bg-green-500 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold dark:text-green-400 text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="dark:text-gray-400 text-gray-900 text-sm mb-4">{t(`projects.items.${project.id}.date`)}</p>
              <p className="dark:text-gray-300 text-gray-900 text-sm mb-4">{t(`projects.items.${project.id}.description`)}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="dark:bg-gray-700 bg-white dark:text-gray-300 text-gray-900 text-xs px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-block dark:bg-green-400 bg-black dark:text-gray-900 text-white px-4 py-2 rounded font-semibold hover:dark:bg-green-500 hover:bg-white hover:text-black transition-colors">
                {t("projects.viewGithub")}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

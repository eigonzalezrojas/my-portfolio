function Projects() {
  const projects = [
    {
      title: "Laboratory Sytem IQRN",
      date: "Sep 2024 - Dic 2024",
      description:
        "This project is a management system for a chemistry laboratory, which allows to manage requests for chemical compounds, users, projects and machines, among other functionalities.",
      technologies: ["Flask", "Javascript", "Tailwind CSS", "Docker", "MariaDB"],
      github: "https://github.com/eigonzalezrojas/lab-system",
    },
    {
      title: "Trello Clone",
      date: "Ago 2024 - Sept 2024",
      description:
        "This project is a Trello clone built for my portfolio. It utilizes a modern tech stack including Docker, PostgreSQL, Express.js, Node.js, and React.js with Material-UI. The application consists of three containers: db, client, and server.",
      technologies: ["React", "Material-UI", "Node", "Express", "Docker", "Psql"],
      github: "https://github.com/eigonzalezrojas/trello-clone",
    },
    {
      title: "Wordpress Website",
      date: "Nov 2024 - Dic 2024",
      description:
        "Website for the Institute of Chemistry and Natural Resources of the University of Talca.",
      technologies: ["Wordpress", "CSS", "Javascript", "Elementor"],
      github: "https://github.com/eigonzalezrojas/wp-iqrn",
    },
    {
      title: "ECA Agro System",
      date: "Dic 2024 - Process",
      description:
        "web application for crop monitoring management in agronomy.",
      technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask", "Boostrap", "MySQL"],
      github: "https://github.com/eigonzalezrojas/eca_agro_system",
    },
  ];

  return (
    <div className="dark:bg-gray-900 bg-white text-white flex items-center justify-center p-4 py-16">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold dark:text-green-400 text-gray-900 mb-6 text-center">
          My Projects
        </h2>
        <p className="dark:text-gray-300 text-gray-900 text-center mb-8">
          As a Full Stack Web Developer, I have worked on a variety of projects, ranging from simple websites to complex web applications. Here are some of my favorites.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="dark:bg-gray-800 bg-green-500 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold dark:text-green-400 text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="dark:text-gray-400 text-gray-900 text-sm mb-4">{project.date}</p>
              <p className="dark:text-gray-300 text-gray-900 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="dark:bg-gray-700 bg-white dark:text-gray-300 text-gray-900 text-xs px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="dark:bg-green-400 bg-black dark:text-gray-900 text-white px-4 py-2 rounded font-semibold hover:dark:bg-green-500 hover:bg-white hover:text-black transition-colors">
                Ver en GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
// English dictionary.
// Each section adds its own keys in its own phase.
export default {
  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    education: "Education",
    projects: "Projects",
    downloadCv: "Download CV",
  },
  hero: {
    greeting: "Hello, I'm",
    title: "Backend Developer",
    tagline:
      "Backend developer based in Talca, Chile, with 5+ years building robust, scalable APIs with Python and FastAPI, integrating systems and deploying on the cloud (AWS).",
    contact: "Contact Me",
  },
  about: {
    heading: "About Me",
    p1: "I'm a Backend Developer and Computer Engineer with over 5 years of experience designing and maintaining APIs with Python and FastAPI, integrating internal and external systems, and building robust, scalable backend solutions. I apply clean architecture principles — Clean Code, Domain-Driven Design and Hexagonal Architecture — with a strong focus on quality, performance and security.",
    p2: "I also hold a Master's degree in Educational Informatics and teach Computer Science at the higher-education level (Duoc UC, AIEP), which sharpens my ability to communicate complex technical ideas and collaborate with multidisciplinary teams. I'm committed to continuous learning and to writing maintainable, well-documented code.",
    role1: "Backend Developer",
    role2: "Professor",
  },
  skills: {
    heading: "My Skills",
    languages: "Languages & Frameworks",
    apis: "APIs & Integration",
    architecture: "Architecture & Quality",
    databases: "Databases",
    cloud: "Cloud & DevOps",
    batch: "Batch / ETL",
    methodologies: "Methodologies",
    ai: "AI-Assisted Development",
  },
  experience: {
    heading: "Work Experience",
    present: "Present",
    items: {
      geoinnova: {
        role: "Backend Developer",
        date: "Apr 2025 - Present",
        details:
          "I design and build backend services and APIs in Python for corporate clients, implementing highly secure and efficient business logic and integrations that reduced latency and maximized interoperability between systems. I define API contracts and microservice architectures with domain decoupling, structure CI/CD pipelines in Azure DevOps to speed up delivery and reduce production failures, and deploy scalable, highly-available serverless infrastructure on AWS (Lambda, Fargate, API Gateway).",
      },
      duoc: {
        role: "Higher-Education IT Lecturer",
        date: "Jan 2025 - Present",
        details:
          "I teach Database Programming (PL/SQL, SQL) and Software Fundamentals (Java) courses and workshops, training over 100 students per semester under high academic standards. I design teaching material that links theory with industry practice — promoting Clean Code, object-oriented architecture and agile methodologies — and mentor final-year software projects.",
      },
      aiepOnline: {
        role: "IT Lecturer (Online)",
        date: "Mar 2024 - Present",
        details:
          "I teach databases, object-oriented programming (Java, Python) and software engineering, including Python and web-development certifications.",
      },
      iplacex: {
        role: "Development Platforms Coordinator",
        date: "May 2023 - Apr 2025",
        details:
          "I led the development of complex web applications with Python and Django, consuming and integrating the Blackboard REST API to automate massive CRUD operations over thousands of users and courses. I designed secure, optimized REST APIs that drastically improved backend response times under high institutional concurrency, automated critical batch data-synchronization processes on AWS EC2 with Pentaho ETL pipelines, and optimized SQL queries on PostgreSQL to generate high-precision analytical reports for decision-making.",
      },
      cftsa: {
        role: "IT Lecturer",
        date: "Aug 2023 - Dec 2024",
        details: "I taught database design and web programming with HTML, JavaScript and CSS.",
      },
      utalcaProf: {
        role: "IT Lecturer",
        date: "Aug 2023 - Dec 2023",
        details: "I taught systems administration (GNU/Linux, Docker, AWS).",
      },
      utalcaSysadmin: {
        role: "System Administrator",
        date: "Mar 2018 - Apr 2023",
        details:
          "I developed a suite of automation scripts with Python and PHP to interconnect academic and internal systems, eliminating manual workflows and reducing operational errors. I built internal web tools for bulk academic-data loading that increased the support team's efficiency, and administered Moodle LMS platforms and GNU/Linux server infrastructure with a focus on security, high availability and performance.",
      },
      aiepEarlier: {
        role: "IT Lecturer",
        date: "May 2022 - Dec 2022",
        details: "I taught IT fundamentals and advanced programming concepts.",
      },
      inacap: {
        role: "IT Support",
        date: "Mar 2019 - May 2019",
        details:
          "I provided technical support, resolved hardware and software issues, and maintained IT systems.",
      },
    },
  },
  education: {
    heading: "Education",
    items: {
      udec: {
        role: "Master's in Educational Informatics",
        date: "Mar 2020 - Sep 2021 [Graduated]",
      },
      inacap: {
        role: "Computer Engineering",
        date: "Mar 2015 - Oct 2019 [Graduated]",
      },
    },
  },
  projects: {
    heading: "My Projects",
    intro:
      "A selection of projects where I've applied backend development, APIs, databases and DevOps — from laboratory management systems to full web applications.",
    viewGithub: "View on GitHub",
    items: {
      lab: {
        date: "Sep 2024 - Dec 2024",
        description:
          "A management system for a chemistry laboratory that handles requests for chemical compounds, users, projects and machines, among other features.",
      },
      trello: {
        date: "Aug 2024 - Sep 2024",
        description:
          "A Trello clone built with a modern stack — Docker, PostgreSQL, Express.js, Node.js and React with Material-UI — running as three containers: db, client and server.",
      },
      wordpress: {
        date: "Nov 2024 - Dec 2024",
        description:
          "Website for the Institute of Chemistry and Natural Resources at Universidad de Talca.",
      },
      eca: {
        date: "Dec 2024 - In progress",
        description: "A web application for crop monitoring and management in agronomy.",
      },
    },
  },
  footer: {
    rights: "All rights reserved.",
  },
};

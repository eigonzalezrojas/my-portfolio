// Diccionario en español.
// Cada sección agrega sus claves en su propia fase.
export default {
  nav: {
    home: "Inicio",
    about: "Sobre mí",
    experience: "Experiencia",
    education: "Educación",
    projects: "Proyectos",
    downloadCv: "Descargar CV",
    cvUrl: "https://drive.google.com/file/d/163HWK7vCwXo0_5AmB2W5yyGrI7RHpJik/view?usp=sharing",
  },
  hero: {
    greeting: "Hola, soy",
    title: "Desarrollador Backend",
    tagline:
      "Desarrollador Backend en Talca, Chile, con más de 5 años construyendo APIs robustas y escalables con Python y FastAPI, integrando sistemas y desplegando en la nube (AWS).",
    contact: "Contáctame",
  },
  about: {
    heading: "Sobre mí",
    p1: "Soy Desarrollador Backend e Ingeniero en Informática con más de 5 años de experiencia diseñando y manteniendo APIs con Python y FastAPI, integrando sistemas internos y externos, y construyendo soluciones backend robustas y escalables. Aplico principios de arquitectura limpia —Clean Code, Domain-Driven Design y Arquitectura Hexagonal— con foco en la calidad, el rendimiento y la seguridad.",
    p2: "Además, tengo un Magíster en Informática Educacional y ejerzo como docente de Informática en educación superior (Duoc UC, AIEP), lo que potencia mi capacidad de comunicar ideas técnicas complejas y colaborar con equipos multidisciplinarios. Estoy comprometido con el aprendizaje continuo y con escribir código mantenible y bien documentado.",
    role1: "Desarrollador Backend",
    role2: "Docente",
  },
  skills: {
    heading: "Mis Habilidades",
    languages: "Lenguajes y Frameworks",
    apis: "APIs e Integración",
    architecture: "Arquitectura y Calidad",
    databases: "Bases de Datos",
    cloud: "Cloud y DevOps",
    batch: "Batch / ETL",
    methodologies: "Metodologías",
    ai: "Desarrollo Asistido por IA",
  },
  experience: {
    heading: "Experiencia Laboral",
    present: "Presente",
    items: {
      geoinnova: {
        role: "Desarrollador Backend",
        date: "Abr 2025 - Presente",
        details:
          "Diseño y desarrollo servicios y APIs backend en Python para clientes corporativos, implementando lógica de negocio e integraciones altamente seguras y eficientes que redujeron la latencia y maximizaron la interoperabilidad entre sistemas. Defino contratos de API y arquitecturas de microservicios con desacoplamiento de dominios, estructuro pipelines CI/CD en Azure DevOps para acelerar la entrega y reducir fallos en producción, y despliego infraestructura serverless escalable y de alta disponibilidad en AWS (Lambda, Fargate, API Gateway).",
      },
      duoc: {
        role: "Docente de Informática (Educación Superior)",
        date: "Ene 2025 - Presente",
        details:
          "Dicto las cátedras y talleres de Programación de Bases de Datos (PL/SQL, SQL) y Fundamentos de Software (Java), formando a más de 100 alumnos por semestre bajo altos estándares académicos. Diseño material didáctico que vincula la teoría con la industria —promoviendo el Clean Code, la arquitectura orientada a objetos y las metodologías ágiles— y mentorizo proyectos de software de fin de carrera.",
      },
      aiepOnline: {
        role: "Docente de Informática (Online)",
        date: "Mar 2024 - Presente",
        details:
          "Dicto clases de bases de datos, programación orientada a objetos (Java, Python) e ingeniería de software, incluyendo certificaciones en Python y desarrollo web.",
      },
      iplacex: {
        role: "Coordinador de Plataformas de Desarrollo",
        date: "May 2023 - Abr 2025",
        details:
          "Lideré el desarrollo de aplicaciones web complejas con Python y Django, consumiendo e integrando la API REST de Blackboard para automatizar operaciones CRUD masivas sobre miles de usuarios y cursos. Diseñé APIs REST seguras y optimizadas que mejoraron drásticamente los tiempos de respuesta del backend bajo alta concurrencia institucional, automaticé procesos batch críticos de sincronización de datos en AWS EC2 con pipelines ETL de Pentaho, y optimicé consultas SQL en PostgreSQL para generar reportes analíticos de alta precisión para la toma de decisiones.",
      },
      cftsa: {
        role: "Docente de Informática",
        date: "Ago 2023 - Dic 2024",
        details: "Enseñé diseño de bases de datos y programación web con HTML, JavaScript y CSS.",
      },
      utalcaProf: {
        role: "Docente de Informática",
        date: "Ago 2023 - Dic 2023",
        details: "Dicté clases de administración de sistemas (GNU/Linux, Docker, AWS).",
      },
      utalcaSysadmin: {
        role: "Administrador de Sistemas",
        date: "Mar 2018 - Abr 2023",
        details:
          "Desarrollé una suite de scripts de automatización con Python y PHP para interconectar sistemas académicos e internos, eliminando flujos manuales y reduciendo errores operativos. Construí herramientas web internas para la carga masiva de datos académicos que incrementaron la eficiencia del equipo de soporte, y administré plataformas LMS Moodle e infraestructura de servidores GNU/Linux con foco en seguridad, alta disponibilidad y rendimiento.",
      },
      aiepEarlier: {
        role: "Docente de Informática",
        date: "May 2022 - Dic 2022",
        details: "Enseñé fundamentos de informática y conceptos avanzados de programación.",
      },
      inacap: {
        role: "Soporte TI",
        date: "Mar 2019 - May 2019",
        details:
          "Brindé soporte técnico, resolví incidencias de hardware y software, y mantuve sistemas TI.",
      },
    },
  },
  education: {
    heading: "Educación",
    items: {
      udec: {
        role: "Magíster en Informática Educacional",
        date: "Mar 2020 - Sep 2021 [Titulado]",
      },
      inacap: {
        role: "Ingeniería en Informática",
        date: "Mar 2015 - Oct 2019 [Titulado]",
      },
    },
  },
  projects: {
    heading: "Mis Proyectos",
    intro:
      "Una selección de proyectos donde he aplicado desarrollo backend, APIs, bases de datos y DevOps — desde sistemas de gestión de laboratorio hasta aplicaciones web completas.",
    viewGithub: "Ver en GitHub",
    items: {
      lab: {
        date: "Sep 2024 - Dic 2024",
        description:
          "Un sistema de gestión para un laboratorio de química que administra solicitudes de compuestos químicos, usuarios, proyectos y máquinas, entre otras funcionalidades.",
      },
      trello: {
        date: "Ago 2024 - Sep 2024",
        description:
          "Un clon de Trello construido con un stack moderno —Docker, PostgreSQL, Express.js, Node.js y React con Material-UI— que corre en tres contenedores: db, client y server.",
      },
      wordpress: {
        date: "Nov 2024 - Dic 2024",
        description:
          "Sitio web para el Instituto de Química y Recursos Naturales de la Universidad de Talca.",
      },
      eca: {
        date: "Dic 2024 - En proceso",
        description: "Una aplicación web para el monitoreo y gestión de cultivos en agronomía.",
      },
    },
  },
  footer: {
    rights: "Todos los derechos reservados.",
  },
};

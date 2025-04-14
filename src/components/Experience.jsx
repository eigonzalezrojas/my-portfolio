import React, { useState } from "react";

function Experience() {
    const experiences = [
        {
            company: "GeoInnova Consultores SPA",
            role: "back-end software engineer",
            date: "Apr 2025 - Present",
            logo: "/logo_geoinnova.png",
            details: "details: \"I design, develop, and maintain RESTful APIs to integrate services and enable efficient data consumption across multiple systems. I build and optimize data processing pipelines to improve performance and storage operations, while managing relational databases to ensure data integrity and availability. Additionally, I implement scalable, secure, and high-performance backend solutions, deploying and maintaining systems in cloud environments. My role also involves applying best development practices, code reviews, and testing strategies to ensure software quality, collaborating closely with multidisciplinary teams to define and deliver technical solutions.",
        },
        {
            company: "Iplacex S.A.",
            role: "Development Coordinator",
            date: "May 2023 - Apr 2025",
            logo: "/iplacex.png",
            details: "I developed a web platform using Django to streamline content migration from LMS Moodle to LMS Blackboard, automating internal processes with Python in an AWS EC2 environment to synchronize user and course data. Additionally, I implemented ETL processes with Pentaho PDI for periodic user performance reporting and continuously enhanced web applications using the Blackboard REST API to optimize CRUD operations for users and courses.",
        },
        {
            company: "Universidad de Talca",
            role: "System Administrator",
            date: "April 2018 - April 2023",
            logo: "/utalca.png",
            details: "I managed and administered LMS Moodle platforms and Linux servers, developing and automating internal processes using PHP and Python integrated with Curriculum Management System databases to handle user and course management in educational platforms. Additionally, I developed web applications to manage bulk CRUD operations in LMS platforms.",
        },
        {
            company: "Instituto Profesional AIEP",
            role: "IT professor Online",
            date: "Mar 2024 - Present",
            logo: "/aiep.jpg",
            details: "I taught computer science classes on databases, object-oriented programming (JAVA, Python), and software engineering, including certifications in Python and web development.",
        },
        {
            company: "CFT San Agustin Talca",
            role: "IT professor",
            date: "Aug 2023 - Dec 2024",
            logo: "/cftsa.png",
            details: "Teaching database design and web programming with HTML, JavaScript, and CSS.",
        },
        {
            company: "Universidad de Talca",
            role: "IT professor",
            date: "Aug 2023 - Dec 2023",
            logo: "/utalca.png",
            details: "I taught system administration classes (GNU/Linux, Docker, AWS).",
        },
        {
            company: "Instituto Profesional AIEP",
            role: "IT professor",
            date: "May 2022 - Dec 2022",
            logo: "/aiep.jpg",
            details: "Provided instruction in IT fundamentals and advanced programming concepts.",
        },
        {
            company: "INACAP",
            role: "Support IT",
            date: "Mar 2019 - May 2019",
            logo: "/inacap.jpg",
            details: "Offered technical support, resolved hardware and software issues, and maintained IT systems.",
        },
    ];

    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleAccordion = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="dark:bg-gray-900 bg-white dark:text-white text-black flex items-center justify-center p-4 py-16">
            <div className="max-w-4xl w-full">
                <h2 className="text-3xl font-bold dark:text-green-400 text-black mb-6 text-center">Work Experience</h2>
                <div className="space-y-6">
                    {experiences.map((experience, index) => (
                    <div key={index} className="dark:bg-gray-800 bg-green-500 p-4 rounded-lg shadow-md cursor-pointer" onClick={() => toggleAccordion(index)}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <img src={experience.logo} alt={`${experience.company} logo`} className="w-12 h-12 rounded-full mr-4"/>
                                <div>
                                    <h3 className="text-xl font-semibold">{experience.company}</h3>
                                    <p className="dark:text-gray-400 text-white">{experience.role}</p>
                                </div>
                            </div>
                            <p className="dark:text-gray-400 text-white">{experience.date}</p>
                        </div>
                        {expandedIndex === index && (
                        <div className="mt-4 dark:text-gray-300 text-white">
                            <p>{experience.details}</p>
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
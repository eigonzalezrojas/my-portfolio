import React from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaNodeJs,
    FaPython,
    FaDocker,
    FaDatabase,
    FaLinux,
    FaGit,
    FaGithub,
    FaReact,
    FaBootstrap,
} from "react-icons/fa";
import { 
    SiFlask, 
    SiDjango, 
    SiPostman, 
    SiExpress, 
    SiTailwindcss, 
    SiGnubash 
} from "react-icons/si";
import "../../src/App.css"

function Skills() {
    const skills = [
        { name: "HTML", icon: <FaHtml5 size={50} color="#E34F26" /> },
        { name: "CSS", icon: <FaCss3Alt size={50} color="#1572B6" /> },
        { name: "JavaScript", icon: <FaJs size={50} color="#F7DF1E" /> },
        { name: "Node.js", icon: <FaNodeJs size={50} color="#339933" /> },
        { name: "Python", icon: <FaPython size={50} color="#3776AB" /> },
        { name: "Flask", icon: <SiFlask size={50} color="#000000" /> },
        { name: "Django", icon: <SiDjango size={50} color="#092E20" /> },
        { name: "Docker", icon: <FaDocker size={50} color="#2496ED" /> },
        { name: "SQL", icon: <FaDatabase size={50} color="#4479A1" /> },
        { name: "Linux", icon: <FaLinux size={50} color="#FCC624" /> },
        { name: "Git", icon: <FaGit size={50} color="#F05032" /> },
        { name: "GitHub", icon: <FaGithub size={50} color="#181717" /> },
        { name: "Postman", icon: <SiPostman size={50} color="#FF6C37" /> },
        { name: "Express.js", icon: <SiExpress size={50} color="#000000" /> },
        { name: "React.js", icon: <FaReact size={50} color="#61DAFB" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={50} color="#38B2AC" /> },
        { name: "Bootstrap", icon: <FaBootstrap size={50} color="#7952B3" /> },
        { name: "Bash", icon: <SiGnubash size={50} color="#4EAA25" /> },
    ];

    return (
        <div className="dark:bg-gray-900 bg-white dark:text-white text-black flex items-center justify-center p-4 py-16">
            <div className="flex flex-col lg:flex-row items-center dark:bg-gray-800 bg-green-500 p-6 md:p-8 rounded-lg shadow-lg max-w-4xl w-full">
                <div className="max-w-4xl w-full">
                    <h2 className="text-3xl font-bold dark:text-green-400 text-black mb-6 text-center">
                        My Skills
                    </h2>
                    <div className="overflow-hidden relative">
                        <div className="flex animate-scroll gap-8">
                            {skills.map((skill, index) => (
                                <div key={index} className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md border border-gray-300 dark:border-gray-600">
                                    {skill.icon}
                                    <p className="text-gray-900 text-sm mt-2">{skill.name}</p>
                                </div>
                            ))}
                            {skills.map((skill, index) => (
                                <div key={`duplicate-${index}`} className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md">
                                        {skill.icon}
                                    <p className="text-gray-900 text-sm mt-2">
                                        {skill.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default Skills;
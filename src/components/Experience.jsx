function Experience() {
    const experiences = [
        {
            company: "Iplacex S.A.",
            role: "Development Coordinator",
            date: "May 2023 - Present",
            logo: "/public/iplacex.png",
        },
        {
            company: "Universidad de Talca",
            role: "System Administrator",
            date: "April 2018 - April 2023",
            logo: "/public/utalca.png",
        },
        {
            company: "Instituto Profesional AIEP",
            role: "IT professor Online",
            date: "Mar 2024 - Present",
            logo: "/public/aiep.jpg",
        },
        {
            company: "CFT San Agustin Talca",
            role: "IT professor",
            date: "Ago 2023 - Dec 2024",
            logo: "/public/cftsa.png",
        },
        {
            company: "Universidad de Talca",
            role: "IT professor",
            date: "Ago 2023 - Dec 2023",
            logo: "/public/utalca.png",
        },        
        {
            company: "Instituto Profesional AIEP",
            role: "IT professor",
            date: "May 2022 - Dec 2022",
            logo: "/public/aiep.jpg",
        },
        {
            company: "INACAP",
            role: "Support IT",
            date: "Mar 2019 - May 2019",
            logo: "/public/inacap.jpg",
        },
    ];

    return (
        <div className="bg-gray-900 text-white flex items-center justify-center p-4 py-16">
            <div className="max-w-4xl w-full">
                <h2 className="text-3xl font-bold text-green-400 mb-6 text-center">Work Experience</h2>
                <div className="space-y-6">
                    {experiences.map((experience, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <img src={experience.logo} alt={`${experience.company} logo`} className="w-12 h-12 rounded-full mr-4"/>
                            <div>
                                <h3 className="text-xl font-semibold">{experience.company}</h3>
                                <p className="text-gray-400">{experience.role}</p>
                            </div>
                        </div>
                            <p className="text-gray-400">{experience.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;
import React, { useState } from "react";

function Education() {
    const details = [
        {
            company: "Universidad de Concepción",
            role: "Magíster en Informática Educacional",
            date: "Mar 2020 - Sep 2021 [Graduated]",
            logo: "/public/udec.jpg",            
        },
        {
            company: "Universidad Tecnológica de Chile Inacap",
            role: "Ingeniería en Informática",
            date: "Mar 2015 - Oct 2019 [Graduated]",
            logo: "/public/inacap.jpg",            
        },
    ];

    return (
        <div className="dark:bg-gray-900 bg-white dark:text-white text-black flex items-center justify-center p-4 py-16">
            <div className="max-w-4xl w-full">
                <h2 className="text-3xl font-bold dark:text-green-400 text-black mb-6 text-center">Education</h2>
                <div className="space-y-6">
                    {details.map((detail, index) => (
                        <div key={index} className="flex items-center justify-between dark:bg-gray-800 bg-green-500 p-4 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <img src={detail.logo} alt={`${detail.company} logo`} className="w-12 h-12 rounded-full mr-4"/>
                            <div>
                                <h3 className="text-xl font-semibold">{detail.company}</h3>
                                <p className="dark:text-gray-400 text-white">{detail.role}</p>
                            </div>
                        </div>
                            <p className="dark:text-gray-400 text-white">{detail.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Education;
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
        <div className="bg-gray-900 text-white flex items-center justify-center p-4 py-16">
            <div className="max-w-4xl w-full">
                <h2 className="text-3xl font-bold text-green-400 mb-6 text-center">Education</h2>
                <div className="space-y-6">
                    {details.map((detail, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <img src={detail.logo} alt={`${detail.company} logo`} className="w-12 h-12 rounded-full mr-4"/>
                            <div>
                                <h3 className="text-xl font-semibold">{detail.company}</h3>
                                <p className="text-gray-400">{detail.role}</p>
                            </div>
                        </div>
                            <p className="text-gray-400">{detail.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Education;
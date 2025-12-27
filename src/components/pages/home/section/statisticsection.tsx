import React from 'react';

// Impor ikon yang dibutuhkan
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaLaravel,
  FaDatabase,
} from 'react-icons/fa';

import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiAstro,
  SiFilament,
} from 'react-icons/si';

function Statistic() {
  const statistics = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: FaHtml5, percentage: 84, color: "text-orange-500" },
        { name: "CSS", icon: FaCss3Alt, percentage: 73, color: "text-blue-500" },
        { name: "Tailwind", icon: SiTailwindcss, percentage: 70, color: "text-cyan-500" },
        { name: "JavaScript", icon: FaJs, percentage: 50, color: "text-yellow-500" },
        { name: "TypeScript", icon: SiTypescript, percentage: 50, color: "text-blue-600" },
        { name: "React", icon: FaReact, percentage: 60, color: "text-cyan-400" },
        { name: "Next", icon: SiNextdotjs, percentage: 52, color: "text-gray-800" },
        { name: "Astro", icon: SiAstro, percentage: 40, color: "text-red-600" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "PHP", icon: FaPhp, percentage: 46, color: "text-indigo-600" },
        { name: "Laravel", icon: FaLaravel, percentage: 72, color: "text-red-500" },
        { name: "Filament", icon: SiFilament, percentage: 69, color: "text-orange-600" },
        { name: "SQL", icon: FaDatabase, percentage: 70, color: "text-sky-600" },
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="container px-6 mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center text-gray-800">Skills</h2>
        
        <div className="p-8 mx-auto bg-white rounded-lg shadow-md max-w-8xl">
          {statistics.map((category, categoryIndex) => (
            <div key={categoryIndex} className={categoryIndex > 0 ? "mt-12" : ""}>
              <h3 className="pb-2 mb-6 text-2xl font-semibold text-gray-700 border-b">{category.title}</h3>
              
              {/* Perubahan Grid menjadi 3 kolom */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="p-4 transition-shadow duration-300 border border-gray-200 rounded-lg hover:shadow-lg">
                    {/* Struktur Baru untuk Setiap Skill */}
                    <div className="flex items-center mb-3">
                      <skill.icon className={`w-8 h-8 mr-3 ${skill.color}`} />
                      <span className="text-lg font-semibold text-gray-800">{skill.name}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full transition-all duration-500 ${skill.color.replace("text-", "bg-")}`}
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                    <div className="mt-1 text-right">
                      <span className="text-sm font-medium text-gray-600">{skill.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statistic;
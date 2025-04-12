import React from "react";

const Habilidades = () => {
  const skills = [
    { name: "Diseño UX", level: "90%" },
    { name: "Prototipado", level: "85%" },
    { name: "Investigación de usuarios", level: "80%" },
    { name: "HTML/CSS", level: "70%" },
    { name: "JavaScript", level: "65%" },
    { name: "React", level: "60%" },
  ];

  return (
    <section id="habilidades" className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Habilidades</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Estas son algunas de mis habilidades relacionadas con UX y mi aprendizaje en front-end.
        </p>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="text-left">
              <p className="text-gray-700 font-medium">{skill.name}</p>
              <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-blue-500 h-4 rounded-full animate-fill"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;

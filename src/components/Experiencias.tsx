import React from "react";

const Experiencias = () => {
  return (
    <section id="experiencias" className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Experiencias</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          A lo largo de mi carrera, he trabajado en proyectos enfocados en la
          experiencia de usuario (UX), diseñando interfaces intuitivas y
          funcionales que mejoran la interacción entre los usuarios y los
          productos digitales. Mi objetivo siempre ha sido crear soluciones que
          no solo sean estéticamente agradables, sino también accesibles y
          fáciles de usar.
        </p>
        <ul className="list-disc list-inside text-gray-700 inline-block text-center">
          <li>
            Diseño de flujos de usuario para aplicaciones web y móviles.
          </li>
          <li>
            Investigación de usuarios para entender sus necesidades y
            comportamientos.
          </li>
          <li>
            Creación de prototipos interactivos para validar ideas y conceptos.
          </li>
          <li>
            Colaboración con equipos multidisciplinarios para implementar
            soluciones efectivas.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experiencias;

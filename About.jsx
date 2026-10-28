// src/components/About.jsx
import React from 'react';

export const About = () => {
  return (
    /* El atributo id="about" es indispensable para que el href="#about" funcione */
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="mb-4">Sobre Nosotros</h2>
        <p className="lead">
          Bienvenido a BookNook, tu librería de barrio favorita en línea.
        </p>
        <p>
          Nos dedicamos a conectar a los amantes de la lectura con sus historias favoritas, 
          ofreciendo un catálogo diverso y una experiencia sencilla e intuitiva.
        </p>
      </div>
    </section>
  );
};

export default About;
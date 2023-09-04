import React from "react";
import persona from "../../../assets/me.png";
import "./about.css";

export const About = () => {
  return (
    <section className="container-about">
      <div className="container-mine-img">
        <img className="mine" src={persona} alt="me" />
      </div>
      <h2 className="name-about">Santiago Osorno</h2>
      <h3 className="subtitulo">Software Engineer - Web Developer</h3>
      <p className="about-me">
        Soy Front Dev Jr, empirico entusiasta y orientado a los detalles con
        conocimientos competentes en HTML, CSS y JavaScript así como bibliotecas
        de terceros como React. Buscando utilizar mis habilidades técnicas y
        experiencia para brindar valor al empleador y contribuir a proyectos
        exitosos tanto hoy como en el futuro. Con el objetivo de asumir nuevos
        desafíos y utilizar mis habilidades de codificación y depuración para
        desarrollar nuevas funciones y mejorar la experiencia general del
        usuario.
      </p>
    </section>
  );
};

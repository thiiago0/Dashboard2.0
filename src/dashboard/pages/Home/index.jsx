import React, { useContext } from "react";
import MyContext from "../../../context/MyContext";
import { useNavigate } from "react-router-dom";
import html from "../../../assets/html.png";
import css3 from "../../../assets/css3.png";
import javascript from "../../../assets/javascript.png";
import react from "../../../assets/react.png";

import "./home.css";

export const Home = () => {
  const { setIsLogged } = useContext(MyContext);
  const navigate = useNavigate();
  return (
    <section className="container-home">
      <div className="descripcion">
        <h2 className="tittle-home">Bienvenido a mi portafolio</h2>
        <h3>Descripcion de las tecnologias:</h3>
        <div className="column-container">
          <div className="tecno">
            <strong className="tecno-tittle">HTML5:</strong>
            <p>
              Esta nos ayuda a proporcionar una estructura semantica mejorando
              la construccion de la pagina y organizando el contenido de mi
              dashboard de manera mas significativa y clara.
            </p>
            <img className="logo" src={html} alt="HTML logo" />
          </div>
          <div className="tecno">
            <strong className="tecno-tittle">CSS3:</strong>

            <p>
              Esta tecnologia nos permitio personalizar la apariencia y el
              diseño de nuestro dashboard; creando interacciones atractivas,
              proporcionando una experiencia v isual agradable y legible.
            </p>
            <img className="logo" src={css3} alt="css3 logo" />
          </div>
          <div className="tecno">
            <strong className="tecno-tittle">JavaScript:</strong>

            <p>
              Desempeña la implementacion de la logica, la interaccion con el
              servidor, la validacion de datos y optimizar el redimiento de mi
              dashboard.
            </p>
            <img className="logo" src={javascript} alt="javascript logo" />
          </div>
          <div className="tecno">
            <strong className="tecno-tittle">React:</strong>

            <p>
              Este nos ayuda a simplificar muchas tareas. Nos proporciona una
              base solida para crear interfaces interactivas,gestionar el
              estado, datos y con la reutilizacion de componentes nos facalita a
              la construccion del dashboard.
            </p>
            <img className="logo" src={react} alt="react logo" />
          </div>
        </div>
      </div>
      {/* <button
        className="btn-logout"
        onClick={() => {
          setIsLogged("logout");
          navigate("/auth/login");
        }}
        type="button"
      >
        LogOut
      </button> */}
    </section>
  );
};

{
  /* 
  Un titulo -> Bienvenido a mi protafolio
  cuerpo -> descripcion de las tecnologias

  <div>
    imagenes de react, de git, Javascript, CSS3, HTML5
  </div>

  Crear pagina About -> Soy Front Dev Jr, empirico
  
  Contacto -> galeria de imagenes que al dar click sobre ellas 
  redireccionen a la red social o el contacto al que se hace referencia

*/
}

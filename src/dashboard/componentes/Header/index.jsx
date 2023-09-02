import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export const Header = ({ menuOptions = [] }) => {
  return (
    <nav className="contenedor">
      {/* <div className="picture">
        <img className="logo" src={Urlogo} alt="Logo" />
      </div> */}
      <ul className="item-container">
        {menuOptions?.map((i) => (
          <li key={i.id}>
            <Link to={i.enlace}>
              <strong>{i.nombre}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

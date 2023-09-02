import React, { useContext } from "react";
import { Header } from "../componentes/Header";
import MyContext from "../../context/MyContext";
import "./layout.css";

export const Layout = ({ children }) => {
  const { options } = useContext(MyContext);
  return (
    <section className="layout-container">
      <Header menuOptions={options} />
      <div className="pages-container">{children}</div>
      <div className="shape-1"></div>
      <div className="shape-2"></div>
    </section>
  );
};

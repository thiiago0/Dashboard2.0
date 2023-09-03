import React, { useState } from "react";
import MyContext from "./MyContext";

export const MyAplicationContext = ({ children }) => {
  const logInfromStorage = localStorage.getItem("isLogged");
  const [isLogged, setIsLogged] = useState(logInfromStorage);

  let options = [
    { id: 1, nombre: "Home", enlace: "/" },
    { id: 2, nombre: "Contact", enlace: "/contact" },
    { id: 3, nombre: "About", enlace: "/about" },
  ];

  return (
    <MyContext.Provider value={{ isLogged, setIsLogged, options }}>
      {children}
    </MyContext.Provider>
  );
};

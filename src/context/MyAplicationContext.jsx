import React, { useState } from "react";
import MyContext from "./MyContext";

export const MyAplicationContext = ({ children }) => {
  const [isLogged, setIsLogged] = useState("logout");

  let options = [
    { id: 1, nombre: "Home", enlace: "/" },
    { id: 2, nombre: "Contact", enlace: "/contact" },
  ];

  return (
    <MyContext.Provider value={{ isLogged, setIsLogged, options }}>
      {children}
    </MyContext.Provider>
  );
};

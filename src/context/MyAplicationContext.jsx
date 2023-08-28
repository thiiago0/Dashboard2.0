import React, { useState } from "react";
import MyContext from "./MyContext";

export const MyAplicationContext = ({ children }) => {
  const [isLogged, setIsLogged] = useState("logout");

  return (
    <MyContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </MyContext.Provider>
  );
};

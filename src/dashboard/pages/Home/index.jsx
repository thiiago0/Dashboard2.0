import React, { useContext } from "react";
import MyContext from "../../../context/MyContext";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { setIsLogged } = useContext(MyContext);
  const navigate = useNavigate();
  return (
    <section>
      <h1 style={{ color: "#fff" }}>Hola Mundo!</h1>
      <button
        onClick={() => {
          setIsLogged("logout");
          navigate("/auth/login");
        }}
        type="button"
      >
        LogOut
      </button>
    </section>
  );
};

import React, { useContext } from "react";
import MyContext from "../../../context/MyContext";
import { useNavigate } from "react-router-dom";
import "./home.css";

export const Home = () => {
  const { setIsLogged } = useContext(MyContext);
  const navigate = useNavigate();
  return (
    <section className="container-home">
      <button
        className="btn-logout"
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

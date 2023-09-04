import { useState, useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import MyContext from "../../../context/MyContext";

export const useFormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const navigate = useNavigate();
  const { setIsLogged } = useContext(MyContext);

  const handleChangeInput = (setState) => (e) => {
    setState(e.target.value);
  };

  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      Swal.fire({
        title: "Error!",
        text: "correo o password no valido",
        icon: "error",
        confirmButtonText: "Ok",
      });
      setIsLogged(false);
      setMensaje(" correo o password no valido");
      setEmail("");
      setPassword("");
      setMensaje("");
    } else {
      Swal.fire({
        title: "Success!",
        text: "User correct",
        icon: "success",
        confirmButtonText: "Go to home",
      });
      localStorage.setItem("isLogged", true);
      setIsLogged(true);
      setEmail("");
      setPassword("");
      setMensaje("");
      navigate("/");
    }
  };

  return {
    setMensaje,
    mensaje,
    email,
    password,
    handleChangeInput,
    setEmail,
    setPassword,
    handleLogin,
  };
};

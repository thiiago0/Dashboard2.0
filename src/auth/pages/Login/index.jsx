import React, { useContext } from "react";
import "./loginStyle.css";
import { useFormLogin } from "../hooks/useFormLogin";
import MyContext from "../../../context/MyContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { email, password, handleChangeInput, setEmail, setPassword } =
    useFormLogin();

  const navigate = useNavigate();

  const { setIsLogged } = useContext(MyContext);
  const handleClickLogin = () => {
    localStorage.setItem("isLogged", true);
    setIsLogged(true);
    navigate("/");
  };

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h3>Login Here</h3>

        <label htmlFor="username">User Name</label>
        <input
          type="email"
          placeholder="Email or Phone"
          id="username"
          value={email}
          onChange={handleChangeInput(setEmail)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={handleChangeInput(setPassword)}
          minLength={8}
          required
        />

        <button type="button" onClick={handleClickLogin}>
          Log In
        </button>
        <div className="social">
          <div className="go">
            <i className="fab fa-google"></i> Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </>
  );
};

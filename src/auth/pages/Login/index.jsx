import React from "react";
import "./loginStyle.css";
import { useFormLogin } from "../hooks/useFormLogin";

export const Login = () => {
  const {
    email,
    password,
    handleChangeInput,
    handleLogin,
    setEmail,
    setPassword,
  } = useFormLogin();

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleLogin}>
        <h3>Login Here</h3>

        <label htmlFor="username">User Name</label>
        <input
          type="email"
          placeholder="Email"
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
        <button type="submit">Log In</button>
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

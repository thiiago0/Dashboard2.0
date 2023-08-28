import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MyAplicationContext } from "./context/MyAplicationContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyAplicationContext>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </MyAplicationContext>
);

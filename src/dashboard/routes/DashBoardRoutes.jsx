import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Contact } from "../pages";
export const DashBoardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

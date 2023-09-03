import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Contact, About } from "../pages";
import { Layout } from "../layout";

export const DashBoardRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
};

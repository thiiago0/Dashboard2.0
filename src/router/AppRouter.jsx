import React, { useContext } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { DashBoardRoutes } from "../dashboard/routes/DashBoardRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import MyContext from "../context/MyContext";

export const AppRouter = () => {
  const { isLogged } = useContext(MyContext);

  return (
    <Routes>
      {isLogged ? (
        <Route path="/*" element={<DashBoardRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};

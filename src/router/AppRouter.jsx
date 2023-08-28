import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { DashBoardRoutes } from "../dashboard/routes/DashBoardRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

export const AppRouter = () => {
  const status = false;

  return (
    <Routes>
      {status ? (
        <Route path="/*" element={<DashBoardRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};

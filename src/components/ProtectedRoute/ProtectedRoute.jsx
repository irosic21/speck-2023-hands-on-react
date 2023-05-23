import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ state, redirectPath, children }) => {
  if (!state) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default ProtectedRoute;

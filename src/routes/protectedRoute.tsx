import React from "react";
import { Route, Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  roles: string[];
  path: string;
  element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  roles,
  path,
  element,
}) => {
  const isAuthenticated = true; // Replace with your authentication logic
  const userRoles = ["admin"]; // Replace with your actual user roles

  // Check if the user has the required role
  const isAuthorized = roles.some((role) => userRoles.includes(role));

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (!isAuthorized) {
    return <Navigate to="/error/401" />;
  }

  return <Route path={path} element={element} />;
};

export default ProtectedRoute;

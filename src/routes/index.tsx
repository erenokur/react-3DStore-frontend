import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";

const LazyLogin = lazy(() => import("src/pages/login"));
const LazyRegister = lazy(() => import("src/pages/register"));
const LazyHome = lazy(() => import("src/pages/home"));
const ErrorPage = lazy(() => import("src/pages/error"));

const AppRoutes: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/login" element={<LazyLogin />} />
      <Route path="/register" element={<LazyRegister />} />
      <Route path="/" element={<LazyHome />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute
            path="/home"
            roles={["admin", "user"]}
            element={<LazyHome />}
          />
        }
      />
      <Route path="/error/:errorCode" element={<ErrorPage />} />
      <Route path="*" element={<ErrorPage errorCode={404} />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;

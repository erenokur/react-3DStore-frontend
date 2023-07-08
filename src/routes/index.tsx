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
      <ProtectedRoute
        path="/home"
        element={<LazyHome />}
        roles={["admin", "user"]}
      />
      <Route path="/error/:errorCode" element={<ErrorPage />} />
      <Route path="*" element={<ErrorPage errorCode={404} />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "src/pages/login";
import Register from "../pages/Register";
import NoMatch from "../pages/404";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <PrivateRoute path="/home" element={<Home />} />
    <Route path="*" element={<NoMatch />} />
  </Routes>
);

export default AppRoutes;

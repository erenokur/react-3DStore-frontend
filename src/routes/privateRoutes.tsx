import React from "react";
import { useSelector } from "react-redux";
import Loading from "../pages/Loading";
import { getToken } from "../utils/tokenStorage";
import { Route, redirect } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children, ...rest }: PrivateRouteProps) => {
  const { loading } = useSelector((state) => state.auth);

  if (loading) {
    return <Loading />;
  }

  return (
    <Route
      {...rest}
      render={({ location }) => {
        const token = getToken();
        return token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;

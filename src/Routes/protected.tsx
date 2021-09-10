import React from "react";
import { Route, Redirect } from "react-router-dom";

const token = localStorage.getItem("token");

const ProtectedRoute = ({
  children,
  ...rest
}: any) => (
  <Route
    {...rest}
    render={(props) =>
      token ? (
        children
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

export default ProtectedRoute
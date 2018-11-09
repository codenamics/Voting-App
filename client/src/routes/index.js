import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../layout/Dashboard";
import ErrorMessage from "../containers/ErrorMessage";
import NavBar from "../layout/NavBar";
import AuthForm from "../containers/AuthForm";
import ProtectedRoutes from "../containers/ProtectedRoutes";

export default () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route
        exact
        path="/login"
        render={props => (
          <AuthForm authType="login" headline="Login" {...props} />
        )}
      />
      <Route
        exact
        path="/register"
        render={props => (
          <AuthForm authType="register" headline="Register" {...props} />
        )}
      />
      <ProtectedRoutes />
    </Switch>
    <ErrorMessage />
  </div>
);

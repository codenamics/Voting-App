import React from "react";
import { Redirect } from "react-router-dom";
import Auth from "../components/Auth";
import ErrorMessage from "../components/ErrorMessage";

const AuthPage = ({ authType, headline, isAuthenticated }) => {
  if (isAuthenticated) return <Redirect to="/home" />;

  return (
    <div>
      <ErrorMessage />
      <Auth authType={authType} headline={headline} />
    </div>
  );
};

export default AuthPage;

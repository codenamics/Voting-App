import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import AuthPage from "../layout/AuthPage";
import { connect } from "react-redux";
import Test from "../layout/Test";

const Routes = ({ auth }) => {
  return (
    <React.Fragment>
      <Switch>
        <Route
          exact
          path="/login"
          render={() => (
            <AuthPage
              authType="login"
              headline="Login"
              isAuthenticated={auth.isAuthenticated}
            />
          )}
        />
        <Route
          exact
          path="/register"
          render={() => (
            <AuthPage
              authType="register"
              headline="Register"
              isAuthenticated={auth.isAuthenticated}
            />
          )}
        />
        <Route exact path="/test" render={() => <Test />} />
      </Switch>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default withRouter(connect(mapStateToProps)(Routes));

import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import AuthPage from "../layout/AuthPage";
import { connect } from "react-redux";
import Home from "../layout/Home";
import { getCurrentPoll } from "../store/actions";
import PollPage from "../layout/PollPage";
const Routes = ({ auth, getCurrentPoll }) => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
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

        <Route
          exact
          path="/poll/:id"
          render={props => (
            <PollPage getPoll={id => getCurrentPoll(id)} {...props} />
          )}
        />
      </Switch>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default withRouter(
  connect(
    mapStateToProps,
    { getCurrentPoll }
  )(Routes)
);

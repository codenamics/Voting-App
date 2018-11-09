import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../layout/Home";
import CreatePoll from "../containers/CreatePoll";
import RequireAuth from "../containers/RequireAuth";
import ShowCurrentPoll from "../containers/ShowCurrentPoll";

export default () => (
  <RequireAuth>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/poll/new" component={CreatePoll} />
      <Route exact path="/poll/:id" component={ShowCurrentPoll} />
    </Switch>
  </RequireAuth>
);

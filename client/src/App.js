import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import decode from "jwt-decode";
import store from "./store/store";
import { setToken, setCurrentUser, addError } from "./store/actions";

import Routes from "./components/Routes";

if (localStorage.jwtToken) {
  setToken(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
  } catch (err) {
    store.dispatch(setCurrentUser({}));
    store.dispatch(addError(err));
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Routes />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;

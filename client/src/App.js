import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import jwt_decode from "jwt-decode";
import store from "./store/store";
import { setToken, setCurrentUser, logout } from "./store/actions";

import Routes from "./components/Routes";
import NavBar from "./layout/NavBar";

if (localStorage.jwtToken) {
  setToken(localStorage.jwtToken);

  const decoded = jwt_decode(localStorage.jwtToken);

  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    store.dispatch(logout());

    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <NavBar />
            <Routes />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;

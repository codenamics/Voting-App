import React, { Component } from "react";
import { Provider } from "react-redux";
import decode from "jwt-decode";
import store from "./store/store";
import { setToken, setCurrentUser, addError } from "./store/actions";
import Auth from "./components/Auth";

if (localStorage.jwtToken) {
  setToken(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
  } catch (err) {
    store.dispatch(setCurrentUser({}));
    store.dispatch(addError(err));
  }
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Auth />
      </Provider>
    );
  }
}

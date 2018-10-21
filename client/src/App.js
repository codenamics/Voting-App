import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Test from "../src/components/test";
import { setToken, setCurrentsUser } from "./actions/auth";
import { addError } from "./actions/actionErrors";
import decode from "jwt-decode";

if (localStorage.jwtToken) {
  setToken(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentsUser(decode(localStorage.jwtToken)));
  } catch (error) {
    store.dispatch(setCurrentsUser({}));
    store.dispatch(addError(error));
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Test />
        </div>
      </Provider>
    );
  }
}

export default App;

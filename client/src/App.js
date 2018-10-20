import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Test from "../src/components/test";

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

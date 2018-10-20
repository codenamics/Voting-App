import React, { Component } from "react";
import api from "../service/api";

export default class Test extends Component {
  componentDidMount() {
    const result = api.call("post", "auth/login", {
      username: "username",
      password: "password"
    });
    console.log(result);
  }
  render() {
    return (
      <div>
        <h1>test</h1>
      </div>
    );
  }
}

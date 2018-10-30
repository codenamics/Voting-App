import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { authUser, logout } from "../store/actions/auth";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    const { username, password } = this.state;
    const { authType } = this.props;
    e.preventDefault();
    this.props.authUser(authType, { username, password });
  }

  render() {
    const { username, password } = this.state;
    const { headline } = this.props;
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <h1>{headline}</h1>
          <label className="label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            value={username}
            name="username"
            onChange={this.handleChange}
          />
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            value={password}
            name="password"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

Auth.propTypes = {
  authUser: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

export default connect(
  () => ({}),
  { authUser, logout }
)(Auth);

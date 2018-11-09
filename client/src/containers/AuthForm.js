import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { authUser } from "../store/actions/auth";

class Auth extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const { authType, history } = this.props;
    this.props.authUser(authType, { username, password }, history);
  };

  render = () => (
    <div className="flex-basic">
      <form style={{ margin: "-10vh 0 0 0" }} onSubmit={this.handleSubmit}>
        <h1>{this.props.headline}</h1>
        <label className="label" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          value={this.state.username}
          name="username"
          onChange={this.handleChange}
        />
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          value={this.state.password}
          name="password"
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default connect(
  null,
  { authUser }
)(Auth);

Auth.propTypes = {
  authUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    action: PropTypes.string,
    block: PropTypes.func,
    createHref: PropTypes.func,
    go: PropTypes.func,
    goBack: PropTypes.func,
    goForward: PropTypes.func,
    length: PropTypes.number,
    listen: PropTypes.func,
    location: PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
      hash: PropTypes.string,
      state: PropTypes.oneOf(["object", "undefined"])
    }),
    push: PropTypes.func,
    replace: PropTypes.func
  })
};

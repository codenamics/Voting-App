import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class RequireAuth extends Component {
  componentDidMount = () => {
    if (!this.props.isAuthenticated) {
      this.props.history.push("/login");
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      this.props.location.pathname !== prevProps.location.pathname &&
      !this.props.isAuthenticated
    ) {
      this.props.history.push("/login");
    }
  };

  render = () =>
    !this.props.isAuthenticated ? null : (
      <Fragment>{this.props.children}</Fragment>
    );
}

export default withRouter(
  connect(state => ({ isAuthenticated: state.auth.isAuthenticated }))(
    RequireAuth
  )
);

RequireAuth.propTypes = {
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

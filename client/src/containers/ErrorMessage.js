import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { removeError } from "../store/actions/error";

class ErrorMessage extends PureComponent {
  componentDidUpdate = () => {
    const { error } = this.props;
    if (error) setTimeout(() => this.props.removeError(), 3000);
  };

  render = () => (
    <Fragment>
      {this.props.error && (
        <div className="error-message-container">
          <div className="error-message">{this.props.error}</div>
        </div>
      )}
    </Fragment>
  );
}

export default connect(
  state => ({
    error: state.error
  }),
  { removeError }
)(ErrorMessage);

ErrorMessage.propTypes = {
  error: PropTypes.string,
  removeError: PropTypes.func.isRequired
};

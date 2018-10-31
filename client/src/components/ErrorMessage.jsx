import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ErrorMessage = ({ error }) => (
  <React.Fragment>
    {error && (
      <div style={{ textAlign: "center", color: "red" }}>{error.message}</div>
    )}
  </React.Fragment>
);

ErrorMessage.propTypes = {
  error: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  error: state.error
});

export default connect(mapStateToProps)(ErrorMessage);

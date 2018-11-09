import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LoggedinNav = ({
  auth: {
    user: { username }
  },
  logout
}) => (
  <Fragment>
    <li className="">
      <Link to="/home">Home</Link>
    </li>
    <li>
      <Link to="/" onClick={logout}>
        Logout
      </Link>
    </li>
    <li>
      <Link to="/poll/new">New Poll</Link>
    </li>
    <li>Logged in as {username}</li>
  </Fragment>
);

export default LoggedinNav;

LoggedinNav.propTypes = {
  logout: PropTypes.func.isRequired,
  username: PropTypes.string
};

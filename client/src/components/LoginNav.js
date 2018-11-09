import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default () => (
  <Fragment>
    <li>
      <Link to="/">Dashboard</Link>
    </li>
    <li>
      <Link to="/register">Register</Link>
    </li>
    <li>
      <Link to="/login">Login</Link>
    </li>
  </Fragment>
);

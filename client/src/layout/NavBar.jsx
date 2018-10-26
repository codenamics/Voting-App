import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions";

const NavBar = ({ auth, logout }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>

        {auth.isAuthenticated ? (
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        ) : null}
        {auth.isAuthenticated ? <p>Logged in as {auth.user.username}</p> : null}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(NavBar);

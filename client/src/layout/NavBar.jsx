import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions";

const NavBar = ({ auth, logout }) => {
  return (
    <div className="container">
      <nav className="nav">
        <div>Logo</div>
        <ul className="navbar">
          {!auth.isAuthenticated ? (
            <React.Fragment>
              <li className="">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </React.Fragment>
          ) : null}
          {auth.isAuthenticated ? (
            <React.Fragment>
              <li className="">
                <Link to="/">Home</Link>
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
              <li>Logged in as {auth.user.username}</li>
            </React.Fragment>
          ) : null}
        </ul>
      </nav>
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

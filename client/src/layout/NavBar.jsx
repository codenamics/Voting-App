import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions";

const NavBar = ({ auth, logout }) => {
  return (
    <nav className="nav">
      <div className="nav-desktop">
        <div />
        <ul>
          {!auth.isAuthenticated ? (
            <React.Fragment>
              <li>
                <Link to="/">Dashboard</Link>
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
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/" onClick={logout}>
                  Logout
                </Link>
              </li>
              <li>
                <Link to="/poll/new">New</Link>
              </li>
              <li>Logged in as {auth.user.username}</li>
            </React.Fragment>
          ) : null}
        </ul>
      </div>
      <div className="nav-mobile">
        <input
          type="checkbox"
          className="nav-mobile__checkbox"
          id="navi-toogle"
        />
        <label for="navi-toogle" className="nav-mobile__button">
          <span className="nav-mobile__icon" />
        </label>
        <div className="nav-mobile__background" />
        <div className="nav-mobile__nav">
          <ul className="nav-mobile__list">
            {!auth.isAuthenticated ? (
              <React.Fragment>
                <li className="nav-mobile__item">
                  <Link to="/">Dashboard</Link>
                </li>
                <li className="nav-mobile__item">
                  <Link to="/register">Register</Link>
                </li>
                <li className="nav-mobile__item">
                  <Link to="/login">Login</Link>
                </li>
              </React.Fragment>
            ) : null}
            {auth.isAuthenticated ? (
              <React.Fragment>
                <li className="nav-mobile__item">
                  <Link to="/home">Home</Link>
                </li>
                <li className="nav-mobile__item">
                  <Link to="/" onClick={logout}>
                    Logout
                  </Link>
                </li>
                <li className="nav-mobile__item">
                  <Link to="/poll/new">New</Link>
                </li>
                <li className="nav-mobile__item">
                  Logged in as {auth.user.username}
                </li>
              </React.Fragment>
            ) : null}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(NavBar);

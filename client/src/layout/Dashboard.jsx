import React from "react";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Voting App</h1>
      <div className="dashboard__cta">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

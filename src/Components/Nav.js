import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <h3>PlayDate</h3>
      <ul className="nav-links">
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/account">
          <li>Create Account</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
        <Link to="/bios">
          <li>Bios</li>
        </Link>
        <Link to="/matches">
          <li>My Matches</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;

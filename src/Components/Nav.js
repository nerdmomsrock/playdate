import React from "react";
//import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <h1>PlayDate</h1>
      <ul className="nav-links">
        <Link to="/home" className="link">
          <li>Home</li>
        </Link>
        <Link to="/account" className="link">
          <li>Create Account</li>
        </Link>
        <Link to="/login" className="link">
          <li>Login</li>
        </Link>
        <Link to="/bios" className="link">
          <li>Bios</li>
        </Link>
        <Link to="/matches" className="link">
          <li>My Matches</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;

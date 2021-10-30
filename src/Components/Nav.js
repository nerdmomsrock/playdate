import React, { useState } from "react";
//import "./App.css"; //comment
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Nav(props) {
  console.log(props, "this is props");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => setMenuOpen(!menuOpen);

  const menuClass = menuOpen ? "menu-open" : "";
  return (
    <div className="Nav">
      <h1>#PlayDate</h1>
      <ul className="nav-links">
        <Link to="/home" className="link">
          <li>Home</li>
        </Link>
        {props.user.email.length > 0 ? null : (
          <Link to="/account" className="link">
            <li>Create Account</li>
          </Link>
        )}
        {props.user.email.length > 0 ? null : (
          <Link to="/login" className="link">
            <li>Login</li>
          </Link>
        )}
        <Link to="/bios" className="link">
          <li>Bios</li>
        </Link>
        <Link to="/matches" className="link">
          <li>My Matches</li>
        </Link>
      </ul>
      <button className="menuButton" onClick={handleClick}>
        Menu
        <img
          className="hamburger"
          src="http://assets.stickpng.com/images/588a6507d06f6719692a2d15.png"
          alt="burger-menu"
        />
      </button>
      <menu className={menuClass} style={{ overflow: "hidden" }}>
        <ul className="menuLinks">
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
      </menu>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Nav);

import React from 'react';
//import "./App.css"; //comment
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Nav(props) {
  console.log(props, 'this is props');
  return (
    <div className="Nav">
      <h1>#PlayDate</h1>
      <ul className="nav-links">
        <Link to="/" className="link">
          <li>Home</li>
        </Link>
        {/* I was thinking this might be nice */}
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
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Nav);

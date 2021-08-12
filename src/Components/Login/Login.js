import React, { useState } from "react";

function Login() {
  return (
    <div className="Login">
      <br />
      <h1>Login Here:</h1>
      <div>
        <br />
        <div className="user">
          Username
          <br />
          <input className="field" type="text" placeholder="Enter Email" />
        </div>
        <div className="user" style={{ marginTop: 60 }}>
          Password
          <br />
          <input className="field" type="text" placeholder="Enter Password" />
        </div>
        <br />
        <br />
        <br />
        <br />
        <button className="submit">Submit</button>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Login;

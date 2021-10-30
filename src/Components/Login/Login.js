import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { registerUser } from "../../ducks/userReducer";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    axios
      .post("/api/login", {
        email,
        password,
      })
      .then((res) => {
        props.registerUser(res.data);
        props.history.push("/Bios");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="Login">
      <br />
      <h1>Login Here:</h1>
      <div>
        <br />
        <div className="user">
          Username
          <br />
          <input
            className="field"
            type="text"
            placeholder="Enter Email"
            //value={this.state.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="user" style={{ marginTop: 60 }}>
          Password
          <br />
          <input
            className="field"
            type="password"
            placeholder="Enter Password"
            //value={this.state.password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <br />
        <br />
        <br />
        <button className="submit" onClick={login}>
          Submit
        </button>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
//}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { registerUser })(Login);

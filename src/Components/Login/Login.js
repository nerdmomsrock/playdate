//import axios from "axios";
import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { loginUser } from "../../ducks/reducer";

// import React from 'react';
// import {connect} from "react-redux";
// import {loginUser} from "../../ducks/reducer";
// import axios from 'axios';

// const Login = props => {
//   const login = (e) => {
//     e.preventDefault();

//     axios
//       .post("/api/login")
//       , {
//         email: this.state.email,
//         password: this.state.password,
//       })
//       .then((res) => {
//         props.loginUser(res.data);
//         props.history.push("/Bios"); //how do I also allow them to go to matches
//       })
//       .catch((err) => console.log(err));
//   }
// }
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  login = (e) => {
    e.preventDefault();

    axios
      .post("/api/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        this.props.loginUser(res.data);
        this.props.history.push("/Bios"); //how do I also allow them to go to matches
      })
      .catch((err) => console.log(err));
  };

  //   // function submit() {
  //   //   axios
  //   //   .post("/api/login")
  //   //   .then((res) => )
  //   //   console.log(email, password);
  //   // }

  //   // function logout() {

  //   // }
  //   // axios
  //   //   .post("/api/login")
  //   //   .then(res.sendStatus(200))
  //   //   .catch((e) => console.log(e));

  //   // function userLogin(req, res) {
  //   //   axios
  //   //     .post("/api/login")
  //   //     .then(res.sendStatus(200))
  //   //     .catch((e) => console.log(e));
  //   // }
  render() {
    const { email, password } = this.state;
    //const { email, password };
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
              onChange={(e) => this.handleEmail(e)}
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
              onChange={(e) => this.handlePassword(e)}
            />
          </div>
          <br />
          <br />
          <br />
          <br />
          <button className="submit" onClick={this.login}>
            Submit
          </button>
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

//const mapDispatchToProps = (reduxState) => reduxState;

export default connect(null, { loginUser })(Login);

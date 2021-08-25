// import React, { Component} from 'react';
// import { connect } from react-redux;
// import { registerUser } from ",,/ducks/reducer";
// //import { useHistory } from 'react-router-dom';

// class Account extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//       first_name: "",
//       number_of_kids: "",
//       favorite_food: "",
//       embarrassing_moment: "",
//       gender: "",
//       photo: "",

//     };
//   }

//   handleInput = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   login = (e) => {
//     e.preventDefault();

//     axios
//       .post("/api/login", {
//         email: this.state.email,
//         password: this.state.password,
//       })
//       .then((res) => {
//         this.props.loginUser(res.data);
//         this.props.history.push("/Bios"); //how do I also allow them to go to matches
//       })
//       .catch((err) => console.log(err));
//   };

//   register = (e) => {
//     e.preventDefault();

//     axios
//       .post("/api/register", {
//         email: this.state.email,
//         password: this.state.password,
//         first_name: this.state.first_name,
//         number_of_kids: this.state.number_of_kids,
//         favorite_food: this.state.favorite_food,
//         embarrassing_moment: this.state.embarrassing_moment,
//         gender: this.state.gender,
//         photo: this.state.photo
//       })
//       .then((res) => {
//         this.props.registerUser(res.data);
//         this.props.history.push("/Bios");
//       })
//       .catch(err => console.log(err));
//   };

//   render() {
//     const { email, password } = this.state;
//     return (
//       <main className="auth">
//         <form className="authForm">
//           <input
//             name="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => this.handleInput(e)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => this.handleInput}
//           />
//           <button onClick={(e) => this.login(e)}>Login</button>
//           <button onClick={(e) => this.register(e)}>Register</button>
//         </form>
//       </main>
//     );
//   }
// }

// const mapStateToProps = reduxState => reduxState;

// export default connect[mapStateToProps, {registerUser}](Account);

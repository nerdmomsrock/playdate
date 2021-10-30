import React, { useState } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../ducks/userReducer";

import axios from "axios";

function Account(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [your_kids, setYour_kids] = useState("");
  const [their_kids, setTheir_kids] = useState("");
  const [favorite_food, setFavorite_food] = useState("");
  const [embarrassing_moment, setEmbarrassing_moment] = useState("");
  const [gender, setGender] = useState("");
  const [photo, setPhoto] = useState("");

  const register = (e) => {
    axios
      .post("/api/register", {
        email,
        password,
        first_name,
        your_kids,
        their_kids,
        favorite_food,
        embarrassing_moment,
        gender,
        photo,
      })
      .then((res) => {
        console.log(res.data);
        props.registerUser(res.data);
        props.history.push("/Bios");
      })
      .catch((err) => console.log(err));
  };

  const logout = (e) => {
    axios.delete("/api/logout", logout);
  };

  return (
    <div className="Account">
      <br />
      <h1>My Account</h1>

      <div className="user">
        <h3>Create Account</h3>

        <input
          className="field"
          type="text"
          placeholder="Enter Email"
          //value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <br />
        <input
          className="field"
          type="text"
          placeholder="Create Password"
          //value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <br />
      </div>
      <div className="profile">
        <h3>My Name Is:</h3>
        <input
          className="field"
          type="text"
          placeholder="First Name"
          //value={first_name}
          onChange={(e) => setFirst_name(e.target.value)}
        />
        <br />
        <br />
        <br />
        <h3>I Am A:</h3>
        <input
          className="field"
          type="text"
          placeholder="Enter Gender"
          //value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <br />
        <br />
        <br />
        <h3>I'm a Rockstar Parent Of:</h3>
        <input
          className="field"
          type="text"
          placeholder="# of Children"
          //value={your_kids}
          onChange={(e) => setYour_kids(e.target.value)}
        />
        <br />
        <br />
        <br />
        <h3>My Potential Match Can Have Up To This Many Children:</h3>
        <input
          className="field"
          type="text"
          placeholder="# of Children"
          //value={their_kids}
          onChange={(e) => setTheir_kids(e.target.value)}
        />
        <br />
        <br />
        <br />
        <h3>My Most Embarrassing Parenting Moment Is:</h3>
        <input
          className="fieldMoment"
          type="text"
          placeholder="500 Words Or Less"
          //value={embarrassing_moment}
          onChange={(e) => setEmbarrassing_moment(e.target.value)}
        />

        <br />
        <br />
        <br />
        <h3>My Favorite Kid-Friendly Food Is:</h3>
        <input
          className="field"
          type="text"
          placeholder="Enter Food"
          //value={favorite_food}
          onChange={(e) => setFavorite_food(e.target.value)}
        />
        <br />
        <br />
        <br />
        <h3>Upload Smokin' Hot Selfie Here:</h3>
        <div className="selfie">
          <input
            src=" "
            alt="Selfie"
            type="file"
            //value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
          <br />
          <br />
          <br />
        </div>
        <div className="buttons">
          <br />
          <br />
          <br />
          <button className="submitReg" onClick={register}>
            Submit
          </button>
          <br />
          <br />
          <br />
          <button className="deleteReg" onClick={logout}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { registerUser })(Account);

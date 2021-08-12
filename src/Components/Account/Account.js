import React from "react";

function Account() {
  return (
    <div className="Account">
      <br />
      <h1>My Account</h1>

      <div className="user">
        <h3>Create Account</h3>

        <input className="field" type="text" placeholder="Enter Email" />
        <br />
        <br />
        <br />
        <input className="field" type="text" placeholder="Create Password" />
        <br />
        <br />
        <br />
      </div>
      <div className="profile">
        <h3>I Am A:</h3>
        <input className="field" type="text" placeholder="Enter Gender" />
        <br />
        <br />
        <br />
        <h3>I'm a Rockstar Parent Of:</h3>
        <input className="field" type="text" placeholder="# of Children" />
        <br />
        <br />
        <br />
        <h3>My Potential Match Can Have Up To This Many Children:</h3>
        <input className="field" type="text" placeholder="# of Children" />
        <br />
        <br />
        <br />
        <h3>My Most Embarrassing Parenting Moment Is:</h3>
        <input
          className="fieldMoment"
          type="text"
          placeholder="500 Words Or Less"
        />
        <br />
        <br />
        <br />
        <h3>Percentage of Time That Kids Are With Me:</h3>
        <input
          className="field"
          type="text"
          placeholder="Enter as Percentage"
        />
        <br />
        <br />
        <br />
        <h3>My Favorite Kid-Friendly Food Is:</h3>
        <input className="field" type="text" placeholder="Enter Food" />
        <br />
        <br />
        <br />
        <h3>Upload Smokin' Hot Selfie Here:</h3>
        <div className="selfie">
          <img src=" " alt="Selfie" />
          <br />
          <br />
          <br />
        </div>
        <div className="buttons">
          <br />
          <br />
          <br />
          <button className="submitReg">Submit</button>
          <br />
          <br />
          <br />
          <button className="deleteReg">DELETE ACCOUNT</button>
        </div>
      </div>
    </div>
  );
}

export default Account;

import React, { Component } from "react";
import App from "./App";
import profile from "./images/profile-img.png";

class Profile extends Component {
  render() {
    return (
      <div className="Event">
        
        <div className="header">
            <h1 className="header-title">Spotchecker </h1>
        </div>

        <div className="subpage-header">
          <div className="subpage-header-title">Profile</div>
        </div>

        <div className="profile-top-bar">
          <img className="profile-image" src={profile} alt="profile"></img>

          <div className="customer-info">
            <p>
              {" "}
              <b>Name: </b>
              <br></br> {this.props.user.displayName} <br></br>
              <b>Age:</b> <br></br> 25 <br></br>
              <b> Email:</b> <br></br> {this.props.user.email}
            </p>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Profile;

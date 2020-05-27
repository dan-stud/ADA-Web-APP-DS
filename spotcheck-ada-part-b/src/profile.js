import React, { Component } from "react";
import Redirect from "./index";

import Add from "./add";
import Map from "./map";

import profile from "./img/profile.png";
import map from "./img/map.png";
import add from "./img/add.png";

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

          <div className="customer-info">
            <p>
              {" "}
              <b>Name: </b>
              {/* <br></br> {this.props.user.displayName} <br></br> */}
              <b>Age:</b> <br></br> 21 <br></br>
              {/* <b> Email:</b> <br></br> {this.props.user.email} */}
            </p>
          </div>
        </div>

        <div className="footer">

          <div className="footer-icon">
            <img
              src={map}
              onClick={() => {
                Redirect(<Map />);
              }}
              alt="map"
            ></img>
          </div>

          <div className="footer-icon">
            <img
              src={add}
              onClick={() => {
                Redirect(<Add />);
              }}
              alt="add"
            ></img>
          </div>

          <div className="footer-icon">
            <img
              src={profile}
              onClick={() => {
                Redirect(<Profile />);
              }}
              alt="profile"
            ></img>
          </div>

        </div>

      </div>
    );
  }
}

export default Profile;

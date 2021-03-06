import React, { Component } from "react";
import Redirect from "./index";
import "./map.css";

import Add from "./add";
import Profile from "./profile";

import profile from "./img/profile.png";
import map from "./img/map.png";
import add from "./img/add.png";

class Map extends Component {
  render() {
    return (
      <div className="Map">

        <div className="header">
          <h1 className="header-title-map">Spotchecker</h1>
        </div>

        <div className="main-page-map">
        
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

export default Map;

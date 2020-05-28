import React, { Component } from "react";
import Redirect from "./index";
import "./add.css";

import Map from "./map";
import Profile from "./profile";

import profile from "./img/profile.png";
import map from "./img/map.png";
import add from "./img/add.png";
import insert from "./img/insert-spot.png"

class Add extends Component {
  render() {


    return (
      <div className="Event">

        <div className="header">
          <h1 className="header-title">Spotchecker </h1>
        </div>

        <div className="subpage-header">
          <div className="subpage-header-title">New Spot</div>
        </div>

        <form>
          <div className="main-content-contianer">

            <div className="image-container">
              <img
                src={insert}
                alt="insert spot img here"
              ></img>
              <p> Add Image</p>
            </div>

            <div className="spot-info">
              <div className="info">
              <label for="sdesc"> Spot Description: </label><br></br>
                <input type="text" id="sdesc" name="sdesc" value="add"/>
              </div>

              <div className="info">
                <b> Spot Type </b>
                
              </div>

              <div className="info">
                <b> Spot Difficulty Level </b>
              </div>

            </div>

          </div>

        </form>

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

export default Add;

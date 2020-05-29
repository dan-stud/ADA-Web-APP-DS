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
                <textarea type="text" id="sdesc" name="sdesc" />
              </div>

              <div className="info">
                <label for="sdesc"> Spot Type: </label><br></br>
                <select name="cars" size="4">
                  <option value="stairset" icon="insert">Stairset</option>
                  <option value="skatepark">Skatepark</option>
                  <option value="hillbomb">HillBomb</option>
                  <option value="stair-rail">Stairset w/ Handrail</option>
                </select>
              </div>
              <div className="scroll-level">
                <div className="info">

                  <label for="sdesc"> Spot Level: </label><br></br>
                  <div className = "radio-container">
                  <input type="radio" id="beginner" className="diff" value="beginner"></input>
                  <span className="checkmark" ></span>
                  <label for="male">Beginner</label><br></br>
                  <input type="radio" id="intermediate" className="diff" value="intermediate"></input>
                  <span className="checkmark" ></span>
                  <label for="female">intermediate</label><br></br>
                  <input type="radio" id="pro" className="diff" value="pro"></input>
                  <span className="checkmark" ></span>
                  <label for="other">Pro</label>

                  </div>

                </div>
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

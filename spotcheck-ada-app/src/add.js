import React, { Component } from "react";
import App from "./App";
import profile from "./images/profile-img.png";

class Add extends Component {
  render() {
    return (
      <div className="Event">
        
        <div className="header">
            <h1 className="header-title">Spotchecker </h1>
        </div>

        <div className="subpage-header">
          <div className="subpage-header-title">Add New Spot</div>
        </div>

        <div className="add-top-bar">
          <img className="add-image" src={profile} alt="insert spot img"></img>

          <div className="footer">

          </div>
        </div>
        
      </div>
    );
  }
}

export default Add;

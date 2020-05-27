import Redirect from "./index";
import React from "react";
import "./App.css";
import google from "./img/google-icon.png";
import Map from "./map.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div
         
          onClick={() => {
            Redirect(<App />);
          }}
          className="homepage-logo"
          alt="logo"
        >
          <h1> Spotchecker </h1>
           </div>
      </header>
      <div className="login-container">
        <p className="login-label">Login:</p>
        <div className="login-icon">
          <img
            src={google}
            alt="Google Login"
            onClick={() => {
              Redirect(<Map />);
            }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default App;


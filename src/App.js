import { useState } from "react";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>London</p>
          </div>
          <div className="temperature">
            <h1>57° F</h1>
          </div>
          <div className="description">
            <p>Cloudy</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">60° F</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">69%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">8 MPH</p>
            <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

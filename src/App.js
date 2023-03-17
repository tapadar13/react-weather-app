import { useState } from "react";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <div className="conatiner">
        <div className="top">
          <div className="location"><p>London</p></div>
          <div className="temperature"><h1>57° F</h1></div>
          <div className="description"><p>Cloudy</p></div>
        </div>
        <div className="bottom">
          <div className="feels">60° F</div>
          <div className="humidity">69%</div>
          <div className="wind">8 MPH</div>
        </div>
      </div>
    </div>
  );
}

export default App;

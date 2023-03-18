import { useState } from "react";
import axios from "axios";
import config from "./constants/config";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${config.API_TOKEN}`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="App">
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={searchLocation}
        />
      </div>
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

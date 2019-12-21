import React, { useState } from "react";
import "./App.css";
import { render } from "react-dom";
import { withScriptjs } from "react-google-maps";
import MyMapComponent from "./components/MyMapComponent";

function App() {
  const [city, setCity] = useState("Quebec City");

  const MapLoader = withScriptjs(MyMapComponent);
  return (
    <div className="App">
      <div>Input Areas </div>
      <div className="map-container">
        <MapLoader
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDAR8ubrq24oKLzNQathKEL02qJ_4gXqnI"
          loadingElement={<div style={{ height: `100%` }} />}
          cityName={city}
        />
      </div>
      <div>Filters</div>
    </div>
  );
}

export default App;

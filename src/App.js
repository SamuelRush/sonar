import React from "react";
import "./App.css";
import MyMapComponent from "./components/maps"

function App() {
  return (
    <div className="App">
        <MyMapComponent isMarkerShown/>
        <MyMapComponent isMarkerShown/>
        <MyMapComponent isMarkerShown/>
    </div>
  );
}

export default App;

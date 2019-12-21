import React from "react";
import "./App.css";
import MyMapComponent from "./components/maps";
import Drawer from "./components/left_drawer";

function App() {
  return (
    <div className="App">
      <Drawer></Drawer>
      <MyMapComponent isMarkerShown />
    </div>
  );
}

export default App;

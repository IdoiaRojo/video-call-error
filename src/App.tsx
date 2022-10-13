import React from "react";
import "./App.css";
import BuildingImg from "./assets/Website-Design.webp";

function App() {
  return (
    <div className="flex flex-col">
      <img className="animate-pulse" src={BuildingImg} />
      <h2 className="text-lg">Building ifeel users chat...</h2>
    </div>
  );
}

export default App;

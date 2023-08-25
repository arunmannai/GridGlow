import React, { useState } from "react";
import Left from "./Left";
import Right from "./Right";
import "./App.css";
function App() {
  const [box, setBox] = useState(0);
  return (
    <div className="container-fluid">
      <h1 className="text-center my-5">Color Changer</h1>
      <div className="row">
        <Left setBox={setBox} />
        <Right selectedbox={box} />
      </div>
    </div>
  );
}
export default App;

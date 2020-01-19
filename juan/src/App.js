import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/navbar";
import Bio from "./components/bio/bio";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Bio></Bio>
    </div>
  );
}

export default App;

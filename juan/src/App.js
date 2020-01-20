import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/navbar";
import Bio from "./components/bio/bio";
import Floatingbar from "./components/floatingBar/floatingbar";
function App() {
  return (
    <div className="App">
      <Floatingbar></Floatingbar>
      <Navbar></Navbar>
      <Bio></Bio>
    </div>
  );
}

export default App;

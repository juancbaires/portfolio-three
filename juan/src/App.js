import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/navbar";
import Bio from "./components/bio/bio";
import Floatingbar from "./components/floatingBar/floatingbar";
import About from "./components/about/about";
function App() {
  return (
    <div className="App">
      <Floatingbar></Floatingbar>
      <Navbar></Navbar>
      <About></About>
      <Bio></Bio>
    </div>
  );
}

export default App;

import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/navbar";
import Bio from "./components/bio/bio";
import Floatingbar from "./components/floatingBar/floatingbar";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
function App() {
  return (
    <div className="App">
      <Floatingbar></Floatingbar>
      <Navbar></Navbar>
      <About></About>
      <Bio></Bio>
      <Projects></Projects>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import Timeline from "../Timeline/timeline";
import "./bio.scss";
class Bio extends Component {
  render() {
    return (
      <div id="first" className="bio-container">
        <h3>Experience</h3>
        <Timeline></Timeline>
      </div>
    );
  }
}

export default Bio;

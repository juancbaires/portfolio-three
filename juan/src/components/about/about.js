import React, { Component } from "react";
// import { Link, animateScroll as scroll } from "react-scroll";
import "./about.scss";
export default class about extends Component {
  render() {
    return (
      <div className="about_wrapper">
        <div className="about-bio">
          {/* <div className="about-bio-image"></div> */}
          <div className="about-bio-image"></div>
          <a className="hire-btn" href="#home">
            Hire Me
          </a>
          <div className="about-bio-content">
            I’m Juan! A Full Stack Web Developer who writes clean, efficient and
            reusable code. My attention to detail, diagnostic skills and team
            work are essential to my approach, and guided me during my Army
            service. I am able to adapt and overcome any problem at hand.
          </div>
        </div>
      </div>
    );
  }
}

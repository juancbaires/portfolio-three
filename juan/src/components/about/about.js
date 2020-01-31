import React, { Component } from "react";
// import { Link, animateScroll as scroll } from "react-scroll";
import "./about.scss";
export default class about extends Component {
  render() {
    return (
      <div className="about_wrapper">
        <aside className="about_wrapper_image"></aside>
        <article className="about_wrapper_content">
          <div className="about-bio">
            <div className="about-bio-image"></div>
            <h3>A little about me!</h3>
            <a className="hire-btn" href="#home">
              Hire Me
            </a>
            <div className="about-bio-content">
              I’m Juan! A Full Stack Web Developer who writes clean, efficient
              and reusable code. My attention to detail, diagnostic skills and
              team work are essential to my approach, and guided me during my
              Army service. I am able to adapt and overcome any problem at hand.
            </div>
          </div>
        </article>
      </div>
    );
  }
}
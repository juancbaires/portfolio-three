import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./navbar.scss";
class navbar extends Component {
  render() {
    return (
      <div className="navbar" id="mi-casa">
        <div className="navbar_content">
          <div className="navbar_header">
            <h3 id="title-effect">Hi, I'm Juan</h3>
            <p className="navbar_subheader">
              Full Stack Web Developer - Freelancer
            </p>
          </div>
          <p>
            I'm a Web Developer specializing in custom websites using React,
            Vanilla Javascript and Wordpress. If you're a business seeking a web
            presence or an employer looking to hire, let's connect.
          </p>
          <span className="header_socialIcons">
            <a href="www.facebook.com" className="iconFacebook">
              <i className="fab fa-facebook-square fa-lg"></i>
            </a>
            <a href="www.linkedin.com" className="iconLinkedIn">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="www.twitter.com" className="iconTwitter">
              <i className="fab fa-twitter-square fa-lg"></i>
            </a>
            <a href="www.youtube.com" className="iconYoutube">
              <i className="fab fa-youtube-square fa-lg"></i>
            </a>
          </span>
          <span className="header_action_call">
            <a href="my.resume.com" className="resume_btn">
              My Resume
            </a>
            <a href="something.com" className="contact_btn">
              Contact Me
            </a>
          </span>
        </div>
        <Link to="#first" smooth={true} offset={0} duration={500}>
          <p className="carrot-down">
            <i className="fas fa-arrow-down fa-3x"></i>
          </p>
        </Link>
      </div>
    );
  }
}

export default navbar;

import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./navbar.scss";
import hand from "../../images/wavingHand.png";
class navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar_content">
          <div className="navbar_header">
            <h3 id="title-effect">Hi, I'm Juan</h3>
            <p className="navbar_subheader">
              Full Stack Web Developer - Freelancer
            </p>
            {/* <img src={hand} alt="waving hand" /> */}
            {/* <nav>header</nav> */}
          </div>
          <p>
            I'm a Web Developer specializing in custom websites using React,
            Vanilla Javascript and Wordpress. If you're a business seeking a web
            presence or an employer looking to hire, let's connect.
          </p>
          <span className="header_socialIcons">
            <a href="#" className="iconFacebook">
              <i class="fab fa-facebook-square fa-lg"></i>
            </a>
            <a href="#" className="iconLinkedIn">
              <i class="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="#" className="iconTwitter">
              <i class="fab fa-twitter-square fa-lg"></i>
            </a>
            <a href="#" className="iconYoutube">
              <i class="fab fa-youtube-square fa-lg"></i>
            </a>
          </span>
          <span className="header_action_call">
            <a href="#" className="resume_btn">
              My Resume
            </a>
            <a href="#" className="contact_btn">
              Contact Me
            </a>
          </span>
        </div>
        <Link to="bio-container" smooth={true} offset={0} duration={500}>
          <p className="carrot-down">
            <i className="fas fa-arrow-down fa-3x"></i>
          </p>
        </Link>
      </div>
    );
  }
}

export default navbar;

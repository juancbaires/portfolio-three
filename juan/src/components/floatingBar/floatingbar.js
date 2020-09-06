import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./floatingbar.scss";

export default class floatingbar extends Component {
  state = {
    mobileWidth: "",
    floatingPosition: "",
  };
  listenScrollEvent = (e) => {
    if (window.scrollY > 20) {
      this.setState({ floatingPosition: "fixed-nav" });
    } else {
      this.setState({ floatingPosition: "" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }
  render() {
    return (
      <div
        className={`floatingbar ${this.state.mobileWidth}${this.state.floatingPosition}`}
      >
        <ul>
          <Link to="mi-casa" smooth={true} offset={0} duration={500}>
            <li className="first-li">
              <i className="fas fa-home fa-2x"></i>
            </li>
          </Link>
          <Link to="first" smooth={true} offset={0} duration={500}>
            <li className="second-li">
              <i className="fas fa-user-alt fa-2x"></i>
            </li>
          </Link>

          <Link to="project-cards" smooth={true} offset={0} duration={500}>
            <li className="third-li">
              <i className="fas fa-laptop-code fa-2x"></i>
            </li>
          </Link>
          <Link to="contact-me" smooth={true} offset={0} duration={500}>
            <li className="fourth-li">
              <i className="fas fa-address-book fa-2x"></i>
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}

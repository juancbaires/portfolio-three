import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./floatingbar.scss";
export default class floatingbar extends Component {
  state = {
    mobileWidth: ""
  };
  //   componentDidMount() {
  //     this.resize();
  //   }
  componentWillUpdate() {
    this.resize();
  }
  resize = () => {
    let width = window.innerWidth <= 760;
    if (width) {
      this.setState({ mobileWidth: "hide-floater" });
    } else {
      this.setState({ mobileWidth: "" });
    }
  };
  render() {
    return (
      <div className={`floatingbar ${this.state.mobileWidth}`}>
        <ul>
          <Link to="mi-casa" smooth={true} offset={0} duration={500}>
            <li className="first-li">
              <i class="fas fa-home fa-2x"></i>
            </li>
          </Link>
          <Link to="first" smooth={true} offset={0} duration={500}>
            <li className="second-li">
              <i class="fas fa-user-alt fa-2x"></i>
            </li>
          </Link>

          <Link to="my-work" smooth={true} offset={0} duration={500}>
            <li className="third-li">
              <i class="fas fa-laptop-code fa-2x"></i>
            </li>
          </Link>
          <Link to="contact-me" smooth={true} offset={0} duration={500}>
            <li className="fourth-li">
              <i class="fas fa-address-book fa-2x"></i>
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}
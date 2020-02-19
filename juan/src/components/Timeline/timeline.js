import React, { Component } from "react";
import "./timeline.scss";
export default class extends Component {
  render() {
    return (
      <div>
        <div className="timeline">
          {/* Start timeline component */}
          <div className="container left">
            <div className="content">
              <h4>Oct 2013-Apr 2017 Diesel Tech @ US Army</h4>
              <p>
                -Spent 4 years in the service where I learned to work on diesel
                engine vehicles and their hydraulic and mechanical components
              </p>
            </div>
          </div>
          {/* end of 1 */}
          <div className="container right">
            <div className="content">
              <h4>Apr 2017-Aug 2018 Student @ Montgomery College</h4>
              <p>
                Studied Digital Media and Web Technologies. Made the Deans list
                and maintained a 3.8GPA
              </p>
            </div>
          </div>
          {/* end of 2 */}
          <div className="container left">
            <div className="content">
              <h4>Aug 2018-Nov 2018 Student @ General Assembly</h4>
              <p>
                500 hours of classroom, homework and projects in a Full Stack
                Engineering course where I was able to solidfy my understanding
                of some of the most modern Technologies used in web development,
                specifically the MERN stack.
              </p>
            </div>
          </div>
          {/* end of 3 */}
          <div className="container right">
            <div className="content">
              <h4>Jan 2019-Dec 2019 Freelance Web Developer</h4>
              <p>
                -Created a number of websites for variety of clients including a
                non-profit in DC. During this time, the majority of the web
                development I performed was done using Wordpress, CSS,
                JavaScript, HTML and Jquery.
              </p>
            </div>
          </div>
          {/* end of 4 */}
          {/* Start of the 5th container */}
          <div className="container left">
            <div className="content">
              <h4>
                Dec 2019-Current Web Developer @{" "}
                <a
                  href="https://www.socialdriver.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Social Driver
                </a>
              </h4>
              <p>
                -Worked on a variety of proects using Wordpress, PHP and Drupal.
                Worked with teams that consisted of project managers, designers
                and other developers to build cross-browser, responsive,
                acessible and beautiful websites. Other technologies that I used
                at Social Driver include, SCSS, Jquery, Grunt, Codeship,
                Invision, salesforce.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

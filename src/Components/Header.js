import React, { Component, Fragment } from "react";
import model from "./images/ss.png";
import about from "./images/about-img.png";
export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <section className="section">
          {/* start text  */}
          <div className="text-container">
            <p>Hello,</p>
            <p>
              I'M <span className="blueBlack">SALAH</span> SAMIR
            </p>
            <p>I am front end developer</p>
            <button className="mt-2">
              <a href="mailto:salahsamir11111@gmail.com" />
              Contact Me
            </button>
          </div>
          {/* start model */}
          <img src={model} className="model" alt="model" />
        </section>
        {/* start about  */}
        <div className="about-container">
          <img src={about} alt="about" />
          <div className="about-text">
            <p>About Me</p>
            <p>
              Hello, My name is salah samir and i am front end developer, I have
              many skills like : Html/5 - Css/3 - Css Grid - Bootstrap -
              Javascript - JS DOM - JS BOM- ES6 - Json - Ajax - Fetch Api -
              React Js - Redux - Context Api
            </p>
            <p>
              if you have any project or any idea you want to make it real ,
              contact me. if you want a good result for your idea, i am waiting
              you.
            </p>
            <button className="mr-2">Contact Me</button>
            <button>My Resume</button>
          </div>
        </div>
        {/* social bar  */}
        <div class="social-a-bars">
          <a
            href="https://www.linkedin.com/in/salah-samir-86a782123/"
            target="_black"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.facebook.com/Salah.samir11" target="_black">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/salah_samir/" target="_black">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:salahsamir11111@gmail.com" target="_black">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </Fragment>
    );
  }
}

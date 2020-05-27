import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="container-fluid bg-dark mt-5">
        <div className="row text-white">
          <div className="display-5 p-3 text-center  mx-auto">
            &copy;{new Date().getFullYear()} Salah Samir - All Right Reserved
            {/* social icons */}
            <div className="container mt-3 social-icon">
              <div className="row justify-content-center mb-3">
                <div className="col-2">
                  <a
                    href="https://www.facebook.com/Salah.samir11"
                    target="_black"
                  >
                    <i className="fab fa-facebook-f fa-2x"></i>
                  </a>
                </div>
                <div className="col-2">
                  <a>
                    <i className="fab fa-twitter fa-2x"></i>
                  </a>
                </div>
                <div className="col-2">
                  <a>
                    <i className="fab fa-google-plus-g fa-2x"></i>
                  </a>
                </div>
                <div className="col-2">
                  <a
                    href="https://www.facebook.com/Salah.samir11"
                    target="_black"
                  >
                    <i className="fab fa-reddit fa-2x"></i>
                  </a>
                </div>
                <div className="col-2">
                  <a
                    href="https://www.linkedin.com/in/salah-samir-86a782123/"
                    target="_black"
                  >
                    <i className="fab fa-linkedin-in fa-2x"></i>
                  </a>
                </div>
                <div className="col-2">
                  <a
                    href="https://www.instagram.com/salah_samir/"
                    target="_black"
                  >
                    <i className="fab fa-instagram fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

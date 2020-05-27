import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="container-fluid bg-dark mt-5">
        <div className="row text-white">
          <div className="display-5 p-3 text-center  mx-auto">
            &copy;{new Date().getFullYear()} Salah Samir - All Right Reserved
          </div>
        </div>
      </div>
    );
  }
}

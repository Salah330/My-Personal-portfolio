import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class SingleOne extends Component {
  render() {
    return (
      <div>
        hello from SingleOne
        <Link to="/details" className="btn btn-outline-primary text-uppercase">
          details of project
        </Link>
      </div>
    );
  }
}

import React, { Component } from "react";
import SingleOne from "./SingleOne";
import { ContextConsumer } from "./Context";
export default class Projects extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h1 className="display-3  mb-5 text-center mx-auto font-italic detailsHeader">
          <span className="text-dark font-weight-bold italic">Our project</span>
        </h1>
        <div className="row d-flex justify-content-around mb-5 align-items-center">
          <ContextConsumer>
            {(value) => {
              return value.info.map((item) => {
                return <SingleOne item={item} key={item.id} />;
              });
            }}
          </ContextConsumer>
        </div>
      </div>
    );
  }
}

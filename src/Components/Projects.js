import React, { Component } from "react";
import SingleOne from "./SingleOne";
import { ContextConsumer } from "./Context";
export default class Projects extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row mb-5">
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

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ContextConsumer } from "./Context";
export default class SingleOne extends Component {
  render() {
    const { id, img, headerTitle, description } = this.props.item;
    return (
      <ContextConsumer className="col-10 col-lg-4 mx-auto mb-5 flex-fill">
        {(value) => {
          return (
            <div className="col-10 col-lg-4 mx-auto mb-5 flex-fill">
              <div className="card text-center">
                <img className="card-img-top" src={img} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{headerTitle}</h5>
                  <p className="card-text">{description}</p>
                  <Link
                    to="/details"
                    className="btn btn-outline-primary text-uppercase"
                    onClick={() => {
                      value.handleDetails(id);
                    }}
                  >
                    details of project
                  </Link>
                </div>
              </div>
            </div>
          );
        }}
      </ContextConsumer>
    );
  }
}

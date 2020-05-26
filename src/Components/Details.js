import React, { Component } from "react";
import { ContextConsumer } from "./Context";
import { Link } from "react-router-dom";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";
export default class Details extends Component {
  render() {
    return (
      <ContextConsumer>
        {(value) => {
          const {
            id,
            headerTitle,
            img,
            img2,
            img3,
            description,
            tools,
            link,
          } = value.detail;
          return (
            <div className="container-fluid  details align-items-center justify-content-center mt-5 bg-light">
              <h1 className="display-3 text-center mx-auto font-italic detailsHeader">
                <span className="text-primary ">Details</span>{" "}
                <span className="text-dark">of our project</span>
              </h1>
              <div className="row align-items-center">
                <MDBContainer className=" col-10 mx-auto col-lg-6 mb-4">
                  <MDBCarousel
                    activeItem={1}
                    length={3}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1"
                  >
                    <MDBCarouselInner>
                      <MDBCarouselItem itemId="1">
                        <MDBView>
                          <img
                            className="d-block w-100"
                            src={img}
                            alt="First slide"
                          />
                        </MDBView>
                      </MDBCarouselItem>
                      <MDBCarouselItem itemId="2">
                        <MDBView>
                          <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                          />
                        </MDBView>
                      </MDBCarouselItem>
                      <MDBCarouselItem itemId="3">
                        <MDBView>
                          <img
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide"
                          />
                        </MDBView>
                      </MDBCarouselItem>
                    </MDBCarouselInner>
                  </MDBCarousel>
                </MDBContainer>
                <div className=" col-10 mx-auto col-lg-6 mt-5 p-2 mh-100">
                  <h1 className="display-5 font-weight-bold italic">
                    <em>{headerTitle}</em>
                  </h1>
                  <p className="text-dark">{description}</p>
                  <p className="display-5">
                    <strong className="text-primary ">Tools : </strong>
                    {tools}
                  </p>
                  <p className="lead">
                    <a
                      className="btn btn-primary btn-lg"
                      href={link}
                      role="button"
                      target="_black"
                    >
                      Learn more
                    </a>
                  </p>
                </div>
              </div>
            </div>
          );
        }}
      </ContextConsumer>
    );
  }
}

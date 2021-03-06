import React, { useState } from "react";
import logo from "./images/logo.png";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
const Example = (props) => {
  return (
    <div>
      <Navbar
        color="dark"
        light
        expand="md"
        className="justify-content-between"
      >
        <NavbarBrand className="text-white font-italic font-weight-bold">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top ml-2"
            alt=""
            loading="lazy"
          />{" "}
          Salah - Samir
        </NavbarBrand>
        <Nav className="mr-2" navbar>
          <NavItem>
            <Link className="text-white text-uppercase" to="/">
              Home &nbsp; <i className="fas fa-home"></i>
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Example;

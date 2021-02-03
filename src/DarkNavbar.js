import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Shakas from "./Shakas";

const DarkNavbar = () => {
  return (
    <div className="DarkNavbar">
      <Navbar className="m-auto content-width" bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Navbar.Brand href="#home">
              <Shakas />
            </Navbar.Brand>
            <Nav.Item>
              <Nav.Link href="#link">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
      </Navbar>
    </div>
  );
};

export default DarkNavbar;

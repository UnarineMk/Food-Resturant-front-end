import React from "react";
import { Nav } from "react-bootstrap";
import classes from "./navigationBar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const NavigationBar = () => {
  return (
    <div classname={classes.nav}>
      <Nav defaultActiveKey="/home" className={classes.Nav}>
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" className={(classes.nav1, "ms-0")}>
            Menu
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">About Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Contact Us</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default NavigationBar;

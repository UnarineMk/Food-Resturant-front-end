import React from "react";
import food from "../images/hero-image1-removebg.png";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import classes from "./homepage.module.css";

const Homepage = (props) => {
  return (
    <div className={classes.mainContainer}>
      <Row>
        <Col md={6}>
          <div className={classes.leftSection}>
            <div className={classes.mainHeading}>
              <span className={classes.firstSentence}>Burgers</span>
              <br />
              <span className={classes.secondSentence}>
                Order The Best Burgers in Town
              </span>
            </div>
            <div className={classes.search}>
              <input
                type="text"
                placeholder="Search Your Food"
                className={classes.searchInput}
              />
              <Button>Let's Go!</Button>
            </div>
          </div>
        </Col>

        <Col md={6}>
          <div className={classes.rightSection}>
            <img
              src={food}
              alt=" Nothing to Show"
              className={classes.heroImage2}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Homepage;

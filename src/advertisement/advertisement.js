import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import edit from "../images/burger edit.png";
import decoration from "../images/dots.png";
import classes from "./advertisement.module.css";

const Advertisements = () => {
  return (
    <div className={classes.advertisement}>
      <div className={classes.Decoration4}>
        <img src={decoration} alt="" className={classes.imageDeco} />
      </div>
      <Row className={classes.advertisementRow}>
        <Col md={4} className={classes.advertisementCol}>
          <div className={classes.addivParagraphHeading}>
            <h1 className={classes.heroParagraphHeading}>
              Download App for more Exciting Deals
            </h1>

            <p className={classes.heroParagraphText}>
              PMinim quis incididunt ea aliqua sunt laborum eiusmod veniam
              ullamco in. Cupidatat ut eu aliqua veniam nulla sit nostrud est
              laborum ipsum est non do. Anim consectetur sunt ipsum anim dolor
              eu sit nostrud. Ex aliquip magna amet cupidatat veniam eu ea velit
              exercitation ipsum voluptate ex reprehenderit commodo
            </p>
          </div>
          <div className={classes.advertisementBtn}>
            <Button className="me-5">Google Play</Button>
            <Button>Apple</Button>
          </div>
        </Col>
        <Col md={8} className={classes.editCol}>
          <img src={edit} alt="No image" className={classes.edit} />
        </Col>
      </Row>
    </div>
  );
};

export default Advertisements;

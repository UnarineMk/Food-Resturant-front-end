import React from "react";
import classes from "./serviceSection.module.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const ServiceSection = () => {
  return (
    <div className={classes.mainServiceContainer}>
      <div className={classes.heroParagraph}>
        <Row className={classes.heroParagraphRow}>
          <Col md={6}>
            <div className={classes.divParagraphHeading}>
              <h1 className={classes.heroParagraphHeading}>
                Our Best Serivces Rendered!
              </h1>
            </div>
          </Col>
          <Col md={6}>
            <div className={classes.divParagraphText}>
              <p className={classes.heroParagraphText}>
                PMinim quis incididunt ea aliqua sunt laborum eiusmod veniam
                ullamco in. Cupidatat ut eu aliqua veniam nulla sit nostrud est
                laborum ipsum est non do. Anim consectetur sunt ipsum anim dolor
                eu sit nostrud. Ex aliquip magna amet cupidatat veniam eu ea
                velit exercitation ipsum voluptate ex reprehenderit commodo
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <Row className={classes.rowServiceOne}>
        <Col md={6} className={classes.colServiceTruck}>
          PMinim quis incididunt ea aliqua sunt laborum eiusmod veniam ullamco
          in. Cupidatat ut eu aliqua veniam nulla sit nostrud est laborum ipsum
          est non do. Anim consectetur sunt ipsum anim dolor eu sit nostrud. Ex
          aliquip magna amet cupidatat veniam eu ea velit exercitation ipsum
          voluptate ex reprehenderit commodo
        </Col>
        <Col md={6}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="150"
            fill="rgb(0, 118, 214)"
            class="bi bi-truck"
            viewBox="0 0 16 16"
            className={classes.svgTruck}
          >
            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
          </svg>
        </Col>
      </Row>

      <Row className={classes.rowServiceTwo}>
        <Col md={6} className={classes.colServiceHeadphones}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="150"
            fill="rgba(163, 214, 238, 0.671)"
            class="bi bi-headset"
            viewBox="0 0 16 16"
            className={classes.svgHeadphones}
          >
            <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
          </svg>
        </Col>
        <Col md={6}>
          PMinim quis incididunt ea aliqua sunt laborum eiusmod veniam ullamco
          in. Cupidatat ut eu aliqua veniam nulla sit nostrud est laborum ipsum
          est non do. Anim consectetur sunt ipsum anim dolor eu sit nostrud. Ex
          aliquip magna amet cupidatat veniam eu ea velit exercitation ipsum
          voluptate ex reprehenderit commodo
        </Col>
      </Row>

      <Row className={classes.rowServiceOne}>
        <Col md={6} className={classes.colServiceTruck}>
          PMinim quis incididunt ea aliqua sunt laborum eiusmod veniam ullamco
          in. Cupidatat ut eu aliqua veniam nulla sit nostrud est laborum ipsum
          est non do. Anim consectetur sunt ipsum anim dolor eu sit nostrud. Ex
          aliquip magna amet cupidatat veniam eu ea velit exercitation ipsum
          voluptate ex reprehenderit commodo
        </Col>
        <Col md={6}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="150"
            fill="rgb(0, 118, 214)"
            class="bi bi-geo-fill"
            viewBox="0 0 16 16"
            className={classes.svgTruck}
          >
            <path
              fill-rule="evenodd"
              d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
            />
          </svg>
        </Col>
      </Row>
    </div>
  );
};

export default ServiceSection;

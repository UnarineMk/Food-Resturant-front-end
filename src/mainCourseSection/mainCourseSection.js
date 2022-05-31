import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import burger from "../images/image_block1.png";
import burger2 from "../images/burger2.jpg";
import burger3 from "../images/burger3.jpg";
import classes from "./mainCourseSection.module.css";
import decoration from "../images/dots.png";

const MainCourseSection = () => {
  const arr = [classes.mainfoodSectionRow, classes.mainfoodSectionRowMargin];
  return (
    <div className={classes.mainfoodSection}>
      <Row className={arr.join(" ")}>
        <Col md={3}>
          <div className={classes.foodSectionContent}>
            <img
              src={burger}
              alt="No image"
              className={classes.burgerImgContent}
            />
            <div className={classes.contentOverlay}>
              <div className={classes.contentOverlayText}>
                <h1 className={classes.contentOverlayHeading}>
                  Occaecat anim nisi tempo
                </h1>
                Dolore sit duis in culpa magna ipsum. Eiusmod do esse ad
              </div>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className={classes.foodSectionContent}>
            <img
              src={burger2}
              alt="No image"
              className={classes.burgerImgContent}
            />
            <div className={classes.contentOverlay}>
              <div className={classes.contentOverlayText}>
                <h1 className={classes.contentOverlayHeading}>
                  Occaecat anim nisi tempo
                </h1>
                Dolore sit duis in culpa magna ipsum. Eiusmod do esse ad
              </div>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className={classes.foodSectionContent}>
            <img
              src={burger3}
              alt="No image"
              className={classes.burgerImgContent}
            />
            <div className={classes.contentOverlay}>
              <div className={classes.contentOverlayText}>
                <h1 className={classes.contentOverlayHeading}>
                  Occaecat anim nisi tempo
                </h1>
                Dolore sit duis in culpa magna ipsum. Eiusmod do esse ad
              </div>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className={classes.foodSectionContent}>
            <img
              src={burger3}
              alt="No image"
              className={classes.burgerImgContent}
            />
            <div className={classes.contentOverlay}>
              <div className={classes.contentOverlayText}>
                <h1 className={classes.contentOverlayHeading}>
                  Occaecat anim nisi tempo
                </h1>
                Dolore sit duis in culpa magna ipsum. Eiusmod do esse ad
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className={classes.mainfoodSectionRow}>
        <Col md={3}>
          <div className={classes.foodSectionContent}>
            <img
              src={burger}
              alt="No image"
              className={classes.burgerImgContent}
            />
            <div className={classes.contentOverlay}>
              <div className={classes.contentOverlayText}>
                <h1 className={classes.contentOverlayHeading}>
                  Occaecat anim nisi tempo
                </h1>
                Dolore sit duis in culpa magna ipsum. Eiusmod do esse ad
              </div>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className={classes.foodSectionContent}>
            <img
              src={burger2}
              alt="No image"
              className={classes.burgerImgContent}
            />
            <div className={classes.contentOverlay}>
              <div className={classes.contentOverlayText}>
                <h1 className={classes.contentOverlayHeading}>
                  Occaecat anim nisi tempo
                </h1>
                Dolore sit duis in culpa magna ipsum. Eiusmod do esse ad
              </div>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className={classes.foodSectionContent}>
            <img
              src={burger3}
              alt="No image"
              className={classes.burgerImgContent}
            />
            <div className={classes.contentOverlay}>
              <div className={classes.contentOverlayText}>
                <h1 className={classes.contentOverlayHeading}>
                  Occaecat anim nisi tempo
                </h1>
                Dolore sit duis in culpa magna ipsum. Eiusmod do esse ad
              </div>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className={classes.foodSectionContent}>
            <img
              src={burger3}
              alt="No image"
              className={classes.burgerImgContent}
            />
            <div className={classes.contentOverlay}>
              <div className={classes.contentOverlayText}>
                <h1 className={classes.contentOverlayHeading}>
                  Occaecat anim nisi tempo
                </h1>
                Dolore sit duis in culpa magna ipsum. Eiusmod do esse ad
              </div>
            </div>
          </div>
        </Col>
      </Row>
      {/* <div className={classes.Decoration2}>
        <img src={decoration} alt="" className={classes.imageDeco} />
      </div> */}
    </div>
  );
};

export default MainCourseSection;

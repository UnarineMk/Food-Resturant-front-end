import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./foodSection.module.css";
import burger from "../images/image_block1.png";
import burger2 from "../images/burger2.jpg";
import burger3 from "../images/burger3.jpg";
import decoration from "../images/dots.png";

const FoodSection = () => {
  return (
    <div>
      <div className={classes.heroParagraph}>
        <Row className={classes.heroParagraphRow}>
          <Col md={6}>
            <div className={classes.divParagraphHeading}>
              <h1 className={classes.heroParagraphHeading}>
                Here are Some Top Dining and Take Away!
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

      <div className={classes.dinningTakeawaySection}></div>
      <Row className={classes.foodSectionRow}>
        <Col md={4}>
          <div className={classes.foodSection}>
            <div className={classes.Decoration3}>
              <img src={decoration} alt="" className={classes.imageDeco1} />
            </div>
            <img src={burger} alt="No image" className={classes.burgerImg} />
            <div className={classes.overlay}>
              <div className={classes.overlayText}>
                <h1 className={classes.overlayHeading}>
                  Occaecat anim nisi tempo
                </h1>
                Dolore sit duis in culpa magna ipsum. Eiusmod do esse ad
              </div>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className={classes.foodSection}>
            <div className={classes.Decoration3}>
              <img src={decoration} alt="" className={classes.imageDeco1} />
            </div>
            <img src={burger2} alt="No image" className={classes.burgerImg} />
            <div className={classes.overlay}>
              <div className={classes.overlayText}>
                <h1 className={classes.overlayHeading}>
                  Occaecat anim nisi tempo
                </h1>
                Dolore sit duis in culpa magna ipsum. Eiusmod do esse ad
              </div>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className={classes.foodSection}>
            <div className={classes.Decoration3}>
              <img src={decoration} alt="" className={classes.imageDeco1} />
            </div>
            <img src={burger3} alt="No image" className={classes.burgerImg} />
            <div className={classes.overlay}>
              <div className={classes.overlayText}>
                <h1 className={classes.overlayHeading}>
                  Occaecat anim nisi tempo
                </h1>
                Dolore sit duis in culpa magna ipsum. Eiusmod do esse ad
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FoodSection;

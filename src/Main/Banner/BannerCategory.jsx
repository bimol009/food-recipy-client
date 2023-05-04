import "./BannerCategory.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

const BannerCategory = () => {
  return (
    <div className="background mt-5 mb-5">
      <Container>
        <Row>
          <Col className="d-flex align-items-center" lg={6}>
            {/* <img className="img-inside" src="https://i.ibb.co/SdqDZkn/curry-dishes-78118-131-removebg-preview.png" alt="" /> */}
            <div>
              <LazyLoadImage
                src="https://i.ibb.co/SdqDZkn/curry-dishes-78118-131-removebg-preview.png"
                width={600}
                height={400}
                alt="Image Alt"
              />
            </div>
          </Col>
          <Col className="d-flex align-items-center font" lg={6}>
            <h1 className="  fw-bold">
              CHEF COOKING <br /> <br /> Browse Throw Over <br /> 3000000
              Recipes
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BannerCategory;

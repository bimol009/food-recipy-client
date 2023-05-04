import "./BannerCategory.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

const BannerCategory = () => {
  return (
    <div className="background mt-5 mb-5">
  
        <Row>
          <Col className="" lg={6}>
            {/* <img className="img-inside" src="https://i.ibb.co/SdqDZkn/curry-dishes-78118-131-removebg-preview.png" alt="" /> */}
            <div>
              <LazyLoadImage
                src="https://i.ibb.co/SdqDZkn/curry-dishes-78118-131-removebg-preview.png"
                alt="Image Alt"
              />
            </div>
          </Col>
          <Col className="text center mt-5" lg={6}>
            <h1 className="  fw-bold">
              CHEF COOKING <br /> <br /> Browse Throw Over <br /> 3000000
              Recipes
            </h1>
          </Col>
        </Row>
     
    </div>
  );
};

export default BannerCategory;

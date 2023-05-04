import React from "react";
import { Carousel } from "react-bootstrap";

const CaroselSection = () => {
  return (
    <div>
       <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/kJ0DgZ6/spicy-minced-pork-salad-with-chili-flakes-1150-28576.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="fw-bold fs-1 text-primary">THAI FOOD</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/87hHsBP/top-view-delicious-noodles-concept-23-2148773775.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="fw-bold fs-1 text-primary">CHINESE FOOD</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/r2FwS5F/whole-chicken-grill-served-with-rice-garnish-white-plate-114579-873.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="fw-bold fs-1 text-primary">BANGLADESHI KHABAR</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default CaroselSection;

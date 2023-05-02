import React from "react";
import banner1 from "../../../public/carusel-img/jpgtopngconverter-com.jpg";
import banner2 from "../../../public/carusel-img/jpgtopngconverter-com.png";
import banner3 from "../../../public/carusel-img/jpgtopngconverter-com (1).jpg";
import banner4 from "../../../public/carusel-img/jpgtopngconverter-com (2).jpg";
import { Carousel } from "react-bootstrap";

const CaroselSection = () => {
  return (
    <div>
       <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
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
          src={banner1}
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
          src={banner2}
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

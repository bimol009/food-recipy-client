import "./BannerSection.css";
import logo from "../../../public/food back/png-transparent-personal-chef-cook-chef-s-uniform-kitchen-house-chef-restaurant-thumbnail-removebg-preview.png";
import { Col, Container, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

const BannerSection = () => {
  return (
    <div className="background mt-5">
      <h2 className="text-center pt-5 fw-bold text-warning">
     
        Choose any chefs
      </h2>
      <p className="text-center text-warning fs-4 pb-5">
   
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <Container>
        <Row>
          <Col className="d-flex align-items-center" lg={6}>
            {/* <img className="img-inside" src={logo} alt="" /> */}
            <div>
              <LazyLoadImage src={logo} alt="Image Alt" />
            </div>
          </Col>
          <Col className="d-flex align-items-center" lg={6}>
            <h1 className="fw-bold text-white">
              CHEF COOKING <br /> <span className="text-warning"> <br /> Browse Throw Over <br /> 3000000
              Recipes</span>
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BannerSection;

import "./BannerSection.css";
import logo from "../../../public/food back/png-transparent-personal-chef-cook-chef-s-uniform-kitchen-house-chef-restaurant-thumbnail-removebg-preview.png";
import { Col, Container, Row } from "react-bootstrap";

const BannerSection = () => {
  return (
    <div className="background mt-5">
      <Container>
        <Row>
          <Col className="d-flex align-items-center" lg={6}>
            <img className="img-inside" src={logo} alt="" />
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

export default BannerSection;

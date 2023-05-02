import Header from "../Page/Shared/Header/Header";
import Login from "../Page/Login/Login/Login";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Main = () => {
  return (
    <div>
      <Header></Header>

      <Container>

      
        <Row>
          <Col lg={3}>
        <h2>lili</h2>
          </Col>
          <Col lg={6}>
            <h2>bimol</h2>
          </Col>
          <Col lg={3}>
    
          </Col>
        </Row>
      </Container>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Main;

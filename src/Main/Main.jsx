import BannerSection from "./Banner/BannerSection";
import CaroselSection from "./carusel/CaroselSection";
import Footer from "./Footer/Footer";
import Header from "../Page/Shared/Header/Header";
import Login from "../Page/Login/Login/Login";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Main = () => {
  return (
    <div>
      <Header></Header>

      <div className="p-4">

      
        <Row>
          <Col lg={12}>
        <CaroselSection/>
          </Col>
         
        </Row>
        <Row>
          <Col lg={12}>
        <BannerSection/>
          </Col>
         
        </Row>
      </div >
       <Footer></Footer> 
    </div>
  );
};

export default Main;

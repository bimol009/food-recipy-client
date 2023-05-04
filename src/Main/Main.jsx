import BannerSection from "./Banner/BannerSection";
import CardLoad from "../Page/Shared/CardRecipe/CardLoad";
import CardRecipe from "../Page/Shared/CardRecipe/CardRecipe";
import CaroselSection from "./carusel/CaroselSection";
import Category from "../Page/Category/Category";
import Footer from "./Footer/Footer";
import Header from "../Page/Shared/Header/Header";
import Login from "../Page/Login/Login/Login";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const Main = () => {

  // const data = useLoaderData()
  // console.log(data)
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
        <Row>
          <Col lg={12}>
        <CardRecipe/>
          </Col>
        </Row>
      </div >

      
       <Footer></Footer> 
    </div>
  );
};

export default Main;

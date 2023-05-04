import Category from "../../Page/Category/Category";
import Footer from "../Footer/Footer";
import Header from "../../Page/Shared/Header/Header";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const FoodLayout = () => {
  return (
    <div>
      <div>
        <Header></Header>

        <div className="p-4">
          <Row>
            <Col lg={12}>
           
              <Category></Category>
            </Col>
          </Row>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default FoodLayout;

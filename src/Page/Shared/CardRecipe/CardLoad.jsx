import React, { useEffect, useState } from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardLoad = ({ m }) => {

  const { chef_picture, chef_name, experience, no_of_recipe, likes, id } = m;
  return (
    <div>
      <Card >
        <Card.Img variant="top" src={chef_picture} />
        <img src="https://ibb.co/sCCWTDd" alt="" />
        <Card.Body>
          <Card.Title>{chef_name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>

          <Link to={`/category/${id}`}>
            <Button variant="info">View Recipes Button</Button>
          </Link>

      
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Chef Name : {chef_name}</ListGroup.Item>
          <ListGroup.Item>Numbers of recipes :{no_of_recipe}</ListGroup.Item>
          <ListGroup.Item>Years of experience :{experience}</ListGroup.Item>
          <ListGroup.Item>Likes : {likes}</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default CardLoad;

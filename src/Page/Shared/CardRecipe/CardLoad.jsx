import React, { useEffect, useState } from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const CardLoad = ({ m }) => {

  const { chef_picture, chef_name, experience, no_of_recipe, likes, id } = m;
  return (
    <div>
      <Card >
        
        <LazyLoadImage className="img-fluid"
                src={chef_picture}
                alt="Image Alt"
              />
       
        <Card.Body>
          <Card.Title><h3 className="text-white">{chef_name}</h3> </Card.Title>
          <Card.Text>
          <p className="text-white">  Some quick example text to build on the card title and make up the
            bulk of the cards content.</p>
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

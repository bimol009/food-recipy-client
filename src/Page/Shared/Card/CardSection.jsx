import React from "react";
import { Card } from "react-bootstrap";

const CardSection = ({recipe}) => {

    console.log(recipe)
    return (
        <div>
              <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={chef_picture} />
        <img src="https://ibb.co/sCCWTDd" alt="" />
        <Card.Body>
          <Card.Title>{chef_name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>


      
        </Card.Body>

      </Card> 
        </div>
    );
};

export default CardSection;
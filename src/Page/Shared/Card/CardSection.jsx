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
    
        <Card.Footer className="text-muted">
          <div className="d-flex icon-sec align-items-center">
            {/* <Rating
              style={{ maxWidth: 90 }}
            //   value={Math.round(rating?.number || 0)}
              readOnly
            /> */}
            <div className="flex-grow-1 ms-1">
              {/* <span>{rating?.number}</span> */}
              he
            </div>
            <div>{/* <FaEye></FaEye> {total_view} */}</div>
          </div>
        </Card.Footer>
      </Card> 
        </div>
    );
};

export default CardSection;
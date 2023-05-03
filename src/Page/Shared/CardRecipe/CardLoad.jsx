import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardLoad = ({ m }) => {
    console.log(m)
  const {chef_picture,chef_name,experience,no_of_recipe,likes,id} = m

  console.log(chef_picture)
  return (
    <div>
     
        
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={chef_picture} />
            <img src="https://ibb.co/sCCWTDd"alt="" />
            <Card.Body>
              <Card.Title>{chef_name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to={`/category/${m.id}`}><Button variant="primary">Go somewhere</Button></Link>
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
            <div>
              {/* <FaEye></FaEye> {total_view} */}
            </div>
          </div>
        </Card.Footer>
          </Card>
      
     
    </div>
  );
};

export default CardLoad;

import "./Category.css";
import BannerCategory from "../../Main/Banner/BannerCategory";
import React, { useEffect, useState } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";

const Category = () => {
  const { id } = useParams();

  // console.log(id);
  console.log("hello ")


  // const categoryRecipesLoad = useLoaderData()
  // console.log(categoryRecipesLoad)

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/categories/${id}`)
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .then((data) => setCategories(data))

      .catch((error) => console.log(error));
  }, []);

  const {
    title,
    chef_picture,
    chef_name,
    no_of_recipe,
    experience,
    likes,
    details
  } = categories;

  console.log(categories);

  return (
    <div>
      <BannerCategory></BannerCategory>

      <h1 className="text-center text-info">Chef Description</h1>

      <Card className="bg-dark text-white mt-5 mb-5">
        <Card.Img src={chef_picture} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="fs-1 fw-bold text-warning">
            {chef_name}
          </Card.Title>
          <Card.Text>
            <p className="fs-4 text-danger">{details}</p>
          </Card.Text>
          <ListGroup className="text-white">
            <h5 className="fw-bold fs-2 text-danger">
              Chef Name : {chef_name}
            </h5>
            <h5 className="fw-bold fs-2 text-danger">
              Numbers of recipes :{no_of_recipe}
            </h5>
            <h5 className="fw-bold fs-2 text-danger">
              Years of experience :{experience}
            </h5>
            <h5 className="fw-bold fs-2 text-danger">Likes : {likes}</h5>
          </ListGroup>
          <Card.Text>Last updated 3 mins ago</Card.Text>
          
        </Card.ImgOverlay>

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

      <div className="display">
        
      <Row>
          <Col lg={4}>
          <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
          </Col>
         
        </Row>
        <Row>
          <Col lg={4}>
          <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
          </Col>
         
        </Row>
        <Row>
          <Col lg={4}>
          <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src= />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Category;

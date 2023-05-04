import "@smastrom/react-rating/style.css";
import "./Category.css";
import BannerCategory from "../../Main/Banner/BannerCategory";
import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Category = () => {
  const { id } = useParams();

  // console.log(id);
  console.log("hello ");

  // const categoryRecipesLoad = useLoaderData()
  // console.log(categoryRecipesLoad)

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`https://food-recipe-server-bimol009.vercel.app/categories/${id}`)
      .then((res) => res.json())
    //   .then((data) => console.log(data))
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
    details,
    recipe_pic,
    rating
  } = categories;

  console.log(categories);

  return (
    <div>
      <BannerCategory></BannerCategory>

      <h1 className="text-center text-info fw-bold">Chef Description</h1>

      <Card className="bg-dark text-white mt-5 mb-5">
        <Card.Img src={chef_picture} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="fs-1 fw-bold text-warning">
            {chef_name}
          </Card.Title>
          <Card.Text>
            <p className="fs-4 text-danger text-show">{details}</p>
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
            <Rating
              style={{ maxWidth: 90 }}
              value={Math.round(rating?.number || 0)}
              readOnly
            />
            <div className="flex-grow-1 ms-1">
              <span>{rating?.number}</span> 
             
            </div>
        
          </div>
        </Card.Footer>
      </Card>

      <h1 className="text-center text-info fw-bold">Chef <span className="text-warning">Card</span></h1>

      <div className="display">
        <Row>
          <Col lg={4}>
            <Card >
              <Card.Img variant="top" src={recipe_pic?.first} />
              <Card.Body>
                <Card.Title className="text-center fw-bold fs-2">{recipe_pic?.recipe_pic_name}</Card.Title>
              </Card.Body>
              <button className="text-danger p-3 fs-4 fw-bolder bg-info">ADD TO FAVORITE</button>
            </Card>
          </Col>

          <Col lg={4}>
            <Card >
              <Card.Img variant="top" src={recipe_pic?.second} />
              <Card.Body>
                <Card.Title className="text-center fw-bold fs-2">{recipe_pic?.recipe_pic_name1}</Card.Title>
               
              </Card.Body>
              <button className="text-danger p-3 fs-4 fw-bolder bg-info">ADD TO FAVORITE</button>
            </Card>
          </Col>

          <Col lg={4}>
            <Card >
              <Card.Img variant="top" src={recipe_pic?.third} />
              <Card.Body>
                <Card.Title className="text-center fw-bold fs-2">{recipe_pic?.recipe_pic_name2}</Card.Title>
              </Card.Body>
              <button className="text-danger p-3 fs-4 fw-bolder bg-info">ADD TO FAVORITE</button>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Category;

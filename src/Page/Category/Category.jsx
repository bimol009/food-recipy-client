import "@smastrom/react-rating/style.css";
import "./Category.css";
import BannerCategory from "../../Main/Banner/BannerCategory";
import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { Card, Col, ListGroup, Row, Toast } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

  import 'react-toastify/dist/ReactToastify.css';

const Category = () => {
  const { id } = useParams();

  // console.log(id);
  console.log("hello ");

  // const categoryRecipesLoad = useLoaderData()
  // console.log(categoryRecipesLoad)

  const [categories, setCategories] = useState([]);
  const [favorite,SetFavorite] = useState(false);



  useEffect(() => {
    fetch(`https://food-recipe-server-bimol009.vercel.app/categories/${id}`)
      .then((res) => res.json())
    //   .then((data) => console.log(data))
      .then((data) => setCategories(data))

      .catch((error) => console.log(error));
  }, []);


  const handleFav = ()=>{
    toast('Added To Favorites !')
    SetFavorite(true)
  }

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

      <h1 className="text-center text-info fw-bold">Chef <span className="text-warning">Description</span></h1>
      <p className="text-center text-info fw-bold fs-3 mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Officiis odio nesciunt nostrum expedita suscipit ad!</p>

      <Card className="bg-dark text-white mt-5 mb-5">
        <Card.Img src={chef_picture} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="fs-1 fw-bold text-warning">
          <span className="text-white fw-bold">Name:</span>  {chef_name}
          </Card.Title>
          <Card.Text>
            <p className="fs-4 text-danger text-show"><span className="text-white fw-bold">Details:</span> {details}</p>
          </Card.Text>
          <ListGroup className="text-white">
            <h5 className="fw-bold fs-2 text-danger">
            <span className="text-white fw-bold">Name:</span> {chef_name}
            </h5>
            <h5 className="fw-bold fs-2 text-danger">
            <span className="text-white fw-bold"> Numbers of recipes :</span> {no_of_recipe}
            </h5>
            <h5 className="fw-bold fs-2 text-danger">
            <span className="text-white fw-bold">Years of experience :</span>{experience}
            </h5>
            <h5 className="fw-bold fs-2 text-danger"><span className="text-white fw-bold">Likes :</span> {likes}</h5>
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
      <p className="text-center text-info fw-bold fs-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Officiis odio nesciunt nostrum expedita suscipit ad!</p>

      <div className="display">
        <Row>
          <Col lg={4}>
            <Card >
              <Card.Img variant="top" src={recipe_pic?.first} />
              <Card.Body>
                <Card.Title className="text-center fw-bold fs-2"><h2 className="bg-info rounded">{recipe_pic?.recipe_pic_name}</h2></Card.Title>
                <h3 className="fw-bold fs-2 text-danger">Ingredients:</h3>
                {
                  recipe_pic?.ingredients?.map(ig=><li className="fs-4 ms-4 fw-bolder">{ig}</li>)
                }
              </Card.Body>
              <button onClick={handleFav} className="text-danger p-3 fs-4 fw-bolder bg-info"disabled={favorite}>ADD TO FAVORITE</button>
              <ToastContainer></ToastContainer>
            </Card>
          </Col>

          <Col lg={4}>
            <Card >
              <Card.Img variant="top" src={recipe_pic?.second} />
              <Card.Body>
                <Card.Title className="text-center fw-bold fs-2"><h2 className="bg-info rounded">{recipe_pic?.recipe_pic_name}</h2></Card.Title>
                <h3 className="fw-bold fs-2 text-danger">Ingredients:</h3>
                {
                  recipe_pic?.ingredients?.map(ig=><li className="fs-4 ms-4 fw-bolder">{ig}</li>)
                }
              </Card.Body>
              <button onClick={handleFav} className="text-danger p-3 fs-4 fw-bolder bg-info" disabled={favorite}>ADD TO FAVORITE</button>
            </Card>
          </Col>

          <Col lg={4}>
            <Card >
              <Card.Img variant="top" src={recipe_pic?.third} />
              <Card.Body>
                <Card.Title className="text-center fw-bold fs-2"><h2 className="bg-info rounded">{recipe_pic?.recipe_pic_name}</h2></Card.Title>
                <h3 className="fw-bold fs-2 text-danger">Ingredients:</h3>
                {
                  recipe_pic?.ingredients?.map(ig=><li className="fs-4 ms-4 fw-bolder">{ig}</li>)
                }
              </Card.Body>
              <button onClick={handleFav} className="text-danger p-3 fs-4 fw-bolder bg-info"disabled={favorite}>ADD TO FAVORITE</button>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Category;

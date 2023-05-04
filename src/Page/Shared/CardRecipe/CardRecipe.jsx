import "./CardRecipe.css";
import CardLoad from "./CardLoad";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const CardRecipe = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://food-recipe-server-bimol009.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2 className="text-center pt-5 fw-bold text-warning">
        {" "}
        Different Chefs in all country
      </h2>
      <p className="text-center text-warning fs-4 pb-5">
        {" "}
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <Container className="separate gap-5">
        {categories.map((m) => (
          <CardLoad key={m.id} m={m}></CardLoad>
        ))}
      </Container>
    </div>
  );
};

export default CardRecipe;

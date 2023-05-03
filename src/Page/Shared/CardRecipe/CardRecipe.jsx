import "./CardRecipe.css";
import CardLoad from "./CardLoad";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const CardRecipe = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2 className="text-center p-5 fw-bold">All Loader {categories.length}</h2>
      <Container className="separate gap-5">
        {categories.map((m) => (
          <CardLoad key={m.id} m={m}></CardLoad>
        ))}
      </Container>
    </div>
  );
};

export default CardRecipe;

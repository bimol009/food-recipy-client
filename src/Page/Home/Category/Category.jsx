import Card from "../../Shared/Card/Card";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Category = () => {

   

    // const {id}=useParams();

    // const categoryRecipesLoad = useLoaderData();

    // console.log(categoryRecipesLoad)

    return (
        <div>
            {/* {id && <h2> category : {categoryRecipesLoad.length}</h2>}
            {
                categoryRecipesLoad.map(recipes=><Card key={recipes._id} recipes={recipes}></Card>)
            } */}
        </div>
    );
};

export default Category;
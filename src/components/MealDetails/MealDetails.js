import React from "react";
import "./MealDetails.css";
import Ingredients from "../Ingredients/Ingredients";
const MealDetails = ({ mealDetails }) => {
  return (
    <div className="tc meal-desc">
      <h1 className="f2">{mealDetails.name}</h1>
      <img src={mealDetails.photoSrc} width="350px" height="350px" alt="asd" />
      <div className="desc tc ph4 pv3 br3 ba b--dashed bw2">
        <h2 className="f3">{mealDetails.category}</h2>
        <h4 className="f3">{mealDetails.area}</h4>
      </div>
      <div className="instructions f4">{mealDetails.instructions}</div>
      <Ingredients ingredients={mealDetails.ingredients}/>
    </div>
  );
};

export default MealDetails;

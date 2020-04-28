import React from "react";
import "./Meal.css";
const Meal = ({id, viewMealDetails, image, name }) => {

  return (
    <div className="meal"  onClick={viewMealDetails}>
      <img src={image} alt={name} />
      <div className="meal-info" data-id={`${id}`}>{name}</div>
    </div>
  );
};

export default Meal;

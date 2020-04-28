import React from "react";
import Meal from "../Meal/Meal";
import "./MealGrid.css";


const MealGrid = ({meals, viewMealDetails}) => {
  let viewMeals;
  if(meals.length > 0) {
    viewMeals = meals.map(meal => {
      return (
        <Meal key={meal.idMeal} id={meal.idMeal} viewMealDetails={viewMealDetails}  image={meal.strMealThumb} name={meal.strMeal} />
      );
    });
  }
  
  return <div className="meal-grid">{viewMeals}</div>;
};

export default MealGrid;

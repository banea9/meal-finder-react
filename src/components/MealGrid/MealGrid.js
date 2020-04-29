import React from "react";
import Meal from "../Meal/Meal";
import "./MealGrid.css";

const MealGrid = ({ meals, viewMealDetails }) => {
  return (
    <div className="meal-grid">
      {meals !== null
        ? meals.map(meal => {
            return (
              <Meal
                key={meal.idMeal}
                id={meal.idMeal}
                viewMealDetails={viewMealDetails}
                image={meal.strMealThumb}
                name={meal.strMeal}
              />
            );
          })
        : null}
    </div>
  );
};

export default MealGrid;

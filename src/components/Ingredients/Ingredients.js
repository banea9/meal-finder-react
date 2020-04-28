import React from "react";

const Ingredients = ({ ingredients }) => {
  let ingredientsList;
  if (ingredients) {
    ingredientsList = ingredients.map((ing, i) => {
      let [ingr, amount] = ing.split(" - ");
      return (
        <li className="list-item" key={i}>
          ${ingr}: ${amount}
        </li>
      );
    });
  }

  return (
    <div>
      <ul>{ingredientsList}</ul>
    </div>
  );
};

export default Ingredients;

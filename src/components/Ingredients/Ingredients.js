import React from "react";

const Ingredients = ({ ingredients }) => {
  let ingredientsList;
  if (ingredients) {
    ingredientsList = ingredients.map((ing, i) => {
      let [ingr, amount] = ing.split(" - ");
      return (
        <li
          className="list-item br3 bn"
          style={{
            display: "inline-block",
            margin: "3px",
            padding: "3px 5px",
            backgroundColor: "#fff",
            color: "#000"
          }}
          key={i}
        >
          {ingr}: {amount}
        </li>
      );
    });
  }

  return (
    <div>
      <ul
        className="mv3"
        style={{ width: "70%", listStyle: "none", margin: "10px auto" }}
      >
        {ingredientsList}
      </ul>
    </div>
  );
};

export default Ingredients;

import React from "react";
const Recipe = props => {
  const directions = props.recipe.directions.map((el, i) => (
    <li key={i}>{el}</li>
  ));
  const ingredients = props.recipe.ingredients.map((el, i) => (
    <li key={i}>{el}</li>
  ));
  return (
    <div>
      <div>
        <h2 className="title">{props.recipe.title}</h2>
        <i />
      </div>
      <div>
        <h4>Ingredients:</h4>
        <p className="ingredients">{ingredients}</p>
        <h4>Directions:</h4>
        <p className="directions">{directions}</p>
      </div>
    </div>
  );
};
export default Recipe;

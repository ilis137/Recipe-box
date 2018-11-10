import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
  text-align: center;
  font-size: 36px;
  color: #b71c1c;
`;
const StyledSubTitle = styled.h4`
  font-size: 24px;
  color: #b71c1c;
`;
const StyledPoints = styled.li`
  color: #0097a7;
  font-size: 18px;
`;
const RecipePane = props => {
  const directions = props.recipe.directions.map((el, i) => (
    <StyledPoints key={i}>{el}</StyledPoints>
  ));
  const ingredients = props.recipe.ingredients.map((el, i) => (
    <StyledPoints key={i}>{el}</StyledPoints>
  ));
  return (
    <div>
      <div>
        <StyledTitle>{props.recipe.title}</StyledTitle>
        <i />
      </div>
      <div>
        <StyledSubTitle>Ingredients:</StyledSubTitle>
        <p className="ingredients">{ingredients}</p>
        <StyledSubTitle>Directions:</StyledSubTitle>
        <p className="directions">{directions}</p>
      </div>
    </div>
  );
};
export default RecipePane;

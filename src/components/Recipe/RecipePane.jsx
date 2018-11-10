import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const StyledHeading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledTitle = styled.h2`
  text-align: center;
  justify-self: center;
  font-size: 36px;
  color: #b71c1c;
`;
const StyledSubTitle = styled.h4`
  font-size: 24px;
  color: #b71c1c;
  margin: 3px 0;
`;
const StyledPoints = styled.li`
  color: #0097a7;
  font-size: 18px;
  margin: 5px 0;
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
      <StyledHeading>
        <StyledTitle>{props.recipe.title.replace(/-/g, " ")}</StyledTitle>
        <FontAwesomeIcon icon={faEdit} />
      </StyledHeading>
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

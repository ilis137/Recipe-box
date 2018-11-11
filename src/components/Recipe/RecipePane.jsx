import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const StyledIconBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 8px;
`;
const StyledIcon = styled.div`
  color: #b71c1c;
  font-size: 28px;
  padding: 5px;
`;
const StyledTitle = styled.h2`
  text-align: center;
  font-size: 36px;
  color: #b71c1c;
  margin: 5px 0;
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
      <StyledIcon>
        <FontAwesomeIcon icon={faPlusSquare} />
      </StyledIcon>
      <div>
        <StyledTitle>{props.recipe.title.replace(/-/g, " ")}</StyledTitle>
      </div>
      <div>
        <StyledSubTitle>Ingredients:</StyledSubTitle>
        <p className="ingredients">{ingredients}</p>
        <StyledSubTitle>Directions:</StyledSubTitle>
        <p className="directions">{directions}</p>
      </div>
      <StyledIconBar>
        <StyledIcon>
          <FontAwesomeIcon icon={faTrashAlt} />
        </StyledIcon>
        <StyledIcon>
          <FontAwesomeIcon icon={faEdit} />
        </StyledIcon>
      </StyledIconBar>
    </div>
  );
};
export default RecipePane;

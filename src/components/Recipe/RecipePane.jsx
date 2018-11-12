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
  transition: all 0.3s ease-out;

  :hover {
    cursor: pointer;
    color: #ef5350;
  }
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
  let recipe = "";
  if (props.recipe) {
    recipe = (
      <>
        <div>
          <StyledTitle>{props.recipe.title.replace(/-/g, " ")}</StyledTitle>
        </div>
        <div>
          <StyledSubTitle>Ingredients:</StyledSubTitle>
          <p className="ingredients">
            {props.recipe.ingredients.map((el, i) => (
              <StyledPoints key={i}>{el}</StyledPoints>
            ))}
          </p>
          <StyledSubTitle>Directions:</StyledSubTitle>
          <p className="directions">
            {props.recipe.directions.map((el, i) => (
              <StyledPoints key={i}>{el}</StyledPoints>
            ))}
          </p>
        </div>
        <StyledIconBar>
          <StyledIcon>
            <FontAwesomeIcon icon={faTrashAlt} onClick={props.delete} />
          </StyledIcon>
          <StyledIcon>
            <FontAwesomeIcon icon={faEdit} onClick={props.edit} />
          </StyledIcon>
        </StyledIconBar>
      </>
    );
  }
  return (
    <div>
      <StyledIcon>
        <FontAwesomeIcon icon={faPlusSquare} />
      </StyledIcon>
      {recipe}
    </div>
  );
};
export default RecipePane;

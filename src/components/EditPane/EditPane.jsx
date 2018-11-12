import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 90%;
  height: 30px;
  border-radius: 3px;
  border: 1px solid #90caf9;
  outline: none;
  background: #e3f2fd;
  padding: 5px;
  box-sizing: border-box;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
const InputContainer = styled.div`
  padding: 3px 0;
`;

const StyledTitle = styled.div`
  font-size: 30px;
  text-align: center;
  color: #b71c1c;
`;
const StyledTitleInput = styled(StyledInput)`
  width: 100%;
`;

const EditPane = props => {
  return (
    <div>
      <StyledTitle>Title</StyledTitle>
      <StyledTitleInput type="text" defaultValue={props.recipe.title} />
      <StyledTitle>ingredients</StyledTitle>
      {props.recipe.ingredients.map((ingredient, i) => {
        return (
          <InputContainer key={i + 1}>
            <span>{i + 1}. </span>
            <StyledInput type="text" defaultValue={ingredient} />
          </InputContainer>
        );
      })}
      <StyledTitle>Directions</StyledTitle>
      {props.recipe.directions.map((direction, i) => {
        return (
          <InputContainer key={i + 1}>
            <span>{i > 10 ? i + 1 + ". " : i + 1 + ".            "} </span>
            <StyledInput type="text" defaultValue={direction} />
          </InputContainer>
        );
      })}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px 0",
          width: "80%",
          margin: "0 auto"
        }}
      >
        <button
          style={{
            backgroundColor: "#d9534f",
            fontWeight: "bold",
            border: "1px solid #d43f3a",
            cursor: "pointer",
            outline: "none",
            borderRadius: "10px",
            fontSize: "20px",
            padding: "5px 15px",
            color: "white",
            marginRight: "10px"
          }}
        >
          DELETE
        </button>
        <button
          style={{
            backgroundColor: "#5cb85c",
            fontWeight: "bold",
            border: "1px solid #4cae4c",
            cursor: "pointer",
            outline: "none",
            borderRadius: "10px",
            fontSize: "20px",
            padding: "5px 15px",
            color: "white"
          }}
        >
          EDIT
        </button>
      </div>
    </div>
  );
};

export default EditPane;

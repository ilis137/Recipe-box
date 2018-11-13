import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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
const AddInput = styled.div`
  display: flex;
  justify-content: center;
  font-size: 32px;
  align-items: center;
  margin: auto;
  cursor: pointer;
  color: #00c853;
  background-color: #90caf9;
  transition: all 0.3s ease-out;
  width: 80%;
  :hover {
    background-color: #64b5f6;
  }
`;
const AddPane = props => {
  return (
    <div>
      <StyledTitle>Title</StyledTitle>
      <StyledTitleInput type="text" />
      <StyledTitle>Ingredients</StyledTitle>
      <InputContainer>
        <span>. </span>
        <StyledInput type="text" />
      </InputContainer>
      <AddInput>
        <FontAwesomeIcon icon={faPlus} />
      </AddInput>
      <StyledTitle>Directions</StyledTitle>
      <InputContainer>
        <span>. </span>
        <StyledInput type="text" />
      </InputContainer>
      <AddInput>
        <FontAwesomeIcon icon={faPlus} />
      </AddInput>
    </div>
  );
};

export default AddPane;

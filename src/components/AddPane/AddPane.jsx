import React, { Component } from "react";
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
class AddPane extends Component {
  state = {
    noOfIngredients: 1,
    noOfDirections: 1
  };
  handleAdd = () => {
    this.props.add();
    this.setState({
      noOfIngredients: 1,
      noOfDirections: 1
    });
  };
  handleIncreaseIngredients = () => {
    const NOI = this.state.noOfIngredients;
    this.setState({
      ...this.state,
      noOfIngredients: NOI + 1
    });
  };

  handleIncreaseDirections = () => {
    const NOD = this.state.noOfDirections;
    this.setState({
      ...this.state,
      noOfDirections: NOD + 1
    });
  };
  handleCancel = () => {
    this.setState({
      noOfIngredients: 1,
      noOfDirections: 1
    });
    this.props.cancel();
  };
  render() {
    let ingredientInput = [];
    for (let i = 0; i < this.state.noOfIngredients; i++) {
      ingredientInput.push(
        <InputContainer key={i + 1}>
          <span>.{i + 1} .</span>
          <StyledInput type="text" className="addIngredients" />
        </InputContainer>
      );
    }

    let directionsInput = [];
    for (let i = 0; i < this.state.noOfDirections; i++) {
      directionsInput.push(
        <InputContainer key={i + 1}>
          <span>{i + 1} .</span>
          <StyledInput type="text" className="addDirections" />
        </InputContainer>
      );
    }
    return (
      <div>
        <StyledTitle>Title</StyledTitle>
        <StyledTitleInput type="text" className="addTitle" />
        <StyledTitle>Ingredients</StyledTitle>

        {ingredientInput}
        <AddInput>
          <FontAwesomeIcon
            icon={faPlus}
            onClick={this.handleIncreaseIngredients}
          />
        </AddInput>
        <StyledTitle>Directions</StyledTitle>

        {directionsInput}

        <AddInput>
          <FontAwesomeIcon
            icon={faPlus}
            onClick={this.handleIncreaseDirections}
          />
        </AddInput>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px"
          }}
        >
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
            onClick={this.handleAdd}
          >
            Add Recipe
          </button>
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
              color: "white"
            }}
            onClick={this.handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default AddPane;

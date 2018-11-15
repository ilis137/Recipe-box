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
    title: "",
    ingredients: [""],
    directions: [""]
  };

  handleAdd = () => {
    console.log(this.state);
    this.props.add(this.state);
    this.setState({
      ...this.state,
      title: "",
      ingredients: [""],
      directions: [""]
    });
  };
  handleIncreaseIngredients = () => {
    let ingredients = this.state.ingredients;
    ingredients.push("");
    this.setState({
      ...this.state,
      ingredients
    });
  };

  handleIncreaseDirections = () => {
    let directions = this.state.directions;
    directions.push("");
    this.setState({
      ...this.state,
      directions
    });
  };
  handleChangeIngredient = e => {
    const index = e.target.dataset.key;
    let ingredients = this.state.ingredients;
    ingredients[index] = e.target.value;
    console.log(ingredients);
    this.setState({
      ...this.state,
      ingredients
    });
  };
  handleChangeDirection = e => {
    const index = e.target.dataset.key;
    let directions = this.state.directions;

    directions[index] = e.target.value;
    console.log(directions);
    this.setState({
      ...this.state,
      directions
    });
  };
  handleChangeTitle = e => {
    const title = e.target.value;
    console.log(title);
    this.setState({
      ...this.state,
      title
    });
  };
  handleCancel = () => {
    this.setState({
      title: "",
      ingredients: [""],
      directions: [""]
    });
    this.props.cancel();
  };
  render() {
    let ingredientInput = [];
    ingredientInput = this.state.ingredients.map((ingredient, i) => {
      return (
        <InputContainer key={i + 1}>
          <span>{i + 1} .</span>
          <StyledInput
            type="text"
            className="addIngredients"
            value={ingredient}
            data-key={i}
            onChange={e => this.handleChangeIngredient(e)}
          />
        </InputContainer>
      );
    });

    let directionsInput = [];
    directionsInput = this.state.directions.map((direction, i) => {
      return (
        <InputContainer key={i + 1}>
          <span>{i + 1} .</span>
          <StyledInput
            type="text"
            className="addDirections"
            data-key={i}
            value={direction}
            onChange={this.handleChangeDirection}
          />
        </InputContainer>
      );
    });
    return (
      <div>
        <StyledTitle>Title</StyledTitle>
        <StyledTitleInput
          type="text"
          className="addTitle"
          onChange={this.handleChangeTitle}
          value={this.state.title}
        />
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

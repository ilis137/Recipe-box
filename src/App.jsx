import React, { Component } from "react";
import RecipePane from "./components/Recipe/RecipePane";
import Search from "./components/Search/Search";
import "./App.css";
import styled from "styled-components";
import Modal from "./components/Modal/Modal";
import BackDrop from "./components/BackDrop/BackDrop";

const LSK = "recipe_box_key";
const recipeIndex = [
  {
    title: "Artichoke-Pasta",
    ingredients: [
      "2 tablespoons butter",
      "2 cloves garlic, minced",
      "1 cup heavy cream",
      "3/4 teaspoon salt",
      "1 teaspoon fresh-ground black pepper",
      "2 1/2 cups canned, drained artichoke hearts (two 14-ounce cans), rinsed and cut into halves or quarters",
      "3/4 pound fusilli",
      "1/2 cup grated Parmesan cheese",
      "2 tablespoons chopped chives, scallion tops, or parsley"
    ],
    directions: [
      "In a medium saucepan, melt the butter over moderately low heat. Add the garlic and cook for 30 seconds. Stir in the cream, salt, pepper, and artichoke hearts. Cook until just heated through, about 3 minutes.",
      "In a large pot of boiling, salted water, cook the fusilli until just done, about 13 minutes. Drain the pasta and toss with the cream sauce, Parmesan, and chives."
    ]
  },
  {
    title: "Garlic-Chicken",
    ingredients: [
      "3 tablespoons butter",
      "1 teaspoon seasoning salt",
      "1 teaspoon onion powder ",
      "4 skinless, boneless chicken breast halves",
      "2 teaspoons garlic powder"
    ],
    directions: [
      "Melt butter in a large skillet over medium high heat.",
      "Add chicken and sprinkle with garlic powder, seasoning salt and onion powder.",
      "Saute about 10 to 15 minutes on each side, or until chicken is cooked through and juices run clear."
    ]
  },
  {
    title: "Easy-Chocolate-Pie",
    ingredients: [
      "1 (12 ounce) can evaporated milk",
      "1 (5.9 ounce) package chocolate instant pudding mix",
      "1 (6.5 ounce) can whipped cream",
      "1/2 cup miniature semi-sweet chocolate chips (optional)",
      "1 (9 inch) graham cracker pie crust",
      "Another can of whipped cream for garnish (optional)"
    ],
    directions: [
      "Pour milk into medium bowl. Add dry pudding mix; beat with wire whisk until well blended and mixture just begins to thicken. Stir in half of the chocolate chips.",
      "Add contents of whipped cream can; stir gently but quickly until well blended. Pour into crust; cover.",
      "Refrigerate 6 hours, or until set. Cut into 8 slices to serve. Garnish with additional whipped cream and remaining chocolate chips, if desired."
    ]
  },
  {
    title: "Lime-Chicken-Tacos",
    ingredients: [
      "1 1/2 pounds skinless, boneless chicken breast meat - cubed",
      "1/8 cup red wine vinegar",
      "1/2 lime, juiced",
      "1 teaspoon white sugar",
      "1/2 teaspoon salt",
      "1/2 teaspoon ground black pepper",
      "2 green onions, chopped",
      "2 cloves garlic, minced",
      "1 teaspoon dried oregano",
      "10 (6 inch) corn tortillas",
      "1 tomato, diced",
      "1/4 cup shredded lettuce",
      "1/4 cup shredded Monterey Jack cheese",
      "1/4 cup salsa"
    ],
    directions: [
      "Saute chicken in a medium saucepan over medium high heat for about 20 minutes. Add vinegar, lime juice, sugar, salt, pepper, green onion, garlic and oregano. Simmer for an extra 10 minutes.",
      "Heat an iron skillet over medium heat. Place a tortilla in the pan, warm, and turn over to heat the other side. Repeat with remaining tortillas. Serve lime chicken mixture in warm tortillas topped with tomato, lettuce, cheese and salsa."
    ]
  },
  {
    title: "Artichoke-Dip",
    ingredients: [
      "1 8oz package soft cream cheese",
      "4oz mayonnaise",
      "4oz sour cream",
      "1/4 Cup Fresh Grated Parmesan Cheese",
      "1/4 Cup Fresh Grated Romano Cheese",
      "2 eggs",
      "3/4 Cup dairy sour cream",
      "1 16oz can artichoke hearts",
      "1/4 Cup fresh chopped chives",
      "1 tbs fresh minced garlic"
    ],
    directions: [
      "Soften the cream cheese before mixing.",
      "Rinse well, then dice the artichokes into small ½” size pieces.",
      "Into a mixing bowl place the softened cream cheese. Mix in the mayonnaise, sour cream, the Parmesan and Romano cheese, artichokes and garlic.",
      "When the mixture is fairly well blended, spoon into a 9” round glass pie dish.",
      "Set Oven to Bake at 350 degrees.",
      "Place un-covered dish into oven for 20 – 25 minutes until the edges appear slightly golden and mixture is bubbling at the edge.",
      "Remove and sprinkle chopped chives on top and let cool about 5 minutes before serving.",
      "Enjoy!"
    ]
  }
];
if (localStorage.getItem(LSK) == null) {
  localStorage.setItem(LSK, JSON.stringify(recipeIndex));
}

const StyledApp = styled.div`
  width: 500px;
  margin: 10px auto;
  box-shadow:0 4px 5px #ccc;
  border:solid 1px ##bbdefb
  padding:10px;
  box-sizing:border-box;
  background:#90caf9;
  border-radius: 5px;
  z-index:20;
`;
const StyledSearch = styled(Search)`
  width: 100%;
  height: 30px;
  border-radius: 5px;
  outline: none;
  background: #e3f2fd;
  color:#b71c1c;
  }
`;

class App extends Component {
  state = {
    recipes: JSON.parse(localStorage.getItem(LSK)),
    currentRecipe: "",
    showModal: false
  };

  handleSearch = e => {
    this.setState({ currentRecipe: e.target.value });
  };

  handleEdit = () => {
    this.setState(prevstate => {
      return { showModal: !prevstate.showModal };
    });
  };

  handleDeleteRecipe = e => {
    const recipes = this.state.recipes.filter(recipe => {
      return recipe.title !== this.state.currentRecipe;
    });
    this.setState({
      recipes
    });
    localStorage.setItem(LSK, JSON.stringify(recipes));
  };
  handleCanceled = () => {
    this.setState(prevstate => {
      return { showModal: !prevstate.showModal };
    });
  };
  render() {
    const currentRecipe = this.state.recipes.find(el => {
      return el.title === this.state.currentRecipe.replace(/ /g, "-");
    });
    console.log(currentRecipe);
    return (
      <>
        <BackDrop show={this.state.showModal} canceled={this.handleCanceled} />
        {/* <BackDrop/>*/} <Modal show={this.state.showModal} />
        <StyledApp>
          <StyledSearch
            hitSearch={this.handleSearch}
            recipes={this.state.recipes}
          />
          <RecipePane
            recipe={currentRecipe}
            delete={this.handleDeleteRecipe}
            edit={this.handleEdit}
          />
        </StyledApp>
      </>
    );
  }
}

export default App;

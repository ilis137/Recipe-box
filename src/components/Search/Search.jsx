import React from "react";
const Search = props => {
  console.log(props.recipes[1]);
  const items = props.recipes.map(item => (
    <option value={item.title.replace("-", " ")}>
      {item.title.replace(/-/g, " ")}
    </option>
  ));
  return (
    <form className="SelectRecipe" onChange={e => props.hitSearch(e)}>
      <label htmlFor="recipeName" />
      <select name="recipeName" id="recipeName">
        {items}
      </select>
    </form>
  );
};
export default Search;

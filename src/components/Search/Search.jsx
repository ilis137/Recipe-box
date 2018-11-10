import React from "react";
const Search = props => {
  console.log(props.recipes[1]);
  const items = props.recipes.map((item, index) => (
    <option
      key={index}
      value={item.title.replace(/-/g, " ")}
      selected={index === 1 ? true : false}
    >
      {item.title.replace(/-/g, " ")}
    </option>
  ));
  return (
    <form className="SelectRecipe" onChange={e => props.hitSearch(e)}>
      <label htmlFor="recipeName" />
      <select className={props.className} name="recipeName" id="recipeName">
        {items}
      </select>
    </form>
  );
};
export default Search;

import React from "react";

function CategoryFilter({onCategoryChange}) {

  const handleChange = (e) => onCategoryChange(e.target.value)

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      <select name="category" onChange={handleChange}>
          <option value="All">All</option>
          <option value="Code">Code</option>
          <option value="Food">Food</option>
          <option value="Money">Money</option>
          <option value="Misc">Misc</option>
      </select>
    </div>
  );
}

export default CategoryFilter;

import React from "react";

function Filter({ setFilter }) {
  return (
    <div className="filter-container">
      <label>Filter by Category: </label>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Shopping">Shopping</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
}

export default Filter;

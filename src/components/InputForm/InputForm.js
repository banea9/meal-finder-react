import React from "react";
import "./InputForm.css";
const InputForm = ({ onSearchChange, onMealSearch, onRandomSearch }) => {
  return (
    <div className="container">
      <div className="search">
        <label for="searchInput"></label>
        <input
          id="searchInput"
          onChange={onSearchChange}
          type="text"
          placeholder="Search for meals"
        />

        <button
          aria-label="search-btn"
          onClick={onMealSearch}
          className="search-btn"
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
      <button
        aria-label="random-btn"
        onClick={onRandomSearch}
        className="random-btn"
      >
        <i className="fas fa-random"></i>
      </button>
    </div>
  );
};

export default InputForm;

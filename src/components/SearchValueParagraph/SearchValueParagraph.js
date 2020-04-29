import React from "react";

const SearchValueParagraph = ({ searchValue, meals }) => {
  if (meals === null) {
    return <p className="f3 mv3">No results found, try again...</p>;
  }
  return <p className="f3 mv3">Searching for "{searchValue}"</p>;
};

export default SearchValueParagraph;

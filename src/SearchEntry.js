import React from "react";

const SearchEntry = props => (
  <p>
    You searched for jokes containing:
    <br /> {props.searchValue}
  </p>
);

export default SearchEntry;

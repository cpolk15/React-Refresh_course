import React from "react";

const SearchForm = props => {
  const onSubmit = event => {
    event.preventDefault();
    props.onFormSubmit();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Input search here"
        onChange={event => props.onValueChange(event.target.value)}
      />
      <button disabled={props.isSearchingJokes}>Search</button>
      <button onClick={props.imFeelingFunny} disabled={props.isSearchingJokes}>
        I'm Feeling Funny!
      </button>
    </form>
  );
};

export default SearchForm;

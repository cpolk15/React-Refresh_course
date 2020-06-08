import React from "react";

const JokesList = props => {
  const renderJokes = object => {
    return (
      <ul>
        {object.map(item => (
          <li key={item.id}>{item.joke}</li>
        ))}
      </ul>
    );
  };

  return renderJokes(props.JokeArray);
};

export default JokesList;

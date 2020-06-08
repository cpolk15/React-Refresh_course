import React from "react";
import "./styles.css";

export class App extends React.Component {
  joke = "hoe";

  constructor() {
    super();

    this.onTellJoke = this.onTellJoke.bind(this);
  }

  onTellJoke() {
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        this.joke = json.joke;
        console.log("joke: ", this.joke);
      });
  }

  render() {
    console.log("--- RENDER ---");
    return (
      <div>
        <button onClick={this.onTellJoke}> Tell me a joke! </button>
        <p>joke</p>
      </div>
    );
  }
}

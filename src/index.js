import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

//imported Compnents
import SearchForm from "./SearchForm";
import SearchEntry from "./SearchEntry";
import JokesList from "./JokesList";

//COMPONENT STARTS HERE
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerms: "",
      joke: null,
      jokes: [],
      isFetchingJoke: false
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.searchJokes = this.searchJokes.bind(this);
  }

  //Function that sends HTTP request for jokes, either 20 for
  //search or 1 joke for "I'm feeling funny".
  searchJokes(limit = 20) {
    this.setState({ isFetchingJoke: true });

    fetch(
      `https://icanhazdadjoke.com/search?term=${
        this.state.searchTerms
      }&limit=${limit}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(json => {
        const jokes = json.results;
        this.setState({ jokes: jokes, isFetchingJoke: false });
      });
  }

  //function made to monitor updates in user's search value
  //changes state value of SearchTerms
  onSearchChange(value) {
    this.setState({ searchTerms: value });
  }

  render() {
    return (
      <div className="App">
        <SearchForm
          onFormSubmit={this.searchJokes}
          onValueChange={this.onSearchChange}
          isSearchingJokes={this.state.isFetchingJoke}
          imFeelingFunny={() => this.searchJokes(1)}
        />

        <SearchEntry searchValue={this.state.searchTerms} />

        {this.state.isFetchingJoke ? (
          "Loading jokes..."
        ) : (
          <JokesList JokeArray={this.state.jokes} />
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

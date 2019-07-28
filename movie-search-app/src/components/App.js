import React, { Component } from "react";
import "./App.css";
import logo from "../static/svgs/logo.svg";
import MoviesResults from "./MovieResults/MovieResults";
import SearchForm from "./SearchForm/SearchForm";
import MoviesStore from "../stores/MoviesStore";

class App extends Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this.getAppState = this.getAppState.bind(this);
    this.state = this.getAppState();
  }

  getAppState() {
    return {
      movies: MoviesStore.getMovieResults()
    };
  }

  componentDidMount() {
    MoviesStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    MoviesStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(this.getAppState);
  }

  render() {
    var movieResults = "";
    if (this.state.movies === "") {
      movieResults = "";
    } else {
      movieResults = <MoviesResults movies={this.state.movies} />;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div className="container-fluid">
          <div className="album py-5 bg-light">
            <h1>Movies</h1>
            <div className="container">
              <SearchForm />
            </div>
            <div className="container pull-down">{movieResults}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

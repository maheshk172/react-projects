import React, { Component } from "react";
import Actions from "../../actions/Actions";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    let movie = {
      title: this.refs.title.value
    };
    Actions.searchMovies(movie);
  }
  render() {
    return (
      <div className="search-form">
        <h2 className="text-center">search for a movie</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              ref="title"
              placeholder="search..."
            />
          </div>
          <button className="btn btn-primary">search</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;

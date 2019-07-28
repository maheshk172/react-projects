import React from "react";
import Movie from "./Movie";

function MovieResults(props) {
  return (
    <div>
      <h4>Results:</h4>
      <ul className="list-group">
        {props.movies.map(function(movie, i) {
          return <Movie movie={movie} key={i} />;
        })}
      </ul>
    </div>
  );
}

export default MovieResults;

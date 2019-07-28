import React from "react";

function Movie(props) {
  return (
    <li className="list-group-item">
      <p>
        {props.movie.Title} - {props.movie.Year}
      </p>
      <img className="thumbnail" alt="poster" src={props.movie.Poster} />
    </li>
  );
}

export default Movie;

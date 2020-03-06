import React from "react";
import PropTypes from "prop-types";
const MovieItem = ({ movie }) => {
  return (
    <div className="checkboxForm">
      <p>
        <h1>
          <em>
            {movie.title}
          </em>
        </h1>
      </p>
  <p>{movie.description}</p>
      <div class="masonry">
        <div class="item">
          <img src={movie.imageUrl} alt=" unavailable, please reload"></img>
        </div>
      </div>
      <p>
        <h4>{movie.genre}</h4>
      </p>
    </div>
  );
};
// PropTypes
MovieItem.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieItem;

import React from "react";
import MovieItem from "./MovieItem";
import PropTypes from "prop-types";

const Movies = ({ movies }) => {
  return movies.map(movie => <MovieItem key={movie.id} movie={movie} />);
};
// PropTypes
Movies.propTypes = {
  movies: PropTypes.array.isRequired
};

export default Movies;

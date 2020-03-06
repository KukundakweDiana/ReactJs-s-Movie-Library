import React, { Component } from "react";
import PropTypes from "prop-types";
import "./COMPONENTS/MovieItem";
import MovieItem from "./MovieItem.js";
export class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      users: [
        {
          title: "",
          director: "",
          genre: "",
          releaseDate: "",
          description: "",
          trailer: "",
          imageUrl: ""
        }
      ]
    };
  }
  componentDidMount() {
    fetch("https://movi-lib.herokuapp.com/api/v1/movies")
      .then(results => {
        return results.json();
      })
      .then(data => {
        console.log(data);

        this.setState({ users: Response.data, isFetching: false });
      })
      .catch(e => {
        console.log(e);
        this.setState({ ...this.state, isFetching: false });
      });
  }

  render() {
    return;
    {
      this.state.movies.map((movie, index) => {
        return (
          <div key={index}>
            {" "}
            <MovieItem movie={movie} />{" "}
          </div>
        );
      });
    }
  }
}
// Proptypes
AddMovie.propTypes = {
  movie: PropTypes.object.isRequired
};
export default AddMovie;

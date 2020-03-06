import React, { Component } from "react";
import PropTypes from "prop-types";

import "./COMPONENTS/MovieItem";
export class GetMovie extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    fetch("https://movi-lib.herokuapp.com/api/v1/movies/{{movie_id}}")
      .then(results => {
        return results.json();
      })
      .then(data => {
        console.log(data);

        this.setState({Response , isFetching: false });
      })
      .catch(e => {
        console.log(e);
        this.setState({ ...this.state, isFetching: false });
      });
  }
  render() {
    return (
      <div>
         {/* <MovieItem />  */}
        {this.state.movies.map((movie_id, index) => {
          return (
            <div key={index}>
              {" "}
              <GetMovie movie_id={movie_id} />{" "}
            </div>
          );
        })}
      </div>
    );
  }
}
// PropTypes
GetMovie.propTypes = {
  movie: PropTypes.object.isRequired
};
export default GetMovie;

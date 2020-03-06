import React, { Component } from "react";
import PropTypes from "prop-types";
import "./COMPONENTS/MovieItem";

export class DeleteMovie extends Component {
  constructor(props) {
    super(props);
  }
  componentWillUnmount(){
 fetch ("https://movi-lib.herokuapp.com/api/v1/movies/{{movie_id}}")
 .then(results=>{
   return results.json()
 })
 .then (data=>{
   this.setState({Response});
 });
  }
  getStyle = () => {
    return {
      textDecoration: this.props.movie.deleted ? "line-through" : "none"
    };
  };
  render() {
    return <div></div>;
  }
}
// PropTypes
DeleteMovie.propTypes = {
  movie: PropTypes.object.isRequired
};
export default DeleteMovie;

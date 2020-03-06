// import React, { Component } from "react";
// import PropTypes from "prop-types";

// import "./COMPONENTS/MovieItem";
// import MovieItem from "./MovieItem.js";
// export class UpdateMovie extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       updates: [
//         {
//           title: "",
//           director: "",
//           genre: "",
//           releaseDate: "",
//           description: "",
//           trailer: "",
//           imageUrl: ""
//         }
//       ]
//     };
//   }
//   componentDidUpdate() {
//     fetch("https://movi-lib.herokuapp.com/api/v1/movies/{{movie_id}}")
//       .then(results => {
//         return results.json();
//       })
//       .then(data => {
//         this.setState({ updates: Response.data, isFetching: false });
//       });
//   }
//   render() {
//     return;
//     <div>
//       <MovieItem />
//       {this.state.movies.map((movie_id, index) => {
//         return (
//           <div key={index}>
//             {" "} /
//             <UpdateMovie movie_id={movie_id} />{" "}
//           </div>
//         );
//       })}
//     </div>;
//   }
// }
// // PropTypes
// UpdateMovie.propTypes = {
//   movie: PropTypes.object.isRequired
// };
// export default UpdateMovie;

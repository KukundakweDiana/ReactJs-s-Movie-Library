import React, { Component } from "react";
import Movies from "./COMPONENTS/Movies";
import DeleteMovie from "./COMPONENTS/DeleteMovie";
import GetMovie from "./COMPONENTS/GetMovie";
import UpdateMovie from "./COMPONENTS/UpdateMovie";
import AddMovie from "./COMPONENTS/AddMovie";
import MovieItem from "./COMPONENTS/MovieItem";
// import AddMovie from "./COMPONENTS/AddMovie";
import "./App.css";
import "./index.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }
  // component abstraction between parent and children
  render = () => this.props.children(this.state);
  componentDidMount() {
    fetch("https://movi-lib.herokuapp.com/api/v1/movies")
      .then(results => {
        return results.json();
      })
      .then(data => {
        console.log(data);

        this.setState({ movies: data.data });
        //console.log("state", this.state.movies);
      });
  }
  render() {
    return (
      <div className="App">
        <Movies />
        <GetMovie />
        <UpdateMovie />
        <AddMovie />
        <DeleteMovie />
        {this.state.movies.map((movie, index) => {
          return (
            <div key={index}>
              {" "}
              <MovieItem movie={movie} />{" "}
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;

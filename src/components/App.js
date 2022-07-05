import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import AddMovieForm from "./AddMovieForm";
import Footer from "./Footer";
import MovieList from "./MovieList";
import SearchForm from "./SearchForm";

class App extends Component {
  state = {
    movies: [],
    search: "",
  };

  async componentDidMount() {
    const response = await axios.get(`http://localhost:3002/movies`);
    this.setState({ movies: response.data });
  }
  deleteMovie = (movie) => {
    axios.delete(`http://localhost:3002/movies/${movie.id}`);
    const newMovieList = this.state.movies.filter(
      (deleteMovie) => deleteMovie.id !== movie.id
    );
    this.setState((state) => ({ movies: newMovieList }));
  };

  searchMovie = (e) => {
    this.setState({ search: e.target.value });
  };

  addMovie = async (movie) => {
    await axios.post(`http://localhost:3002/movies/`, movie);
    this.setState((state) => ({ movies: state.movies.concat([movie]) }));
  };

  render() {
    let filteredMovie = this.state.movies.filter((movie) => {
      return movie.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1

    });
    return (
      <div className="container mt-3">
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <SearchForm searchMovie={this.searchMovie} />
                <div className="row justify-content-center">
                  <MovieList
                    movies={filteredMovie}
                    deleteMovie={this.deleteMovie}
                  />
                </div>
                <Footer />
              </React.Fragment>
            }
          ></Route>
          <Route
            path="/add"
            element={
              <AddMovieForm
                addMovie={(movie) => {
                  this.addMovie(movie);
                }}
              />
            }
          ></Route>
        </Routes>
      </div>
    );
  }
}

export default App;

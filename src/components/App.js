import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AddMovieForm from "./AddMovieForm";
import Footer from "./Footer";
import MovieList from "./MovieList";
import SearchForm from "./SearchForm";

class App extends Component {
  state = {
    movies: [],
    search: "",
  };

  deleteMovie = async (movie) => {
    const url = `http://localhost:3000/movies/${movie.id}`;
    await fetch(url, { method: "DELETE" });
    const newMovieList = this.state.movies.filter(
      (deleteMovie) => deleteMovie.id !== movie.id
    );
    this.setState((state) => ({ movies: newMovieList }));
  };

  searchMovie = (e) => {
    this.setState({ search: e.target.value });
  };

  async componentDidMount() {
    const url = "http://localhost:3000/movies";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ movies: data });
  }

  render() {
    let filteredMovie = this.state.movies.filter((movie) => {
      return (
        movie.Title.toLocaleLowerCase().indexOf(
          this.state.search.toLocaleLowerCase()
        ) !== -1
      );
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
          <Route path="/add" element={<AddMovieForm />}>
          </Route>
        </Routes>
        
      </div>
    );
  }
}

export default App;

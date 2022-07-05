import React, { Component } from "react";
import serialize from "form-serialize";

export default class AddMovieForm extends Component {
  handleFormSubmit = (e) => {
    e.preventDefault();
    const newMovie = serialize(e.target, { hash: true });
    this.props.addMovie(newMovie);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit} className="needs-validation" noValidate>
          <div className="form-row">
            <div className="col-md-8 mb-3">
              <label htmlFor="movieName">Name</label>
              <input
                type="text"
                className="form-control"
                id="movieName"
                name="name"
                required
              />
            </div>

            <div className="col-md-4 mb-3">
              <label htmlFor="movieRating">Rating</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="movieRating"
                  aria-describedby="inputGroupPrepend"
                  name="imdb"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-12 mb-3">
              <label htmlFor="movieUrl">Image URL</label>
              <input
                type="url"
                className="form-control"
                id="movieUrl"
                placeholder="url"
                name="imgUrl"
                required
              />
            </div>
          </div>
          <button className="btn btn-primary btn-block" type="submit">
            Add movie
          </button>
        </form>
      </div>
    );
  }
}
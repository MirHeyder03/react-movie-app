import React, { Component } from "react";

export default class SearchForm extends Component {
  handleSubmit=(e)=>{
    e.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group m-3">
          <input
            onChange={this.props.searchMovie}
            type="text"
            className="form-control"
            placeholder="Search movies"
            aria-label="Search movies"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-danger ml-3"
              style={{ borderRadius: "8px" }}
              type="button"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    );
  }
}

import React, { Component } from "react";
import {Link} from "react-router-dom";

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
            <Link to="/add"
              className="btn btn-outline-danger ml-3"
              style={{ borderRadius: "8px" }}
              type="button"
            >
              Add
            </Link>
          </div>
        </div>
      </form>
    );
  }
}

import React, { Component } from "react";

export default class AddMovieForm extends Component {

  handleFromSubmit=(e)=>{
    e.preventDefault();
  }
  
  render() {
    return (
      <div>
        <form class="needs-validation" novalidate onSubmit={this.handleFromSubmit}>
          <div class="form-row">
            <div class="col-md-8 mb-3">
              <label for="validationCustom01">Name</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom01"
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>

            <div class="col-md-4 mb-3">
              <label for="validationCustomUsername">Rating</label>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-12 mb-3">
              <label for="validationCustom03">Image URL</label>
              <input
                type="text"
                class="form-control"
                placeholder="url"
                required
              />
              <div class="invalid-feedback">Please provide a valid city.</div>
            </div>
          </div>

          <button class="btn btn-primary btn-block" type="submit">
            Add movie
          </button>
        </form>
      </div>
    );
  }
}

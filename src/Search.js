import React from "react";
import "./Search.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="search-form mb-3" id="search-window">
        <div className="row">
          <div className="col-12 col-md-7 mb-3 mb-sm-0">
            <input
              type="search"
              class="form-control"
              id="search-input"
              placeholder="Type in a city..."
              autoFocus="true"
              autoComplete="false"
            />
          </div>

          <div className="col-6 col-md-3">
            <input
              type="submit"
              className="form-control btn btn-light"
              id="submit-button"
              value="Search"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

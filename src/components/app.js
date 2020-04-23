import React, { Component } from "react";
import "stylecraft/dist/stylecraft.css";

import "./app.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <form className="sc-form">
          <div className="sc-form-group sc-grid-1">
            <div className="sc-form-text sc-has-label">
              <input type="text" name="title" id="title" />

              <label for="title">Title</label>
            </div>

            <div className="sc-form-textarea sc-has-label">
              <textarea name="description" id="description"></textarea>

              <label for="description">Description</label>
            </div>
          </div>

          <div className="sc-form-group sc-grid-2">
            <div class="sc-form-button sc-md">
              <button type="submit">
                <i class="sc-icon-true"></i>

                <span>Submit</span>
              </button>
            </div>

            <div class="sc-form-button sc-md sc-flex-rr">
              <button type="reset">
                <i class="sc-icon-false"></i>

                <span>Reset</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default App;

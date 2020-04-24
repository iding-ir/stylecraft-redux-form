import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import "stylecraft/dist/stylecraft.css";

import "./app.css";

class App extends Component {
  formValues = {};

  renderError = ({ error, touched }) => {
    if (error && touched) {
      return error;
    }
  };

  renderTitle = ({ input, label, meta }) => {
    return (
      <div className="sc-form-text sc-has-label">
        <input {...input} autoComplete="off" id={input.name} />

        <label htmlFor={input.name}>
          {label}
          <span className="error">{this.renderError(meta)}</span>
        </label>
      </div>
    );
  };

  renderDescription = ({ input, label, meta }) => {
    return (
      <div className="sc-form-text sc-has-label">
        <textarea {...input} id={input.name}></textarea>

        <label htmlFor={input.name}>
          {label}
          <span className="error">{this.renderError(meta)}</span>
        </label>
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.formValues = formValues;
  };

  renderResult = () => {
    return Object.keys(this.formValues).map((key) => (
      <p>
        {key}: {this.formValues[key]}
      </p>
    ));
  };

  render() {
    return (
      <div className="container">
        <form
          className="sc-form"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <div className="sc-form-group sc-grid-1">
            <Field
              name="title"
              label="Enter Title"
              component={this.renderTitle}
            />

            <Field
              name="description"
              label="Enter Description"
              component={this.renderDescription}
            />

            <div className="sc-form-button sc-md">
              <button type="submit" disabled={!this.props.valid}>
                <i className="sc-icon-true"></i>

                <span>Submit</span>
              </button>
            </div>
          </div>
        </form>

        <div>{this.renderResult()}</div>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "Title cannot be empty";
  }

  if (!formValues.description) {
    errors.description = "Description cannot be empty";
  }

  return errors;
};

export default reduxForm({
  form: "Stylecraft",
  validate,
})(App);

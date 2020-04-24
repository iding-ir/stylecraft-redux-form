import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import "stylecraft/dist/stylecraft.css";

import "./app.css";

class App extends Component {
  formValues = {};

  renderError = (meta) => {
    const { error, touched } = meta;

    if (error && touched) {
      return error;
    }
  };

  renderTextfield = (formProps) => {
    const { input, label, meta } = formProps;

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

  renderRadio = (formProps) => {
    const { input, items, meta } = formProps;

    return items.map((item) => {
      const { id, value, label } = item;

      return (
        <div className="sc-form-radio" key={id}>
          <input type="radio" {...input} value={value} id={id} />

          <label htmlFor={id}>
            <i className="sc-icon-radio"></i>

            <span>{label}</span>
          </label>

          <div className="error">{this.renderError(meta)}</div>
        </div>
      );
    });
  };

  renderTextarea = (formProps) => {
    const { input, label, meta } = formProps;

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
      <p key={key}>
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
              name="name"
              label="Enter Name"
              component={this.renderTextfield}
            />
          </div>

          <div className="sc-form-group sc-grid-2">
            <Field
              name="gender"
              items={[
                { id: "male", label: "Male", value: "male" },
                { id: "female", label: "Female", value: "female" },
              ]}
              component={this.renderRadio}
            />
          </div>

          <div className="sc-form-group sc-grid-1">
            <Field
              name="letter"
              label="Enter Letter"
              component={this.renderTextarea}
            />
          </div>

          <div className="sc-form-group sc-grid-1">
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

  if (!formValues.name) {
    errors.name = "Name cannot be empty";
  }

  if (!formValues.letter) {
    errors.letter = "Letter cannot be empty";
  }

  if (!formValues.gender) {
    errors.gender = "Gender cannot be empty";
  }

  return errors;
};

export default reduxForm({
  form: "Stylecraft",
  validate,
})(App);

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

        <label htmlFor={input.name}>{label}</label>

        <span className="error">{this.renderError(meta)}</span>
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

  renderCheckbox = (formProps) => {
    const { input, items, meta, checked } = formProps;

    return items.map((item) => {
      const { id, value, label } = item;

      return (
        <div className="sc-form-checkbox" key={id}>
          <input
            type="checkbox"
            {...input}
            value={value}
            id={id}
            checked={checked}
          />

          <label htmlFor={id}>
            <i className="sc-icon-checkbox"></i>

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

        <label htmlFor={input.name}>{label}</label>

        <span className="error">{this.renderError(meta)}</span>
      </div>
    );
  };

  onSubmit = (formValues) => {
    console.log(formValues);

    this.formValues = formValues;
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
            <Field
              name="tos"
              items={[
                {
                  id: "tos",
                  label: "I agree to terms of service",
                  value: "tos",
                },
              ]}
              component={this.renderCheckbox}
            />

            <Field
              name="newsletter"
              items={[
                {
                  id: "newsletter",
                  label: "Subscribe to newsletter with email",
                  value: "newsletter",
                },
              ]}
              component={this.renderCheckbox}
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

  if (!formValues.tos) {
    errors.tos = "You must agree with terms of service";
  }

  return errors;
};

export default reduxForm({
  form: "Stylecraft",
  validate,
})(App);

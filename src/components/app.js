import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import "stylecraft/dist/stylecraft.css";

import "./app.css";
import {
  renderTextfield,
  renderRadio,
  renderCheckbox,
  renderTextarea,
} from "./stylecraftReduxForm";

class App extends Component {
  onSubmit = (formValues) => {
    console.log(formValues);
  };

  render() {
    return (
      <div className="container">
        <form
          className="sc-form"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <h2>Application form</h2>

          <h4>Personal info:</h4>

          <div className="sc-form-group sc-grid-1">
            <Field name="name" label="Enter name" component={renderTextfield} />

            <Field
              name="email"
              label="Enter email"
              component={renderTextfield}
            />
          </div>

          <div className="sc-form-group sc-grid-2">
            <Field
              name="gender"
              items={[
                { id: "male", label: "Male", value: "male" },
                { id: "female", label: "Female", value: "female" },
              ]}
              component={renderRadio}
            />
          </div>

          <h4>Motivation letter:</h4>

          <div className="sc-form-group sc-grid-1">
            <Field
              name="letter"
              label="Enter letter"
              component={renderTextarea}
            />
          </div>

          <h4>Agreements:</h4>

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
              component={renderCheckbox}
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
              component={renderCheckbox}
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
    errors.name = "Name cannot be empty.";
  } else if (formValues.name.length < 3) {
    errors.name = "Enter a longer name.";
  }

  if (!formValues.email) {
    errors.email = "Email cannot be empty.";
  } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
    errors.email = "Invalid email format.";
  }

  if (!formValues.letter) {
    errors.letter = "Letter cannot be empty.";
  } else if (formValues.letter.length < 10) {
    errors.letter = "Enter a longer letter.";
  }

  if (!formValues.gender) {
    errors.gender = "Gender cannot be empty.";
  }

  if (!formValues.tos) {
    errors.tos = "You must agree with terms of service.";
  }

  return errors;
};

export default reduxForm({
  form: "Stylecraft",
  validate,
})(App);

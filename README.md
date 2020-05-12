## Index

- [Intro](#intro)
- [Demo](#demo)
- [Installation](#demo)
- [Usage](#usage)

## Intro

[redux-form](https://github.com/redux-form/redux-form) component renderers done with [Stylecraft](https://github.com/iding-ir/stylecraft).

## Demo

[Live Demo](http://stylecraft-redux-form.iding.ir)

## Installation

```
npm install --save stylecraft-redux-form
```

## Usage

```
import {
  renderTextfield,
  renderRadio,
  renderCheckbox,
  renderTextarea,
} from "stylecraft-redux-form";

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
```

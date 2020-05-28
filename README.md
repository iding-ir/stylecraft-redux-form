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
  Textfield,
  Radio,
  Checkbox,
  Textarea,
  Select,
  Range
} from "stylecraft-redux-form";

<form
  className="sc-form"
  onSubmit={this.props.handleSubmit(this.onSubmit)}
>
  <h2>Application form</h2>

  <h4>Personal info:</h4>

  <div className="sc-form-group sc-grid-1">
    <Field
      name="name"
      autoComplete="off"
      label="Enter name"
      component={Textfield}
    />

    <Field
      name="email"
      type="email"
      autoComplete="off"
      label="Enter email"
      component={Textfield}
    />
  </div>

  <div className="sc-form-group sc-grid-1">
    <Field
      name="age"
      min={12}
      max={40}
      step={1}
      label="Select age"
      component={Range}
    />
  </div>

  <div className="sc-form-group sc-grid-2">
    <Field
      name="gender"
      items={[
        { id: "male", label: "Male", value: "male" },
        { id: "female", label: "Female", value: "female" },
      ]}
      component={Radio}
    />
  </div>

  <h4>Degree:</h4>

  <div className="sc-form-group sc-grid-1">
    <Field
      name="degree"
      items={[
        { id: "bs", label: "BS", value: "bs" },
        { id: "ms", label: "MS", value: "ms" },
      ]}
      component={Select}
    />
  </div>

  <h4>Motivation letter:</h4>

  <div className="sc-form-group sc-grid-1">
    <Field name="letter" label="Enter letter" component={Textarea} />
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
      component={Checkbox}
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
      component={Checkbox}
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

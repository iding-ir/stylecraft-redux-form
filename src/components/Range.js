import React, { Component } from "react";

import renderError from "./Error";

class Range extends Component {
  state = {
    value: null,
  };

  render() {
    const { input, min, max, step, label, meta } = this.props;

    const onChange = (event) => {
      const { value } = event.target;

      this.setState({ value });
    };

    const renderValue = () => {
      const { value } = this.state;

      if (value !== null) {
        return `: ${value}`;
      }
    };

    return (
      <div className="sc-form-range">
        <input
          {...input}
          type="range"
          min={min}
          max={max}
          step={step}
          value={this.value}
          onChange={onChange}
          id={input.name}
        />

        <label htmlFor={input.name}>
          {label}
          {renderValue()}
        </label>

        <span className="sc-error">{renderError(meta)}</span>
      </div>
    );
  }
}

export default Range;

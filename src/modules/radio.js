import React from "react";

import renderError from "./error";

const Radio = (props) => {
  const { input, items, meta } = props;

  return items.map((item) => {
    const { id, value, label } = item;

    return (
      <div className="sc-form-radio" key={id}>
        <input type="radio" {...input} value={value} id={id} />

        <label htmlFor={id}>
          <i className="sc-icon-radio"></i>

          <span>{label}</span>
        </label>

        <div className="sc-error">{renderError(meta)}</div>
      </div>
    );
  });
};

export default Radio;

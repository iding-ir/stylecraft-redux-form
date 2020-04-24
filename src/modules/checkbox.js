import React from "react";

import renderError from "./error";

export default (formProps) => {
  const { input, items, meta } = formProps;

  return items.map((item) => {
    const { id, value, label } = item;

    return (
      <div className="sc-form-checkbox" key={id}>
        <input type="checkbox" {...input} value={value} id={id} />

        <label htmlFor={id}>
          <i className="sc-icon-checkbox"></i>

          <span>{label}</span>
        </label>

        <div className="sc-error">{renderError(meta)}</div>
      </div>
    );
  });
};

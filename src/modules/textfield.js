import React from "react";

import renderError from "./error";

export default (formProps) => {
  const { input, label, meta } = formProps;

  return (
    <div className="sc-form-text sc-has-label">
      <input {...input} autoComplete="off" id={input.name} />

      <label htmlFor={input.name}>{label}</label>

      <span className="sc-error">{renderError(meta)}</span>
    </div>
  );
};

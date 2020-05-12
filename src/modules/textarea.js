import React from "react";

import renderError from "./error";

export default (formProps) => {
  const { input, label, meta } = formProps;

  return (
    <div className="sc-form-text sc-has-label">
      <textarea {...input} id={input.name}></textarea>

      <label htmlFor={input.name}>{label}</label>

      <span className="sc-error">{renderError(meta)}</span>
    </div>
  );
};

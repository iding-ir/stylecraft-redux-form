import React from "react";

import renderError from "./error";

const Textfield = (props) => {
  const { input, label, meta } = props;

  return (
    <div className="sc-form-text sc-has-label">
      <input {...input} autoComplete="off" id={input.name} />

      <label htmlFor={input.name}>{label}</label>

      <span className="sc-error">{renderError(meta)}</span>
    </div>
  );
};

export default Textfield;

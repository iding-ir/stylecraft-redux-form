import React from "react";

import renderError from "./error";

const Textfield = (props) => {
  const { input, type, label, meta } = props;

  return (
    <div className="sc-form-text sc-has-label">
      <input {...input} type={type} autoComplete="off" id={input.name} />

      <label htmlFor={input.name}>{label}</label>

      <span className="sc-error">{renderError(meta)}</span>
    </div>
  );
};

Textfield.defaultProps = {
  type: "text",
};

export default Textfield;

import React from "react";

import renderError from "./Error";

const Textarea = (props) => {
  const { input, label, meta } = props;

  return (
    <div className="sc-form-text sc-has-label">
      <textarea {...input} id={input.name}></textarea>

      <label htmlFor={input.name}>{label}</label>

      <span className="sc-error">{renderError(meta)}</span>
    </div>
  );
};

export default Textarea;

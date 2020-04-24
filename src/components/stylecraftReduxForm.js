import React from "react";

export const renderError = (meta) => {
  const { error, touched } = meta;

  if (error && touched) {
    return error;
  }
};

export const renderTextfield = (formProps) => {
  const { input, label, meta } = formProps;

  return (
    <div className="sc-form-text sc-has-label">
      <input {...input} autoComplete="off" id={input.name} />

      <label htmlFor={input.name}>{label}</label>

      <span className="sc-error">{renderError(meta)}</span>
    </div>
  );
};

export const renderRadio = (formProps) => {
  const { input, items, meta } = formProps;

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

export const renderCheckbox = (formProps) => {
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

export const renderTextarea = (formProps) => {
  const { input, label, meta } = formProps;

  return (
    <div className="sc-form-text sc-has-label">
      <textarea {...input} id={input.name}></textarea>

      <label htmlFor={input.name}>{label}</label>

      <span className="sc-error">{renderError(meta)}</span>
    </div>
  );
};

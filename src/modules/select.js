import React from "react";

import renderError from "./error";

export default (formProps) => {
  const { input, items, meta } = formProps;

  const renderOptions = () => {
    return items.map((item) => {
      const { id, value, label } = item;

      return (
        <option key={id} type="radio" value={value}>
          {label}
        </option>
      );
    });
  };

  return (
    <div className="sc-form-select">
      <select {...input} value="">
        <option disabled={true} value="">
          Select...
        </option>

        {renderOptions()}
      </select>

      <div className="sc-error">{renderError(meta)}</div>
    </div>
  );
};

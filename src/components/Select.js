import React from "react";

import renderError from "./Error";

const Select = (props) => {
  const { input, items, meta } = props;

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
      <select {...input}>
        <option disabled={true}></option>

        {renderOptions()}
      </select>

      <div className="sc-error">{renderError(meta)}</div>
    </div>
  );
};

export default Select;

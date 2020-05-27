"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _error = _interopRequireDefault(require("./error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(formProps) {
  var input = formProps.input,
      items = formProps.items,
      meta = formProps.meta;

  var renderOptions = function renderOptions() {
    return items.map(function (item) {
      var id = item.id,
          value = item.value,
          label = item.label;
      return /*#__PURE__*/_react.default.createElement("option", {
        key: id,
        type: "radio",
        value: value
      }, label);
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "sc-form-select"
  }, /*#__PURE__*/_react.default.createElement("select", input, /*#__PURE__*/_react.default.createElement("option", {
    disabled: true
  }), renderOptions()), /*#__PURE__*/_react.default.createElement("div", {
    className: "sc-error"
  }, (0, _error.default)(meta)));
};

exports.default = _default;
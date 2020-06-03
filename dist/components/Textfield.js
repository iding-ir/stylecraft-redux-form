"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Error = _interopRequireDefault(require("./Error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Textfield = function Textfield(props) {
  var input = props.input,
      type = props.type,
      autoComplete = props.autoComplete,
      label = props.label,
      meta = props.meta;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "sc-form-text sc-has-label"
  }, /*#__PURE__*/_react.default.createElement("input", _extends({}, input, {
    type: type,
    autoComplete: autoComplete,
    id: input.name
  })), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: input.name
  }, label), /*#__PURE__*/_react.default.createElement("span", {
    className: "sc-error"
  }, (0, _Error.default)(meta)));
};

Textfield.defaultProps = {
  type: "text"
};
var _default = Textfield;
exports.default = _default;
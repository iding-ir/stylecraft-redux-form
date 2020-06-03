"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Error = _interopRequireDefault(require("./Error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Radio = function Radio(props) {
  var input = props.input,
      items = props.items,
      meta = props.meta;
  return items.map(function (item) {
    var id = item.id,
        value = item.value,
        label = item.label;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "sc-form-radio",
      key: id
    }, /*#__PURE__*/_react.default.createElement("input", _extends({
      type: "radio"
    }, input, {
      value: value,
      id: id
    })), /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: id
    }, /*#__PURE__*/_react.default.createElement("i", {
      className: "sc-icon-radio"
    }), /*#__PURE__*/_react.default.createElement("span", null, label)), /*#__PURE__*/_react.default.createElement("div", {
      className: "sc-error"
    }, (0, _Error.default)(meta)));
  });
};

var _default = Radio;
exports.default = _default;
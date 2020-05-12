"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRedux = require("react-redux");

var _stores = _interopRequireDefault(require("./stores"));

var _app = _interopRequireDefault(require("./components/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
  store: _stores.default
}, /*#__PURE__*/_react.default.createElement(_app.default, null)), document.getElementById("root"));
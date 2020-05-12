"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reduxForm = require("redux-form");

var combinedReducers = (0, _redux.combineReducers)({
  form: _reduxForm.reducer
});
var _default = combinedReducers;
exports.default = _default;
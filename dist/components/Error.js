"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(meta) {
  var error = meta.error,
      touched = meta.touched;

  if (error && touched) {
    return error;
  }
};

exports.default = _default;
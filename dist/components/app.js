"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reduxForm = require("redux-form");

require("stylecraft/dist/stylecraft.css");

require("./app.css");

var _textfield = _interopRequireDefault(require("../modules/textfield"));

var _radio = _interopRequireDefault(require("../modules/radio"));

var _checkbox = _interopRequireDefault(require("../modules/checkbox"));

var _textarea = _interopRequireDefault(require("../modules/textarea"));

var _select = _interopRequireDefault(require("../modules/select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App() {
    var _this;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (formValues) {
      console.log(formValues);
    });

    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "container"
      }, /*#__PURE__*/_react.default.createElement("form", {
        className: "sc-form",
        onSubmit: this.props.handleSubmit(this.onSubmit)
      }, /*#__PURE__*/_react.default.createElement("h2", null, "Application form"), /*#__PURE__*/_react.default.createElement("h4", null, "Personal info:"), /*#__PURE__*/_react.default.createElement("div", {
        className: "sc-form-group sc-grid-1"
      }, /*#__PURE__*/_react.default.createElement(_reduxForm.Field, {
        name: "name",
        label: "Enter name",
        component: _textfield.default
      }), /*#__PURE__*/_react.default.createElement(_reduxForm.Field, {
        name: "email",
        label: "Enter email",
        component: _textfield.default
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "sc-form-group sc-grid-2"
      }, /*#__PURE__*/_react.default.createElement(_reduxForm.Field, {
        name: "gender",
        items: [{
          id: "male",
          label: "Male",
          value: "male"
        }, {
          id: "female",
          label: "Female",
          value: "female"
        }],
        component: _radio.default
      })), /*#__PURE__*/_react.default.createElement("h4", null, "Degree:"), /*#__PURE__*/_react.default.createElement("div", {
        className: "sc-form-group sc-grid-1"
      }, /*#__PURE__*/_react.default.createElement(_reduxForm.Field, {
        name: "degree",
        items: [{
          id: "bs",
          label: "BS",
          value: "bs"
        }, {
          id: "ms",
          label: "MS",
          value: "ms"
        }],
        component: _select.default
      })), /*#__PURE__*/_react.default.createElement("h4", null, "Motivation letter:"), /*#__PURE__*/_react.default.createElement("div", {
        className: "sc-form-group sc-grid-1"
      }, /*#__PURE__*/_react.default.createElement(_reduxForm.Field, {
        name: "letter",
        label: "Enter letter",
        component: _textarea.default
      })), /*#__PURE__*/_react.default.createElement("h4", null, "Agreements:"), /*#__PURE__*/_react.default.createElement("div", {
        className: "sc-form-group sc-grid-1"
      }, /*#__PURE__*/_react.default.createElement(_reduxForm.Field, {
        name: "tos",
        items: [{
          id: "tos",
          label: "I agree to terms of service",
          value: "tos"
        }],
        component: _checkbox.default
      }), /*#__PURE__*/_react.default.createElement(_reduxForm.Field, {
        name: "newsletter",
        items: [{
          id: "newsletter",
          label: "Subscribe to newsletter with email",
          value: "newsletter"
        }],
        component: _checkbox.default
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "sc-form-group sc-grid-1"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "sc-form-button sc-md"
      }, /*#__PURE__*/_react.default.createElement("button", {
        type: "submit",
        disabled: !this.props.valid
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "sc-icon-true"
      }), /*#__PURE__*/_react.default.createElement("span", null, "Submit"))))));
    }
  }]);

  return App;
}(_react.Component);

var validate = function validate(formValues) {
  var errors = {};

  if (!formValues.name) {
    errors.name = "Name cannot be empty.";
  } else if (formValues.name.length < 3) {
    errors.name = "Enter a longer name.";
  }

  if (!formValues.email) {
    errors.email = "Email cannot be empty.";
  } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
    errors.email = "Invalid email format.";
  }

  if (!formValues.letter) {
    errors.letter = "Letter cannot be empty.";
  } else if (formValues.letter.length < 10) {
    errors.letter = "Enter a longer letter.";
  }

  if (!formValues.gender) {
    errors.gender = "Gender cannot be empty.";
  }

  if (!formValues.tos) {
    errors.tos = "You must agree with terms of service.";
  }

  return errors;
};

var _default = (0, _reduxForm.reduxForm)({
  form: "Stylecraft",
  validate: validate
})(App);

exports.default = _default;
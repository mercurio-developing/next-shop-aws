webpackHotUpdate(5,{

/***/ "../node_modules/validator/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toDate = __webpack_require__("../node_modules/validator/lib/toDate.js");

var _toDate2 = _interopRequireDefault(_toDate);

var _toFloat = __webpack_require__("../node_modules/validator/lib/toFloat.js");

var _toFloat2 = _interopRequireDefault(_toFloat);

var _toInt = __webpack_require__("../node_modules/validator/lib/toInt.js");

var _toInt2 = _interopRequireDefault(_toInt);

var _toBoolean = __webpack_require__("../node_modules/validator/lib/toBoolean.js");

var _toBoolean2 = _interopRequireDefault(_toBoolean);

var _equals = __webpack_require__("../node_modules/validator/lib/equals.js");

var _equals2 = _interopRequireDefault(_equals);

var _contains = __webpack_require__("../node_modules/validator/lib/contains.js");

var _contains2 = _interopRequireDefault(_contains);

var _matches = __webpack_require__("../node_modules/validator/lib/matches.js");

var _matches2 = _interopRequireDefault(_matches);

var _isEmail = __webpack_require__("../node_modules/validator/lib/isEmail.js");

var _isEmail2 = _interopRequireDefault(_isEmail);

var _isURL = __webpack_require__("../node_modules/validator/lib/isURL.js");

var _isURL2 = _interopRequireDefault(_isURL);

var _isMACAddress = __webpack_require__("../node_modules/validator/lib/isMACAddress.js");

var _isMACAddress2 = _interopRequireDefault(_isMACAddress);

var _isIP = __webpack_require__("../node_modules/validator/lib/isIP.js");

var _isIP2 = _interopRequireDefault(_isIP);

var _isIPRange = __webpack_require__("../node_modules/validator/lib/isIPRange.js");

var _isIPRange2 = _interopRequireDefault(_isIPRange);

var _isFQDN = __webpack_require__("../node_modules/validator/lib/isFQDN.js");

var _isFQDN2 = _interopRequireDefault(_isFQDN);

var _isBoolean = __webpack_require__("../node_modules/validator/lib/isBoolean.js");

var _isBoolean2 = _interopRequireDefault(_isBoolean);

var _isAlpha = __webpack_require__("../node_modules/validator/lib/isAlpha.js");

var _isAlpha2 = _interopRequireDefault(_isAlpha);

var _isAlphanumeric = __webpack_require__("../node_modules/validator/lib/isAlphanumeric.js");

var _isAlphanumeric2 = _interopRequireDefault(_isAlphanumeric);

var _isNumeric = __webpack_require__("../node_modules/validator/lib/isNumeric.js");

var _isNumeric2 = _interopRequireDefault(_isNumeric);

var _isPort = __webpack_require__("../node_modules/validator/lib/isPort.js");

var _isPort2 = _interopRequireDefault(_isPort);

var _isLowercase = __webpack_require__("../node_modules/validator/lib/isLowercase.js");

var _isLowercase2 = _interopRequireDefault(_isLowercase);

var _isUppercase = __webpack_require__("../node_modules/validator/lib/isUppercase.js");

var _isUppercase2 = _interopRequireDefault(_isUppercase);

var _isAscii = __webpack_require__("../node_modules/validator/lib/isAscii.js");

var _isAscii2 = _interopRequireDefault(_isAscii);

var _isFullWidth = __webpack_require__("../node_modules/validator/lib/isFullWidth.js");

var _isFullWidth2 = _interopRequireDefault(_isFullWidth);

var _isHalfWidth = __webpack_require__("../node_modules/validator/lib/isHalfWidth.js");

var _isHalfWidth2 = _interopRequireDefault(_isHalfWidth);

var _isVariableWidth = __webpack_require__("../node_modules/validator/lib/isVariableWidth.js");

var _isVariableWidth2 = _interopRequireDefault(_isVariableWidth);

var _isMultibyte = __webpack_require__("../node_modules/validator/lib/isMultibyte.js");

var _isMultibyte2 = _interopRequireDefault(_isMultibyte);

var _isSurrogatePair = __webpack_require__("../node_modules/validator/lib/isSurrogatePair.js");

var _isSurrogatePair2 = _interopRequireDefault(_isSurrogatePair);

var _isInt = __webpack_require__("../node_modules/validator/lib/isInt.js");

var _isInt2 = _interopRequireDefault(_isInt);

var _isFloat = __webpack_require__("../node_modules/validator/lib/isFloat.js");

var _isFloat2 = _interopRequireDefault(_isFloat);

var _isDecimal = __webpack_require__("../node_modules/validator/lib/isDecimal.js");

var _isDecimal2 = _interopRequireDefault(_isDecimal);

var _isHexadecimal = __webpack_require__("../node_modules/validator/lib/isHexadecimal.js");

var _isHexadecimal2 = _interopRequireDefault(_isHexadecimal);

var _isDivisibleBy = __webpack_require__("../node_modules/validator/lib/isDivisibleBy.js");

var _isDivisibleBy2 = _interopRequireDefault(_isDivisibleBy);

var _isHexColor = __webpack_require__("../node_modules/validator/lib/isHexColor.js");

var _isHexColor2 = _interopRequireDefault(_isHexColor);

var _isISRC = __webpack_require__("../node_modules/validator/lib/isISRC.js");

var _isISRC2 = _interopRequireDefault(_isISRC);

var _isMD = __webpack_require__("../node_modules/validator/lib/isMD5.js");

var _isMD2 = _interopRequireDefault(_isMD);

var _isHash = __webpack_require__("../node_modules/validator/lib/isHash.js");

var _isHash2 = _interopRequireDefault(_isHash);

var _isJSON = __webpack_require__("../node_modules/validator/lib/isJSON.js");

var _isJSON2 = _interopRequireDefault(_isJSON);

var _isEmpty = __webpack_require__("../node_modules/validator/lib/isEmpty.js");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _isLength = __webpack_require__("../node_modules/validator/lib/isLength.js");

var _isLength2 = _interopRequireDefault(_isLength);

var _isByteLength = __webpack_require__("../node_modules/validator/lib/isByteLength.js");

var _isByteLength2 = _interopRequireDefault(_isByteLength);

var _isUUID = __webpack_require__("../node_modules/validator/lib/isUUID.js");

var _isUUID2 = _interopRequireDefault(_isUUID);

var _isMongoId = __webpack_require__("../node_modules/validator/lib/isMongoId.js");

var _isMongoId2 = _interopRequireDefault(_isMongoId);

var _isAfter = __webpack_require__("../node_modules/validator/lib/isAfter.js");

var _isAfter2 = _interopRequireDefault(_isAfter);

var _isBefore = __webpack_require__("../node_modules/validator/lib/isBefore.js");

var _isBefore2 = _interopRequireDefault(_isBefore);

var _isIn = __webpack_require__("../node_modules/validator/lib/isIn.js");

var _isIn2 = _interopRequireDefault(_isIn);

var _isCreditCard = __webpack_require__("../node_modules/validator/lib/isCreditCard.js");

var _isCreditCard2 = _interopRequireDefault(_isCreditCard);

var _isISIN = __webpack_require__("../node_modules/validator/lib/isISIN.js");

var _isISIN2 = _interopRequireDefault(_isISIN);

var _isISBN = __webpack_require__("../node_modules/validator/lib/isISBN.js");

var _isISBN2 = _interopRequireDefault(_isISBN);

var _isISSN = __webpack_require__("../node_modules/validator/lib/isISSN.js");

var _isISSN2 = _interopRequireDefault(_isISSN);

var _isMobilePhone = __webpack_require__("../node_modules/validator/lib/isMobilePhone.js");

var _isMobilePhone2 = _interopRequireDefault(_isMobilePhone);

var _isCurrency = __webpack_require__("../node_modules/validator/lib/isCurrency.js");

var _isCurrency2 = _interopRequireDefault(_isCurrency);

var _isISO = __webpack_require__("../node_modules/validator/lib/isISO8601.js");

var _isISO2 = _interopRequireDefault(_isISO);

var _isRFC = __webpack_require__("../node_modules/validator/lib/isRFC3339.js");

var _isRFC2 = _interopRequireDefault(_isRFC);

var _isISO31661Alpha = __webpack_require__("../node_modules/validator/lib/isISO31661Alpha2.js");

var _isISO31661Alpha2 = _interopRequireDefault(_isISO31661Alpha);

var _isISO31661Alpha3 = __webpack_require__("../node_modules/validator/lib/isISO31661Alpha3.js");

var _isISO31661Alpha4 = _interopRequireDefault(_isISO31661Alpha3);

var _isBase = __webpack_require__("../node_modules/validator/lib/isBase64.js");

var _isBase2 = _interopRequireDefault(_isBase);

var _isDataURI = __webpack_require__("../node_modules/validator/lib/isDataURI.js");

var _isDataURI2 = _interopRequireDefault(_isDataURI);

var _isMimeType = __webpack_require__("../node_modules/validator/lib/isMimeType.js");

var _isMimeType2 = _interopRequireDefault(_isMimeType);

var _isLatLong = __webpack_require__("../node_modules/validator/lib/isLatLong.js");

var _isLatLong2 = _interopRequireDefault(_isLatLong);

var _isPostalCode = __webpack_require__("../node_modules/validator/lib/isPostalCode.js");

var _isPostalCode2 = _interopRequireDefault(_isPostalCode);

var _ltrim = __webpack_require__("../node_modules/validator/lib/ltrim.js");

var _ltrim2 = _interopRequireDefault(_ltrim);

var _rtrim = __webpack_require__("../node_modules/validator/lib/rtrim.js");

var _rtrim2 = _interopRequireDefault(_rtrim);

var _trim = __webpack_require__("../node_modules/validator/lib/trim.js");

var _trim2 = _interopRequireDefault(_trim);

var _escape = __webpack_require__("../node_modules/validator/lib/escape.js");

var _escape2 = _interopRequireDefault(_escape);

var _unescape = __webpack_require__("../node_modules/validator/lib/unescape.js");

var _unescape2 = _interopRequireDefault(_unescape);

var _stripLow = __webpack_require__("../node_modules/validator/lib/stripLow.js");

var _stripLow2 = _interopRequireDefault(_stripLow);

var _whitelist = __webpack_require__("../node_modules/validator/lib/whitelist.js");

var _whitelist2 = _interopRequireDefault(_whitelist);

var _blacklist = __webpack_require__("../node_modules/validator/lib/blacklist.js");

var _blacklist2 = _interopRequireDefault(_blacklist);

var _isWhitelisted = __webpack_require__("../node_modules/validator/lib/isWhitelisted.js");

var _isWhitelisted2 = _interopRequireDefault(_isWhitelisted);

var _normalizeEmail = __webpack_require__("../node_modules/validator/lib/normalizeEmail.js");

var _normalizeEmail2 = _interopRequireDefault(_normalizeEmail);

var _toString = __webpack_require__("../node_modules/validator/lib/util/toString.js");

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = '10.4.0';

var validator = {
  version: version,
  toDate: _toDate2.default,
  toFloat: _toFloat2.default,
  toInt: _toInt2.default,
  toBoolean: _toBoolean2.default,
  equals: _equals2.default,
  contains: _contains2.default,
  matches: _matches2.default,
  isEmail: _isEmail2.default,
  isURL: _isURL2.default,
  isMACAddress: _isMACAddress2.default,
  isIP: _isIP2.default,
  isIPRange: _isIPRange2.default,
  isFQDN: _isFQDN2.default,
  isBoolean: _isBoolean2.default,
  isAlpha: _isAlpha2.default,
  isAlphanumeric: _isAlphanumeric2.default,
  isNumeric: _isNumeric2.default,
  isPort: _isPort2.default,
  isLowercase: _isLowercase2.default,
  isUppercase: _isUppercase2.default,
  isAscii: _isAscii2.default,
  isFullWidth: _isFullWidth2.default,
  isHalfWidth: _isHalfWidth2.default,
  isVariableWidth: _isVariableWidth2.default,
  isMultibyte: _isMultibyte2.default,
  isSurrogatePair: _isSurrogatePair2.default,
  isInt: _isInt2.default,
  isFloat: _isFloat2.default,
  isDecimal: _isDecimal2.default,
  isHexadecimal: _isHexadecimal2.default,
  isDivisibleBy: _isDivisibleBy2.default,
  isHexColor: _isHexColor2.default,
  isISRC: _isISRC2.default,
  isMD5: _isMD2.default,
  isHash: _isHash2.default,
  isJSON: _isJSON2.default,
  isEmpty: _isEmpty2.default,
  isLength: _isLength2.default,
  isByteLength: _isByteLength2.default,
  isUUID: _isUUID2.default,
  isMongoId: _isMongoId2.default,
  isAfter: _isAfter2.default,
  isBefore: _isBefore2.default,
  isIn: _isIn2.default,
  isCreditCard: _isCreditCard2.default,
  isISIN: _isISIN2.default,
  isISBN: _isISBN2.default,
  isISSN: _isISSN2.default,
  isMobilePhone: _isMobilePhone2.default,
  isPostalCode: _isPostalCode2.default,
  isPostalCodeLocales: _isPostalCode.locales,
  isCurrency: _isCurrency2.default,
  isISO8601: _isISO2.default,
  isRFC3339: _isRFC2.default,
  isISO31661Alpha2: _isISO31661Alpha2.default,
  isISO31661Alpha3: _isISO31661Alpha4.default,
  isBase64: _isBase2.default,
  isDataURI: _isDataURI2.default,
  isMimeType: _isMimeType2.default,
  isLatLong: _isLatLong2.default,
  ltrim: _ltrim2.default,
  rtrim: _rtrim2.default,
  trim: _trim2.default,
  escape: _escape2.default,
  unescape: _unescape2.default,
  stripLow: _stripLow2.default,
  whitelist: _whitelist2.default,
  blacklist: _blacklist2.default,
  isWhitelisted: _isWhitelisted2.default,
  normalizeEmail: _normalizeEmail2.default,
  toString: _toString2.default
};

exports.default = validator;
module.exports = exports['default'];

/***/ }),

/***/ "./components/checkout/Form.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("../node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_validator__ = __webpack_require__("../node_modules/validator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_validator__);


var _jsxFileName = "/home/tushita/mercuriodev/liberty-coin/client/components/checkout/Form.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Form =
/*#__PURE__*/
function (_Component) {
  _inherits(Form, _Component);

  function Form(props) {
    var _this;

    _classCallCheck(this, Form);

    _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));
    _this.state = {
      fullname: "",
      address: "",
      email: "",
      city: "",
      zip: "",
      country: "United States",
      cardNumber: "",
      cardholder: "",
      expiredate: "",
      cvv: ""
    };
    return _this;
  }

  _createClass(Form, [{
    key: "validation",
    value: function validation(e) {
      e.preventDefault();
      __WEBPACK_IMPORTED_MODULE_2_validator___default.a.isEmpty(this.state.fullname);
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row h-75 order-row p-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        className: "label-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "SHIPPING INFO"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, "FULL NAME"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        "class": "form-control",
        placeholder: "FULL NAME",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, "ADDRESS"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        "class": "form-control",
        placeholder: "ADDRESS",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "EMAIL"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "email",
        "class": "form-control",
        placeholder: "EMAIL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "CITY"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        "class": "form-control",
        placeholder: "CITY",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "ZIP CODE"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "number",
        "class": "form-control",
        placeholder: "ZIP CODE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, "COUNTRY"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        "class": "form-control",
        value: "UNITED STATES",
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row h-75 order-row p-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        className: "label-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, "CREDIT CARD INFO"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, "CARD NUMBER"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "number",
        "class": "form-control",
        placeholder: "CARD NUMBER",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, "CARDHOLDER NAME"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        "class": "form-control",
        placeholder: "CARDHOLDER NAME",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, "EXPIRE DATE"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "number",
        "class": "form-control",
        placeholder: "EXPIRE DATE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "form-group w-50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, "CVV"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "number",
        "class": "form-control",
        placeholder: "CVV",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "btn btn-md btn-gold float-right",
        onSubmit: this.validation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, "CHECKOUT")))))));
    }
  }]);

  return Form;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ })

})
//# sourceMappingURL=5.14c5b46c314cf4ffe9b9.hot-update.js.map
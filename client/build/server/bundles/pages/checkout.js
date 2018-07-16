module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/checkout/Checkout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Checkout_scss__ = __webpack_require__("./components/checkout/Checkout.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Checkout_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Checkout_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Form__ = __webpack_require__("./components/checkout/Form.js");


var _jsxFileName = "/home/tushita/mercuriodev/liberty-coin/client/components/checkout/Checkout.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Checkout =
/*#__PURE__*/
function (_Component) {
  _inherits(Checkout, _Component);

  function Checkout(props) {
    var _this;

    _classCallCheck(this, Checkout);

    _this = _possibleConstructorReturn(this, (Checkout.__proto__ || Object.getPrototypeOf(Checkout)).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(Checkout, [{
    key: "Checkout",
    value: function Checkout() {
      __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get("/delete-coin");
      __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.reload("/Checkout");
    }
  }, {
    key: "render",
    value: function render() {
      var coinsCartData = this.props.coinsCartData;
      var totalAmount;

      var reducer = function reducer(accumulator, currentValue) {
        return parseFloat(accumulator.price) + parseFloat(currentValue.price);
      };

      if (coinsCartData.length > 1) {
        totalAmount = "$" + coinsCartData.reduce(reducer).toFixed(2);
      } else if (coinsCartData.length === 0) {
        totalAmount = "-";
      } else {
        totalAmount = "$" + coinsCartData[0].price;
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_4__Checkout_scss___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row p-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-10 col-lg-10 mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "btn btn-primary btn-md",
        onClick: function onClick() {
          return __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.push("/cart");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fas fa-arrow-left pr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), "Back to Inventory")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row checkout-row mt-5 mb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row h-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-4 div lg-4 p-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row h-50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row h-75 order-row p-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        className: "label-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "YOUR ORDER"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-10 col-lg-10 mx-auto mt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row line p-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6 text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "SUBTOTAL"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6 text-right order-price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, totalAmount))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-10 col-lg-10 mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row line p-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6 text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "SHIPPING"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6 text-right pt-1 order-shipping",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "FREE"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-10 col-lg-10 mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row line p-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6 text-right ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "TOTAL"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6 text-right order-price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, totalAmount))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-8 col-lg-8 billing-row p-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-lg-12 col-xl-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Form__["a" /* default */], {
        totalAmount: totalAmount,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }))))))))));
    }
  }]);

  return Checkout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Checkout.propTypes = {
  coinsCartData: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.arrayOf(Object).isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Checkout);

/***/ }),

/***/ "./components/checkout/Checkout.scss":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = "\n@import url(\"https://use.typekit.net/bcx7vnk.css\");\n@import url(\"https://use.typekit.net/bcx7vnk.css\");\n/*Variables*/\n.btn-gold, .label-header, label, .order-row {\n  font-family: mr-eaves-sans, sans-serif;\n  font-style: normal;\n  font-weight: 400; }\n.btn-gold {\n  background-color: #e9ab21;\n  color: #fff;\n  border-radius: 4px; }\n.btn-primary {\n  font-size: 14px;\n  padding: 10px 18px 10px 10px;\n  background-color: #1472b9; }\n.checkout-row {\n  border: 1px solid darkgrey;\n  min-height: 60vh; }\n.billing-row {\n  background-color: #cdcfd1; }\n.label-header {\n  font-size: 24px;\n  color: black;\n  opacity: 0.8; }\nlabel {\n  font-size: 18px; }\n.items-row {\n  background-color: #cdcfd1; }\n.order-row {\n  font-size: 18px; }\n.order-price {\n  font-family: Roboto;\n  font-size: 18px; }\n.order-shipping {\n  font-family: Roboto;\n  font-size: 14px; }\n.line {\n  border-bottom: 0.50px solid darkgrey; }\n";
})();

/***/ }),

/***/ "./components/checkout/Form.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_validator__ = __webpack_require__("validator");
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
    key: "handleChange",
    value: function handleChange(e) {
      console.log(e);
    }
  }, {
    key: "validation",
    value: function validation(e) {
      e.preventDefault();
      var fullnameErr = __WEBPACK_IMPORTED_MODULE_2_validator___default.a.isEmpty(this.state.fullname);
      var addressErr = __WEBPACK_IMPORTED_MODULE_2_validator___default.a.isEmpty(this.state.address);
      console.log(fullnameErr, addressErr);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row h-75 order-row p-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        className: "label-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "SHIPPING INFO"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, "FULL NAME"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        "class": "form-control",
        placeholder: "FULL NAME",
        onChange: function onChange(e) {
          _this2.handleChange(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "ADDRESS"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        "class": "form-control",
        placeholder: "ADDRESS",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "EMAIL"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "email",
        "class": "form-control",
        placeholder: "EMAIL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
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
      }, "CITY"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        "class": "form-control",
        placeholder: "CITY",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6",
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
      }, "ZIP CODE"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "number",
        "class": "form-control",
        placeholder: "ZIP CODE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, "COUNTRY"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        "class": "form-control",
        value: "UNITED STATES",
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row h-75 order-row p-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        className: "label-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, "CREDIT CARD INFO"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, "CARD NUMBER"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "number",
        "class": "form-control",
        placeholder: "CARD NUMBER",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, "CARDHOLDER NAME"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        "class": "form-control",
        placeholder: "CARDHOLDER NAME",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, "EXPIRE DATE"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "number",
        "class": "form-control",
        placeholder: "EXPIRE DATE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "form-group w-50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, "CVV"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "number",
        "class": "form-control",
        placeholder: "CVV",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "btn btn-md btn-gold float-right",
        onSubmit: this.validation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, "CHECKOUT")))))));
    }
  }]);

  return Form;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),

/***/ "./pages/checkout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_checkout_Checkout__ = __webpack_require__("./components/checkout/Checkout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);



var _jsxFileName = "/home/tushita/mercuriodev/liberty-coin/client/pages/checkout.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var checkoutPage =
/*#__PURE__*/
function (_Component) {
  _inherits(checkoutPage, _Component);

  function checkoutPage() {
    _classCallCheck(this, checkoutPage);

    return _possibleConstructorReturn(this, (checkoutPage.__proto__ || Object.getPrototypeOf(checkoutPage)).apply(this, arguments));
  }

  _createClass(checkoutPage, [{
    key: "render",
    value: function render() {
      var coinsData = this.props.coinsData;
      console.log(this.props.coinsData);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_checkout_Checkout__["a" /* default */], {
        coinsCartData: coinsData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var req, res;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;

                if (!req) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", {
                  coinsData: req.session.cart
                });

              case 3:
                _context.next = 5;
                return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get("http://localhost:3000/api/coinsInCart");

              case 5:
                res = _context.sent;
                return _context.abrupt("return", {
                  coinsData: res.data
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return checkoutPage;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (checkoutPage);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/checkout.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "validator":
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ })

/******/ });
//# sourceMappingURL=checkout.js.map
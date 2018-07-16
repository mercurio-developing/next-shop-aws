webpackHotUpdate(5,{

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
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row h-75 order-row p-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        className: "label-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "SHIPPING INFO"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
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
          lineNumber: 43
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "ADDRESS"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        "class": "form-control",
        placeholder: "ADDRESS",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "EMAIL"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "email",
        "class": "form-control",
        placeholder: "EMAIL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, "CITY"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        "class": "form-control",
        placeholder: "CITY",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "ZIP CODE"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "number",
        "class": "form-control",
        placeholder: "ZIP CODE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, "COUNTRY"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        "class": "form-control",
        value: "UNITED STATES",
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row h-75 order-row p-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        className: "label-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, "CREDIT CARD INFO"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, "CARD NUMBER"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "number",
        "class": "form-control",
        placeholder: "CARD NUMBER",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, "CARDHOLDER NAME"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        "class": "form-control",
        placeholder: "CARDHOLDER NAME",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, "EXPIRE DATE"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "number",
        "class": "form-control",
        placeholder: "EXPIRE DATE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "form-group w-50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, "CVV"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "number",
        "class": "form-control",
        placeholder: "CVV",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "btn btn-md btn-gold float-right",
        onSubmit: this.validation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, "CHECKOUT")))))));
    }
  }]);

  return Form;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ })

})
//# sourceMappingURL=5.7dbd2b7e2650b8a8934f.hot-update.js.map
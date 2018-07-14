webpackHotUpdate(5,{

/***/ "../node_modules/next/router.js":
false,

/***/ "./components/cart/Cart.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("../node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("../node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Cart_scss__ = __webpack_require__("./components/cart/Cart.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Cart_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Cart_scss__);


var _jsxFileName = "/home/tushita/mercuriodev/liberty-coin/client/components/cart/Cart.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var CoinDetail =
/*#__PURE__*/
function (_Component) {
  _inherits(CoinDetail, _Component);

  function CoinDetail(props) {
    var _this;

    _classCallCheck(this, CoinDetail);

    _this = _possibleConstructorReturn(this, (CoinDetail.__proto__ || Object.getPrototypeOf(CoinDetail)).call(this, props));
    _this.state = {};

    var deleteCoin = _this.deleteCoin.bind(_assertThisInitialized(_this));

    return _this;
  }

  _createClass(CoinDetail, [{
    key: "deleteCoin",
    value: function deleteCoin(id) {
      __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post("/delete-coin", {
        id: id
      });
      Router.reload("/cart");
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var coinsCartData = this.props.coinsCartData;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_3__Cart_scss___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row p-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-10 col-lg-10 mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "btn btn-primary btn-md",
        onClick: this.comeBack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fas fa-arrow-left pr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), "Back to Inventory")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row cart-row mt-5 mb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row h-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-8 col-lg-8 items-row p-4",
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
      }, "SHOPPING CART"), coinsCartData.map(function (coin, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          key: index,
          className: "row cart-items pt-4 pb-4 mt-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "col-xl-3 col-lg-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          className: "cart-img",
          src: coin.images[0],
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "col-xl-6 col-lg-6 ",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "col-xl-12 col-lg-12 my-auto ",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          className: "pl-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, "PRODUCT")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "row h-50",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "col-xl-12 col-lg-12 my-auto",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          className: "coin-name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, coin.name)))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "col-xl-3 col-lg-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "col-xl-12 col-lg-12 p-0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, "TOTAL"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "row h-50",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "col-xl-12 col-lg-12",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          className: "coin-price",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        }, coin.price, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
          className: "far fa-trash-alt pl-2",
          onClick: function onClick() {
            return _this2.deleteCoin(coin._id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        })))));
      }), " "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-4 div lg-4 p-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row h-50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row h-75 order-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        className: "label-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, "YOUR ORDER"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-10 col-lg-10 mx-auto mt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row line p-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6 text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "SUBTOTAL"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6 text-right order-price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, "$10,900"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-10 col-lg-10 mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row line p-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6 text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, "SHIPPING"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6 text-right pt-1 order-shipping",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, "FREE"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-10 col-lg-10 mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row line p-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6 text-right ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, "TOTAL"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6 text-right order-price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, "$10,900")))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6 mx-auto mt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "btn btn-md btn-gold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, "CHECKOUT")))))))));
    }
  }]);

  return CoinDetail;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

CoinDetail.protoType = {
  coinsCartData: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (CoinDetail);

/***/ })

})
//# sourceMappingURL=5.c3ad9cd0457a8a9dd219.hot-update.js.map
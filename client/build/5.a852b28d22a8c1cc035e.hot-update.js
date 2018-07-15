webpackHotUpdate(5,{

/***/ "./components/inventory/coins/Coins.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("../node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Coins_scss__ = __webpack_require__("./components/inventory/coins/Coins.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Coins_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Coins_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Coin__ = __webpack_require__("./components/inventory/coins/Coin.js");


var _jsxFileName = "/home/tushita/mercuriodev/liberty-coin/client/components/inventory/coins/Coins.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Coins =
/*#__PURE__*/
function (_Component) {
  _inherits(Coins, _Component);

  function Coins(props) {
    var _this;

    _classCallCheck(this, Coins);

    _this = _possibleConstructorReturn(this, (Coins.__proto__ || Object.getPrototypeOf(Coins)).call(this, props));
    _this.state = {
      orderByPrice: true,
      sort: []
    };

    var sortByPrice = _this.sortByPrice.bind(_assertThisInitialized(_this));

    return _this;
  }

  _createClass(Coins, [{
    key: "sortByPrice",
    value: function sortByPrice() {
      this.setState({
        orderByPrice: !this.state.orderByPrice
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          dataCategories = _props.dataCategories,
          dataCoins = _props.dataCoins;
      var filterCoin = [];
      var dataCoinsClean = [];
      dataCoins.map(function (coin, index) {
        coin.categories.filter(function (category) {
          dataCategories.filter(function (categoryChecked) {
            if (categoryChecked.name === category && categoryChecked.checked === true) {
              filterCoin.push(coin);
              filterCoin.filter(function (coin, index, arra) {
                arra.map(function (item, pos) {
                  if (item._id === coin._id && pos !== index) {
                    arra.splice(pos, 1);
                  }

                  dataCoinsClean = arra;

                  if (dataCoinsClean.length === index + 1) {
                    var sortArray = dataCoinsClean;

                    if (_this2.state.orderByPrice === false) {
                      sortArray.sort(function (a, b) {
                        return parseFloat(a.price) - parseFloat(b.price);
                      });
                    } else {
                      sortArray.sort(function (a, b) {
                        return parseFloat(b.price) - parseFloat(a.price);
                      });
                    }
                  }
                });
              });
            }
          });
        });
      });
      var coinsData = this.state.sortArray.map(function (coin) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Coin__["a" /* default */], {
          key: coin._id,
          coinData: coin,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        });
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_2__Coins_scss___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-11 col-lg-11 mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        className: "form-inline float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "SORT BY:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", {
        className: "form-control pl-2 ml-2",
        onClick: function onClick() {
          _this2.sortByPrice();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "Price: Low to High"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "Price: High to Low"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row h-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, coinsData))));
    }
  }]);

  return Coins;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Coins.propTypes = {
  dataCoins: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(Object).isRequired,
  dataCategories: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(Object).isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Coins);

/***/ })

})
//# sourceMappingURL=5.a852b28d22a8c1cc035e.hot-update.js.map
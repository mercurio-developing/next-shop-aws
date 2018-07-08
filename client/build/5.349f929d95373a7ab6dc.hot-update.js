webpackHotUpdate(5,{

/***/ "./components/inventory/coins/CoinDetail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("../node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);


var _jsxFileName = "/home/tushita/mercuriodev/liberty-coin/client/components/inventory/coins/CoinDetail.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var CoinDetail =
/*#__PURE__*/
function (_Component) {
  _inherits(CoinDetail, _Component);

  function CoinDetail() {
    _classCallCheck(this, CoinDetail);

    return _possibleConstructorReturn(this, (CoinDetail.__proto__ || Object.getPrototypeOf(CoinDetail)).apply(this, arguments));
  }

  _createClass(CoinDetail, [{
    key: "render",
    value: function render() {
      var coinData = this.props.coinData;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, "ROCK ON"));
    }
  }]);

  return CoinDetail;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

CoinDetail.protoType = {
  coinData: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* unused harmony default export */ var _unused_webpack_default_export = (CoinDetail);

/***/ }),

/***/ "./components/inventory/coins/Coins.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Coins_scss__ = __webpack_require__("./components/inventory/coins/Coins.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Coins_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Coins_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Coin__ = __webpack_require__("./components/inventory/coins/Coin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CoinDetail__ = __webpack_require__("./components/inventory/coins/CoinDetail.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("../node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);


var _jsxFileName = "/home/tushita/mercuriodev/liberty-coin/client/components/inventory/coins/Coins.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Coins =
/*#__PURE__*/
function (_Component) {
  _inherits(Coins, _Component);

  function Coins(props) {
    _classCallCheck(this, Coins);

    return _possibleConstructorReturn(this, (Coins.__proto__ || Object.getPrototypeOf(Coins)).call(this, props));
  }

  _createClass(Coins, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          dataCategories = _props.dataCategories,
          dataCoins = _props.dataCoins;
      var filterCoin = [];
      var dataCoinsClean = [];
      dataCoins.map(function (coin, index) {
        coin.category.filter(function (category) {
          dataCategories.filter(function (categoryChecked) {
            if (categoryChecked.name === category && categoryChecked.checked === true) {
              filterCoin.push(coin);
              filterCoin.filter(function (coin, index, arra) {
                arra.map(function (item, pos) {
                  if (item.id === coin.id && pos !== index) {
                    arra.splice(pos, 1);
                  }

                  dataCoinsClean = arra;
                });
              });
            }
          });
        });
      });
      var coinsData = dataCoinsClean.map(function (coin) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Coin__["a" /* default */], {
          coinData: coin,
          detail: detailCoin,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        });
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_1__Coins_scss___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row h-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, coinsData));
    }
  }]);

  return Coins;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Coins.propTypes = {
  dataCoins: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.arrayOf(Object).isRequired,
  dataCategories: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.arrayOf(Object).isRequired,
  detail: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Coins);

/***/ })

})
//# sourceMappingURL=5.349f929d95373a7ab6dc.hot-update.js.map
webpackHotUpdate(5,{

/***/ "./components/inventory/coins/Coin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("../node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);


var _jsxFileName = "/home/tushita/mercuriodev/liberty-coin/client/components/inventory/coins/Coin.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Coin =
/*#__PURE__*/
function (_Component) {
  _inherits(Coin, _Component);

  function Coin() {
    _classCallCheck(this, Coin);

    return _possibleConstructorReturn(this, (Coin.__proto__ || Object.getPrototypeOf(Coin)).apply(this, arguments));
  }

  _createClass(Coin, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          coinData = _props.coinData,
          coinDetail = _props.coinDetail;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        key: coinData.id,
        className: "col-xl-4 col-md-4 col-sm-4 col-4 text-center mt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "img-fluid ",
        src: coinData.images[1],
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "mt-2 coin-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, coinData.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "coin-price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, coinData.price), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "btn btn-md btn-gold",
        onClick: function onClick() {
          coinDetail(coinData.id);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, "ITEM DETAILS"));
    }
  }]);

  return Coin;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Coin.protoType = {
  coinData: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  coinDetail: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Coin);

/***/ })

})
//# sourceMappingURL=5.74971623c4dfda855eda.hot-update.js.map
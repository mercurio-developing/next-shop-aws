webpackHotUpdate(5,{

/***/ "./components/inventory/coins/Coins.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Coins_scss__ = __webpack_require__("./components/inventory/coins/Coins.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Coins_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Coins_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("../node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);


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
    var _this;

    _classCallCheck(this, Coins);

    _this = _possibleConstructorReturn(this, (Coins.__proto__ || Object.getPrototypeOf(Coins)).call(this, props));
    _this.state = {
      isFilter: []
    };
    return _this;
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
              console.log(dataCoins.lenght, index + 1);
              console.log(filterCoin);
            }
          });
        });
      });
      filterCoin.filter(function (coin, index, arra) {
        arra.map(function (item, pos) {
          if (item.id === coin.id && pos !== index) {
            arra.splice(pos, 1);
          }

          dataCoinsClean = arra;
          console.log(dataCoinsClean);
        });
      }); // if (filterCoin.length === index + 1) {
      //   filterCoin.filter((coin, index, arra) => {
      //     arra.map((item, pos) => {
      //       if (item.id === coin.id && pos !== index) {
      //         arra.splice(pos, 1);
      //       }
      //       dataCoinsClean = arra;
      //       console.log(dataCoinsClean);
      //     });
      //   });
      // }

      var coinsData = dataCoinsClean.map(function (coin) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          key: coin.id,
          className: "col-xl-4 col-md-4 col-sm-4 col-4 text-center mt-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          className: "img-fluid ",
          src: coin.images[1],
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          className: "mt-2 coin-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, coin.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          className: "coin-price",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, coin.price), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          className: "btn btn-md btn-gold ",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, "ITEM DETAILS"));
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_1__Coins_scss___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row h-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, coinsData));
    }
  }]);

  return Coins;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Coins.propTypes = {
  dataCoins: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(Object).isRequired,
  dataCategories: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(Object).isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Coins);

/***/ })

})
//# sourceMappingURL=5.3767e4cb9c1f8248c72a.hot-update.js.map
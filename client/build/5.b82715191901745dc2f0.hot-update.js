webpackHotUpdate(5,{

/***/ "./components/inventory/coins/CoinDetail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("../node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("../node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pinchZoom_PinchZoom_js__ = __webpack_require__("./components/inventory/pinchZoom/PinchZoom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Coins_scss__ = __webpack_require__("./components/inventory/coins/Coins.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Coins_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Coins_scss__);


var _jsxFileName = "/home/tushita/mercuriodev/liberty-coin/client/components/inventory/coins/CoinDetail.js";

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
    _this.state = {
      imgSelect: _this.props.coinDetailData.images[0]
    };
    _this.addCoinToCart = _this.addCoinToCart.bind(_assertThisInitialized(_this));
    _this.changeImg = _this.changeImg.bind(_assertThisInitialized(_this));
    _this.comeBack = _this.comeBack.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CoinDetail, [{
    key: "changeImg",
    value: function changeImg(index) {
      var imgSelect = this.props.coinDetailData.images[index];
      this.setState({
        imgSelect: imgSelect
      });
    }
  }, {
    key: "comeBack",
    value: function comeBack() {
      __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.push({
        pathname: "/inventory"
      });
    }
  }, {
    key: "addCoinToCart",
    value: function addCoinToCart(id) {// let coin = coinDetailData[id];
      // console.log("coin added");
      // let data = axios.post("/addToCart", coin);
      // console.log(data);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var coinDetailData = this.props.coinDetailData;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_4__Coins_scss___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row h-100 p-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "btn btn-primary btn-md",
        onClick: this.comeBack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "fas fa-arrow-left pr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), "Back to Inventory")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row h-100 mt-xl-4 mt-lg-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-8 p-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row text-center  h-75",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__pinchZoom_PinchZoom_js__["a" /* default */], {
        initialScale: "0",
        minScale: "1",
        maxScale: "10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "img-pinch",
        src: this.state.imgSelect,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-5 col-lg-5 mx-auto",
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
      }, coinDetailData.images.map(function (img, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "col-lg-6 col-xl-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          key: index,
          className: "img-thumbnail",
          src: img,
          alt: "",
          onClick: function onClick() {
            _this2.changeImg(index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        }));
      }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-4 col-lg-4  mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row row-card p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12 text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        "class": "coin-detail-title mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, coinDetailData.name, " "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "coin-detail-description mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, coinDetailData.description), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "coin-detail-categories",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, coinDetailData.categories), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row mt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        "class": "coin-detail-price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, coinDetailData.price)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: this.addCoinToCart("2"),
        className: "btn btn-gold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, "ADD TO CART"))))))))));
    }
  }]);

  return CoinDetail;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

CoinDetail.protoType = {
  coinDetailData: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (CoinDetail);

/***/ })

})
//# sourceMappingURL=5.b82715191901745dc2f0.hot-update.js.map
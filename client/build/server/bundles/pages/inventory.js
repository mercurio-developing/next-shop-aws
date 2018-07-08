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

/***/ "./components/inventory/CategoryList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);


var _jsxFileName = "/home/tushita/mercuriodev/liberty-coin/client/components/inventory/CategoryList.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var CategoryList =
/*#__PURE__*/
function (_Component) {
  _inherits(CategoryList, _Component);

  function CategoryList(props) {
    _classCallCheck(this, CategoryList);

    return _possibleConstructorReturn(this, (CategoryList.__proto__ || Object.getPrototypeOf(CategoryList)).call(this, props));
  }

  _createClass(CategoryList, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          dataCategories = _props.dataCategories,
          checkCategory = _props.checkCategory,
          allCategories = _props.allCategories,
          checkAll = _props.checkAll;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row mt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "ml-4 pb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        onClick: function onClick() {
          checkAll();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, allCategories ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "far fa-check-circle pr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "far fa-circle pr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), "All Categories")), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, dataCategories.map(function (category, id) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          className: "pb-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          onClick: function onClick() {
            checkCategory(id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }, category.checked ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
          "class": "far fa-check-circle pr-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
          "class": "far fa-circle pr-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }), category.name));
      }))));
    }
  }]);

  return CategoryList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

CategoryList.propTypes = {
  dataCategories: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(Object).isRequired,
  checkCategory: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  checkAll: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  allCategories: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (CategoryList);

/***/ }),

/***/ "./components/inventory/Inventory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Inventory_scss__ = __webpack_require__("./components/inventory/Inventory.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Inventory_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Inventory_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mocks_categories__ = __webpack_require__("./components/inventory/mocks/categories.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mocks_categories___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__mocks_categories__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mocks_data__ = __webpack_require__("./components/inventory/mocks/data.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mocks_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__mocks_data__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CategoryList__ = __webpack_require__("./components/inventory/CategoryList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__coins_Coins__ = __webpack_require__("./components/inventory/coins/Coins.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__coins_CoinDetail__ = __webpack_require__("./components/inventory/coins/CoinDetail.js");


var _jsxFileName = "/home/tushita/mercuriodev/liberty-coin/client/components/inventory/Inventory.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


 // Mocks


 //Components





var Inventory =
/*#__PURE__*/
function (_Component) {
  _inherits(Inventory, _Component);

  function Inventory(props) {
    var _this;

    _classCallCheck(this, Inventory);

    _this = _possibleConstructorReturn(this, (Inventory.__proto__ || Object.getPrototypeOf(Inventory)).call(this, props));
    _this.state = {
      categories: __WEBPACK_IMPORTED_MODULE_2__mocks_categories___default.a,
      allCategories: false,
      coins: __WEBPACK_IMPORTED_MODULE_3__mocks_data___default.a,
      coinDetailData: {},
      showDetail: false
    };
    _this.checkCategory = _this.checkCategory.bind(_assertThisInitialized(_this));
    _this.checkAll = _this.checkAll.bind(_assertThisInitialized(_this));
    _this.showCoinDetail = _this.showCoinDetail.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Inventory, [{
    key: "checkCategory",
    value: function checkCategory(id) {
      var categories = this.state.categories;
      categories[id].checked = !categories[id].checked;
      this.setState({
        categories: categories
      });
    }
  }, {
    key: "checkAll",
    value: function checkAll() {
      var categories = this.state.categories;
      var checked = !this.state.allCategories;
      categories.map(function (category) {
        return category.checked = checked;
      });
      this.setState({
        categories: categories,
        allCategories: checked
      });
    }
  }, {
    key: "showCoinDetail",
    value: function showCoinDetail(id) {
      var coinDetailData = this.state.coins.filter(function (coin) {
        return coin.id === id;
      });
      var showDetail = !this.state.showDetail;
      this.setState({
        showDetail: showDetail,
        coinDetailData: coinDetailData
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_1__Inventory_scss___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row h-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 category-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__CategoryList__["a" /* default */], {
        dataCategories: this.state.categories,
        checkCategory: this.checkCategory,
        checkAll: this.checkAll,
        allCategories: this.state.allCategories,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, this.state.showDetail === false ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__coins_Coins__["a" /* default */], {
        dataCategories: this.state.categories,
        dataCoins: this.state.coins,
        coinDetail: this.showCoinDetail,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__coins_CoinDetail__["a" /* default */], {
        coinDetail: this.showCoinDetail,
        coinDetailData: this.state.coinDetailData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }))));
    }
  }]);

  return Inventory;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Inventory);

/***/ }),

/***/ "./components/inventory/Inventory.scss":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = "\n@import url(\"https://use.typekit.net/bcx7vnk.css\");\n@import url(\"https://use.typekit.net/bcx7vnk.css\");\n/*Variables*/\nli {\n  font-family: mr-eaves-sans, sans-serif;\n  font-style: normal;\n  font-weight: 700; }\n/*Category List*/\n.category-list {\n  background-color: #3c434c; }\nli {\n  color: #fff;\n  font-size: 14px;\n  list-style: none; }\n";
})();

/***/ }),

/***/ "./components/inventory/coins/Coin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
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

/***/ }),

/***/ "./components/inventory/coins/CoinDetail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
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
      var coinDetailData = this.props.coinDetailData;
      console.log(coinDetailData);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, "ROCK ON"));
    }
  }]);

  return CoinDetail;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

CoinDetail.protoType = {
  coinDetailData: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (CoinDetail);

/***/ }),

/***/ "./components/inventory/coins/Coins.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Coins_scss__ = __webpack_require__("./components/inventory/coins/Coins.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Coins_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Coins_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Coin__ = __webpack_require__("./components/inventory/coins/Coin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);


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
          dataCoins = _props.dataCoins,
          coinDetail = _props.coinDetail;
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
          coinDetail: coinDetail,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        });
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_1__Coins_scss___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row h-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, coinsData));
    }
  }]);

  return Coins;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Coins.propTypes = {
  dataCoins: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.arrayOf(Object).isRequired,
  dataCategories: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.arrayOf(Object).isRequired,
  coinDetail: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Coins);

/***/ }),

/***/ "./components/inventory/coins/Coins.scss":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = "\n@import url(\"https://use.typekit.net/bcx7vnk.css\");\n@import url(\"https://use.typekit.net/bcx7vnk.css\");\n/*Variables*/\n.btn-gold, .coin-title {\n  font-family: mr-eaves-sans, sans-serif;\n  font-style: normal;\n  font-weight: 400; }\n.btn-gold {\n  background-color: #e9ab21;\n  color: #fff;\n  border-radius: 4px; }\n.btn-gold {\n  font-size: 16px;\n  padding: 10px 18px 10px 18px; }\n.coin-title {\n  font-size: 20px; }\n.coin-price {\n  font-family: Roboto;\n  font-size: 16px; }\n";
})();

/***/ }),

/***/ "./components/inventory/mocks/categories.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [{
  name: "Featured Coins",
  checked: false
}, {
  name: "World Currency",
  checked: false
}, {
  name: "Dimes",
  checked: true
}, {
  name: "Quarters",
  checked: false
}, {
  name: "Half Dollars",
  checked: false
}, {
  name: "Dollars",
  checked: true
}, {
  name: "Odd Denomination",
  checked: false
}, {
  name: "Commemorative",
  checked: false
}, {
  name: "Gold Coins",
  checked: false
}, {
  name: "PGCS Graded Coins",
  checked: false
}, {
  name: "NGC Graded Coins",
  checked: false
}, {
  name: "CAC Verified Coins",
  checked: false
}, {
  name: "Bullion Coins",
  checked: false
}, {
  name: "World Coins",
  checked: true
}, {
  name: "Featured Coins",
  checked: false
}];

/***/ }),

/***/ "./components/inventory/mocks/data.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [{
  id: "1",
  name: "MONEDA 1",
  description: "An interesting coin with a bit of red peeking out from the middle of the cent, with more browns and greens near the rim. Most likely from the famous Randall Hoard, with the die crack that the hoard coins almost all have. Feel free to research the hoard, as it is quite a story.",
  price: "$1,690",
  images: ["/static/assets/coin_1.png", "/static/assets/coin_2.png", "/static/assets/coin_3.png"],
  category: ["World Coins"]
}, {
  id: "2",
  name: "MONEDA 2",
  description: "An interesting coin with a bit of red peeking out from the middle of the cent, with more browns and greens near the rim. Most likely from the famous Randall Hoard, with the die crack that the hoard coins almost all have. Feel free to research the hoard, as it is quite a story.",
  price: "$1,690",
  images: ["/static/assets/coin_1.png", "/static/assets/coin_2.png", "/static/assets/coin_3.png"],
  category: ["Gold Coins"]
}, {
  id: "3",
  name: "MONEDA 3",
  description: "An interesting coin with a bit of red peeking out from the middle of the cent, with more browns and greens near the rim. Most likely from the famous Randall Hoard, with the die crack that the hoard coins almost all have. Feel free to research the hoard, as it is quite a story.",
  price: "$1,690",
  images: ["/static/assets/coin_1.png", "/static/assets/coin_2.png", "/static/assets/coin_3.png"],
  category: ["Bullion Coins"]
}, {
  id: "4",
  name: "MONEDA 4",
  description: "An interesting coin with a bit of red peeking out from the middle of the cent, with more browns and greens near the rim. Most likely from the famous Randall Hoard, with the die crack that the hoard coins almost all have. Feel free to research the hoard, as it is quite a story.",
  price: "$1,690",
  images: ["/static/assets/coin_1.png", "/static/assets/coin_2.png", "/static/assets/coin_3.png"],
  category: ["Bullion Coins", "Dimes", "Dollars", "Gold Coins"]
}, {
  id: "5",
  name: "MONEDA 5",
  description: "An interesting coin with a bit of red peeking out from the middle of the cent, with more browns and greens near the rim. Most likely from the famous Randall Hoard, with the die crack that the hoard coins almost all have. Feel free to research the hoard, as it is quite a story.",
  price: "$1,690",
  images: ["/static/assets/coin_1.png", "/static/assets/coin_2.png", "/static/assets/coin_3.png"],
  category: ["Dollars"] // {
  //   id: "6",
  //   name: "1933 Saint-Gaudens Double Eagle",
  //   description:
  //     "An interesting coin with a bit of red peeking out from the middle of the cent, with more browns and greens near the rim. Most likely from the famous Randall Hoard, with the die crack that the hoard coins almost all have. Feel free to research the hoard, as it is quite a story.",
  //   price: "$1,690",
  //   images: [
  //     "/static/assets/coin_1.png",
  //     "/static/assets/coin_2.png",
  //     "/static/assets/coin_3.png"
  //   ],
  //   category: ["Gold Coins"]
  // },
  // {
  //   id: "7",
  //   name: "1787 Brasher Doubloon",
  //   description:
  //     "An interesting coin with a bit of red peeking out from the middle of the cent, with more browns and greens near the rim. Most likely from the famous Randall Hoard, with the die crack that the hoard coins almost all have. Feel free to research the hoard, as it is quite a story.",
  //   price: "$1,690",
  //   images: [
  //     "/static/assets/coin_1.png",
  //     "/static/assets/coin_2.png",
  //     "/static/assets/coin_3.png"
  //   ],
  //   category: ["PGCS Graded Coins"]
  // },
  // {
  //   id: "8",
  //   name: "1794 Flowing",
  //   description:
  //     "An interesting coin with a bit of red peeking out from the middle of the cent, with more browns and greens near the rim. Most likely from the famous Randall Hoard, with the die crack that the hoard coins almost all have. Feel free to research the hoard, as it is quite a story.",
  //   price: "$1,690",
  //   images: [
  //     "/static/assets/coin_1.png",
  //     "/static/assets/coin_2.png",
  //     "/static/assets/coin_3.png"
  //   ],
  //   category: ["PGCS Graded Coins"]
  // },
  // {
  //   id: "9",
  //   name: "1804 Draped Bust Dollar",
  //   description:
  //     "An interesting coin with a bit of red peeking out from the middle of the cent, with more browns and greens near the rim. Most likely from the famous Randall Hoard, with the die crack that the hoard coins almost all have. Feel free to research the hoard, as it is quite a story.",
  //   price: "$1,690",
  //   images: [
  //     "/static/assets/coin_1.png",
  //     "/static/assets/coin_2.png",
  //     "/static/assets/coin_3.png"
  //   ],
  //   category: ["Featured Coins"]
  // },
  // {
  //   id: "10",
  //   name: "1794 Flowing Hair Dollar",
  //   description:
  //     "An interesting coin with a bit of red peeking out from the middle of the cent, with more browns and greens near the rim. Most likely from the famous Randall Hoard, with the die crack that the hoard coins almost all have. Feel free to research the hoard, as it is quite a story.",
  //   price: "$1,690",
  //   images: [
  //     "/static/assets/coin_1.png",
  //     "/static/assets/coin_2.png",
  //     "/static/assets/coin_3.png"
  //   ],
  //   category: ["Featured Coins"]
  // }

}];

/***/ }),

/***/ "./pages/inventory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_inventory_Inventory__ = __webpack_require__("./components/inventory/Inventory.js");


var _jsxFileName = "/home/tushita/mercuriodev/liberty-coin/client/pages/inventory.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_inventory_Inventory__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }));
});

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/inventory.js");


/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=inventory.js.map
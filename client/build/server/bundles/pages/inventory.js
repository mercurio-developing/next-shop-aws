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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
    var _this;

    _classCallCheck(this, CategoryList);

    _this = _possibleConstructorReturn(this, (CategoryList.__proto__ || Object.getPrototypeOf(CategoryList)).call(this, props));
    _this.state = {
      price: false
    };
    return _this;
  }

  _createClass(CategoryList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          dataCategories = _props.dataCategories,
          checkCategory = _props.checkCategory,
          allCategories = _props.allCategories,
          checkAll = _props.checkAll,
          byPrice = _props.byPrice;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row h-100 mt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "ml-4 pb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        onClick: function onClick() {
          checkAll();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, allCategories ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "far fa-check-circle pr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "far fa-circle pr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), "All Categories")), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, dataCategories.map(function (category, id) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          key: id,
          className: "pb-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          onClick: function onClick() {
            checkCategory(id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, category.checked ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
          className: "far fa-check-circle pr-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
          className: "far fa-circle pr-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }), category.name));
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "Order by", " ", this.state.price === true ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        onClick: function onClick() {
          byPrice();

          _this2.setState({
            price: !_this2.state.price
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "HIGH PRICE") : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        onClick: function onClick() {
          byPrice();

          _this2.setState({
            price: !_this2.state.price
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "LOW PRICE"))));
    }
  }]);

  return CategoryList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

CategoryList.propTypes = {
  dataCategories: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(Object).isRequired,
  checkCategory: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  checkAll: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  allCategories: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  byPrice: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (CategoryList);

/***/ }),

/***/ "./components/inventory/Inventory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Inventory_scss__ = __webpack_require__("./components/inventory/Inventory.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Inventory_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Inventory_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mocks_categories__ = __webpack_require__("./components/inventory/mocks/categories.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mocks_categories___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__mocks_categories__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CategoryList__ = __webpack_require__("./components/inventory/CategoryList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__coins_Coins__ = __webpack_require__("./components/inventory/coins/Coins.js");


var _jsxFileName = "/home/tushita/mercuriodev/liberty-coin/client/components/inventory/Inventory.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




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
      categories: __WEBPACK_IMPORTED_MODULE_3__mocks_categories___default.a,
      allCategories: false,
      coinDetailData: {},
      showDetail: false,
      orderByPrice: true
    };
    _this.checkCategory = _this.checkCategory.bind(_assertThisInitialized(_this));
    _this.checkAll = _this.checkAll.bind(_assertThisInitialized(_this));
    _this.byPrice = _this.byPrice.bind(_assertThisInitialized(_this));
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
    key: "byPrice",
    value: function byPrice() {
      this.setState({
        orderByPrice: !this.state.orderByPrice
      });
    }
  }, {
    key: "render",
    value: function render() {
      var dataCoins = this.props.dataCoins;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_2__Inventory_scss___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 category-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__CategoryList__["a" /* default */], {
        dataCategories: this.state.categories,
        checkCategory: this.checkCategory,
        checkAll: this.checkAll,
        allCategories: this.state.allCategories,
        byPrice: this.byPrice,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mb-5 mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, dataCoins !== null ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__coins_Coins__["a" /* default */], {
        dataCategories: this.state.categories,
        dataCoins: dataCoins,
        orderByPrice: this.state.orderByPrice,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "LOADING"))));
    }
  }]);

  return Inventory;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Inventory.propTypes = {
  dataCoins: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(Object).isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Inventory);

/***/ }),

/***/ "./components/inventory/Inventory.scss":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = "\n@import url(\"https://use.typekit.net/bcx7vnk.css\");\n@import url(\"https://use.typekit.net/bcx7vnk.css\");\n/*Variables*/\nli {\n  font-family: mr-eaves-sans, sans-serif;\n  font-style: normal;\n  font-weight: 700; }\n/*Category List*/\n.category-list {\n  background-color: #3c434c;\n  min-height: 87vh; }\nli {\n  color: #fff;\n  font-size: 14px;\n  list-style: none; }\n";
})();

/***/ }),

/***/ "./components/inventory/coins/Coin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);


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
    key: "showCoinDetail",
    value: function showCoinDetail(id) {
      __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.push({
        pathname: "/inventory/".concat(id)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          coinData = _props.coinData,
          coinDetail = _props.coinDetail;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        key: coinData._id,
        className: "col-xl-4 col-md-4 col-sm-4 col-4 text-center mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, ">", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "img-fluid coin-image",
        src: coinData.images[1],
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "m-0 p-1 coin-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, coinData.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "coin-price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, "$", coinData.price), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "btn btn-md btn-gold",
        onClick: this.showCoinDetail.bind(this, coinData._id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, "ITEM DETAILS"));
    }
  }]);

  return Coin;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Coin.protoType = {
  coinData: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Coin);

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
      console.log(this.props.orderByPrice);
      var _props = this.props,
          dataCategories = _props.dataCategories,
          dataCoins = _props.dataCoins,
          orderByPrice = _props.orderByPrice;
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

                  if (filterCoin.length === index + 1) {
                    if (orderByPrice === false) {
                      dataCoinsClean.sort(function (a, b) {
                        Number(a.price) - Number(b.price);
                      });
                    } else {
                      dataCoinsClean.sort(function (a, b) {
                        return Number(a.price) - Number(b.price);
                      });
                    }
                  }
                });
              });
            }
          });
        });
      });
      var coinsData = dataCoinsClean.map(function (coin) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Coin__["a" /* default */], {
          key: coin._id,
          coinData: coin,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        });
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_1__Coins_scss___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row h-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, coinsData));
    }
  }]);

  return Coins;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Coins.propTypes = {
  dataCoins: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.arrayOf(Object).isRequired,
  dataCategories: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.arrayOf(Object).isRequired,
  orderByPrice: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Coins);

/***/ }),

/***/ "./components/inventory/coins/Coins.scss":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = "\n@import url(\"https://use.typekit.net/bcx7vnk.css\");\n@import url(\"https://use.typekit.net/bcx7vnk.css\");\n/*Variables*/\n.coin-detail-title, .coin-detail-description,\n.coin-detail-categories {\n  font-family: mrs-eaveas, serif;\n  font-style: normal;\n  font-weight: 400; }\n.validation-error, .validation-success {\n  font-family: mrs-eaveas, serif;\n  font-style: italic;\n  font-weight: 400; }\n.btn-gold, .coin-title {\n  font-family: mr-eaves-sans, sans-serif;\n  font-style: normal;\n  font-weight: 400; }\n.btn-gold {\n  background-color: #e9ab21;\n  color: #fff;\n  border-radius: 4px; }\n.btn-gold {\n  font-size: 16px;\n  padding: 10px 18px 10px 18px; }\n.btn-primary {\n  font-size: 14px;\n  padding: 10px 18px 10px 10px;\n  background-color: #1472b9; }\n.coin-title {\n  font-size: 20px; }\n.coin-price {\n  font-family: Roboto;\n  font-size: 16px; }\n.coin-image {\n  width: 230px; }\n.row-card {\n  border: 1px solid #d3d3d3;\n  box-shadow: 5px 5px 5px darkgrey; }\n.img-thumbnail:hover {\n  border: 1px solid #e9ab21; }\n.img-pinch {\n  width: 500px; }\n.coin-detail-categories {\n  font-size: 14px;\n  color: darkgrey; }\n.coin-detail-description {\n  font-size: 16px; }\n.coin-detail-price {\n  font-family: Roboto;\n  font-size: 32px; }\n.validation-error, .validation-success {\n  font-size: 16px; }\n.validation-error {\n  color: lightcoral; }\n.validation-success {\n  color: darkgreen; }\n";
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

/***/ "./pages/inventory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_inventory_Inventory__ = __webpack_require__("./components/inventory/Inventory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);



var _jsxFileName = "/home/tushita/mercuriodev/liberty-coin/client/pages/inventory.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var inventoryPage =
/*#__PURE__*/
function (_Component) {
  _inherits(inventoryPage, _Component);

  function inventoryPage() {
    _classCallCheck(this, inventoryPage);

    return _possibleConstructorReturn(this, (inventoryPage.__proto__ || Object.getPrototypeOf(inventoryPage)).apply(this, arguments));
  }

  _createClass(inventoryPage, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment, null, this.props.coins !== null ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_inventory_Inventory__["a" /* default */], {
        dataCoins: this.props.coins,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, "LOADING!"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_3_axios___default()("http://localhost:3000/api/all-coins");

              case 2:
                res = _context.sent;
                return _context.abrupt("return", {
                  coins: res.data
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return inventoryPage;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (inventoryPage);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/inventory.js");


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

/***/ })

/******/ });
//# sourceMappingURL=inventory.js.map
module.exports =
__NEXT_REGISTER_PAGE('/inventory', function() {
          var comp =
      webpackJsonp([5],{

/***/ "../node_modules/next/router.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../node_modules/next/dist/lib/router/index.js")


/***/ }),

/***/ "../node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./components/inventory/CategoryList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("../node_modules/next/node_modules/prop-types/index.js");
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
        className: "row h-100 mt-5",
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("../node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Inventory_scss__ = __webpack_require__("./components/inventory/Inventory.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Inventory_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Inventory_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mocks_categories__ = __webpack_require__("./components/inventory/mocks/categories.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mocks_categories___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__mocks_categories__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mocks_data__ = __webpack_require__("./components/inventory/mocks/data.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mocks_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__mocks_data__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CategoryList__ = __webpack_require__("./components/inventory/CategoryList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__coins_Coins__ = __webpack_require__("./components/inventory/coins/Coins.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__coins_CoinDetail__ = __webpack_require__("./components/inventory/coins/CoinDetail.js");


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
      categories: __WEBPACK_IMPORTED_MODULE_3__mocks_categories___default.a,
      allCategories: false,
      coins: __WEBPACK_IMPORTED_MODULE_4__mocks_data___default.a,
      coinDetailData: {},
      showDetail: true
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
          __html: __WEBPACK_IMPORTED_MODULE_2__Inventory_scss___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 category-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__CategoryList__["a" /* default */], {
        dataCategories: this.state.categories,
        checkCategory: this.checkCategory,
        checkAll: this.checkAll,
        allCategories: this.state.allCategories,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, this.state.showDetail === false ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__coins_Coins__["a" /* default */], {
        dataCategories: this.state.categories,
        dataCoins: this.state.coins,
        coinDetail: this.showCoinDetail,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__coins_CoinDetail__["a" /* default */], {
        coinDetail: this.showCoinDetail,
        coinDetailData: this.state.coinDetailData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
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

  module.exports = "\n@import url(\"https://use.typekit.net/bcx7vnk.css\");\n@import url(\"https://use.typekit.net/bcx7vnk.css\");\n/*Variables*/\nli {\n  font-family: mr-eaves-sans, sans-serif;\n  font-style: normal;\n  font-weight: 700; }\n/*Category List*/\n.category-list {\n  background-color: #3c434c;\n  min-height: 87vh; }\nli {\n  color: #fff;\n  font-size: 14px;\n  list-style: none; }\n";
})();

/***/ }),

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
        className: "img-fluid coin-image",
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("../node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pinchZoom_PinchZoom_js__ = __webpack_require__("./components/inventory/pinchZoom/PinchZoom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Coins_scss__ = __webpack_require__("./components/inventory/coins/Coins.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Coins_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Coins_scss__);


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

  function CoinDetail(props) {
    var _this;

    _classCallCheck(this, CoinDetail);

    _this = _possibleConstructorReturn(this, (CoinDetail.__proto__ || Object.getPrototypeOf(CoinDetail)).call(this, props));
    _this.state = {
      imgSelect: "/static/assets/coin_5.png"
    };
    return _this;
  }

  _createClass(CoinDetail, [{
    key: "changeImg",
    value: function changeImg() {
      ///ADD INDEX and MAP THE IMAGES
      var imgSelect = "/static/assets/coin_3.png"; // this.setState({ imgSelect: coinDetailData.images[index] });

      this.setState({
        imgSelect: "/static/assets/coin_3.png"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var coinDetailData = this.props.coinDetailData;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_3__Coins_scss___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row h-100 p-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "btn btn-primary btn-md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "fas fa-arrow-left pr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), "Back to Inventory")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row h-100 mt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-7 col-lg-8 p-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row text-center  h-75",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__pinchZoom_PinchZoom_js__["a" /* default */], {
        initialScale: "0",
        minScale: "1",
        maxScale: "10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "img-pinch",
        src: this.state.imgSelect,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-8 col-lg-8 mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-lg-4 col-xl-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "img-thumbnail",
        src: "/static/assets/coin_2.png",
        alt: "",
        onClick: this.changeImg.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-lg-4 col-xl-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "img-thumbnail",
        src: "/static/assets/coin_4.png",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-lg-4 col-xl-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "img-thumbnail",
        src: "/static/assets/coin_5.png",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-4 col-lg-4  mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row row-card p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12 text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        "class": "coin-detail-title mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, "1794 Flowing Hair Dollar"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        "class": "coin-detail-description mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, "An interesting coin with a bit of red peeking out from the middle of the cent, with more browns and greens near the rim. Most likely from the famous Randall Hoard, with the die crack that the hoard coins almost all have. Feel free to research the hoard, as it is quite a story. An interesting coin with a bit of red peeking out from the middle of the cent, with more browns and greens near the rim. Most likely from the famous Randall Hoard, with the die crack that the hoard coins almost all have. Feel free to research the hoard, as it is quite a story."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        "class": "coin-detail-categories",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, "Population: PCGS 63 in MS 62 RB, 210 higher. Certification#: 81765388"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row mt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        "class": "coin-detail-price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, "$4.500")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "btn btn-gold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, "ADD TO CART"))))))))));
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Coins_scss__ = __webpack_require__("./components/inventory/coins/Coins.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Coins_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Coins_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Coin__ = __webpack_require__("./components/inventory/coins/Coin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("../node_modules/next/node_modules/prop-types/index.js");
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

  module.exports = "\n@import url(\"https://use.typekit.net/bcx7vnk.css\");\n@import url(\"https://use.typekit.net/bcx7vnk.css\");\n/*Variables*/\n.coin-detail-title, .coin-detail-description,\n.coin-detail-categories {\n  font-family: mrs-eaveas, serif;\n  font-style: normal;\n  font-weight: 400; }\n.btn-gold, .coin-title {\n  font-family: mr-eaves-sans, sans-serif;\n  font-style: normal;\n  font-weight: 400; }\n.btn-gold {\n  background-color: #e9ab21;\n  color: #fff;\n  border-radius: 4px; }\n.btn-gold {\n  font-size: 16px;\n  padding: 10px 18px 10px 18px; }\n.btn-primary {\n  font-size: 14px;\n  padding: 10px 18px 10px 10px;\n  background-color: #1472b9; }\n.coin-title {\n  font-size: 20px; }\n.coin-price {\n  font-family: Roboto;\n  font-size: 16px; }\n.coin-image {\n  width: 200px; }\n.row-card {\n  border: 1px solid #d3d3d3;\n  box-shadow: 5px 5px 5px darkgrey; }\n.img-pinch {\n  width: 500px; }\n.coin-detail-categories {\n  font-size: 14px;\n  color: darkgrey; }\n.coin-detail-description {\n  font-size: 16px; }\n.coin-detail-price {\n  font-family: Roboto;\n  font-size: 32px; }\n";
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
  category: ["Dollars"]
}, {
  id: "6",
  name: "1933 Saint-Gaudens Double Eagle",
  description: "An interesting coin with a bit of red peeking out from the middle of the cent, with more browns and greens near the rim. Most likely from the famous Randall Hoard, with the die crack that the hoard coins almost all have. Feel free to research the hoard, as it is quite a story.",
  price: "$1,690",
  images: ["/static/assets/coin_1.png", "/static/assets/coin_2.png", "/static/assets/coin_3.png"],
  category: ["Gold Coins"]
}, {
  id: "7",
  name: "1787 Brasher Doubloon",
  description: "An interesting coin with a bit of red peeking out from the middle of the cent, with more browns and greens near the rim. Most likely from the famous Randall Hoard, with the die crack that the hoard coins almost all have. Feel free to research the hoard, as it is quite a story.",
  price: "$1,690",
  images: ["/static/assets/coin_1.png", "/static/assets/coin_2.png", "/static/assets/coin_3.png"],
  category: ["PGCS Graded Coins"]
}, {
  id: "8",
  name: "1794 Flowing",
  description: "An interesting coin with a bit of red peeking out from the middle of the cent, with more browns and greens near the rim. Most likely from the famous Randall Hoard, with the die crack that the hoard coins almost all have. Feel free to research the hoard, as it is quite a story.",
  price: "$1,690",
  images: ["/static/assets/coin_1.png", "/static/assets/coin_2.png", "/static/assets/coin_3.png"],
  category: ["PGCS Graded Coins"]
}, {
  id: "9",
  name: "1804 Draped Bust Dollar",
  description: "An interesting coin with a bit of red peeking out from the middle of the cent, with more browns and greens near the rim. Most likely from the famous Randall Hoard, with the die crack that the hoard coins almost all have. Feel free to research the hoard, as it is quite a story.",
  price: "$1,690",
  images: ["/static/assets/coin_1.png", "/static/assets/coin_2.png", "/static/assets/coin_3.png"],
  category: ["Featured Coins"]
}, {
  id: "10",
  name: "1794 Flowing Hair Dollar",
  description: "An interesting coin with a bit of red peeking out from the middle of the cent, with more browns and greens near the rim. Most likely from the famous Randall Hoard, with the die crack that the hoard coins almost all have. Feel free to research the hoard, as it is quite a story.",
  price: "$1,690",
  images: ["/static/assets/coin_1.png", "/static/assets/coin_2.png", "/static/assets/coin_3.png"],
  category: ["Featured Coins"]
}];

/***/ }),

/***/ "./components/inventory/pinchZoom/PinchZoom.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinchZoomPan; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("../node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PinchZoom_scss__ = __webpack_require__("./components/inventory/pinchZoom/PinchZoom.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PinchZoom_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__PinchZoom_scss__);


var _jsxFileName = "/home/tushita/mercuriodev/liberty-coin/client/components/inventory/pinchZoom/PinchZoom.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var SNAP_TOLERANCE = 0.001;
var OVER_TRANSFORMATION_TOLERANCE = 0.05;
var DOUBLE_TAP_THRESHOLD = 100;
var ANIMATION_SPEED = 0.1;

var snapToTarget = function snapToTarget(value, target, tolerance) {
  var withinRange = Math.abs(target - value) < tolerance;
  return withinRange ? target : value;
};

var rangeBind = function rangeBind(lowerBound, upperBound, value) {
  return Math.min(upperBound, Math.max(lowerBound, value));
};

var invert = function invert(value) {
  return value * -1;
};

var getRelativePosition = function getRelativePosition(_ref, relativeToElement) {
  var clientX = _ref.clientX,
      clientY = _ref.clientY;
  var rect = relativeToElement.getBoundingClientRect();
  return {
    x: clientX - rect.left,
    y: clientY - rect.top
  };
};

var getMidpoint = function getMidpoint(pointA, pointB) {
  return {
    x: (pointA.x + pointB.x) / 2,
    y: (pointA.y + pointB.y) / 2
  };
};

var getDistanceBetweenPoints = function getDistanceBetweenPoints(pointA, pointB) {
  return Math.sqrt(Math.pow(pointA.y - pointB.y, 2) + Math.pow(pointA.x - pointB.x, 2));
};

var ZoomOutButton = function ZoomOutButton(_ref2) {
  var disabled = _ref2.disabled,
      onClick = _ref2.onClick;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    className: "iconButton",
    style: {
      margin: "10px"
    },
    onClick: onClick,
    disabled: disabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    "class": "fas fa-minus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }), " ");
};

var ZoomInButton = function ZoomInButton(_ref3) {
  var disabled = _ref3.disabled,
      onClick = _ref3.onClick;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    className: "iconButton",
    style: {
      margin: "10px",
      marginLeft: "0px"
    },
    onClick: onClick,
    disabled: disabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    "class": "fas fa-plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }));
};

var PinchZoomPan =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PinchZoomPan, _React$Component);

  function PinchZoomPan(props) {
    var _this;

    _classCallCheck(this, PinchZoomPan);

    _this = _possibleConstructorReturn(this, (PinchZoomPan.__proto__ || Object.getPrototypeOf(PinchZoomPan)).call(this, props));
    _this.state = {
      padding: "0px"
    };
    _this.handleTouchStart = _this.handleTouchStart.bind(_assertThisInitialized(_this));
    _this.handleTouchMove = _this.handleTouchMove.bind(_assertThisInitialized(_this));
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_assertThisInitialized(_this));
    _this.handleMouseDown = _this.handleMouseDown.bind(_assertThisInitialized(_this));
    _this.handleMouseMove = _this.handleMouseMove.bind(_assertThisInitialized(_this));
    _this.handleMouseUp = _this.handleMouseUp.bind(_assertThisInitialized(_this));
    _this.handleMouseWheel = _this.handleMouseWheel.bind(_assertThisInitialized(_this));
    _this.handleWindowResize = _this.handleWindowResize.bind(_assertThisInitialized(_this));
    _this.handleImageLoad = _this.handleImageLoad.bind(_assertThisInitialized(_this));
    return _this;
  } //event handlers


  _createClass(PinchZoomPan, [{
    key: "handleTouchStart",
    value: function handleTouchStart(event) {
      this.animation && cancelAnimationFrame(this.animation);
      var touches = event.touches;

      if (touches.length === 2) {
        this.pinchStart(touches);
        this.lastPanPointerPosition = null;
      } else if (touches.length === 1) {
        this.pointerDown(touches[0]);
      }
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(event) {
      var touches = event.touches;

      if (touches.length === 2) {
        //suppress viewport scaling
        event.preventDefault();
        this.pinchChange(touches);
      } else if (touches.length === 1) {
        var swipingDown = this.pan(touches[0]) > 0;

        if (swipingDown && this.state.top < 0) {
          //suppress pull-down-refresh since swiping down will reveal the hidden overflow of the image
          event.preventDefault();
        }
      }
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd(event) {
      if (event.touches && event.touches.length > 0) return null; //We allow transient +/-5% over-pinching.
      //Animate the bounce back to constraints if applicable.

      this.ensureValidTransform(ANIMATION_SPEED);
      this.pointerUp(event.timeStamp); //suppress mouseUp, in case of tap

      event.preventDefault();
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(event) {
      this.animation && cancelAnimationFrame(this.animation);
      this.mouseDown = true;
      this.pointerDown(event);
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(event) {
      if (!this.mouseDown) return null;
      this.pan(event);
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(event) {
      this.pointerUp(event.timeStamp);

      if (this.mouseDown) {
        this.mouseDown = false;
      }
    }
  }, {
    key: "handleMouseWheel",
    value: function handleMouseWheel(event) {
      this.animation && cancelAnimationFrame(this.animation);
      var point = getRelativePosition(event, this.container);

      if (event.deltaY > 0) {
        if (this.state.scale > this.minScale) {
          this.zoomOut(point);
          event.preventDefault();
        }
      } else if (event.deltaY < 0) {
        if (this.state.scale < this.props.maxScale) {
          this.zoomIn(point);
          event.preventDefault();
        }
      }
    }
  }, {
    key: "handleWindowResize",
    value: function handleWindowResize(event) {
      this.ensureConstraints();
    }
  }, {
    key: "handleImageLoad",
    value: function handleImageLoad() {
      this.ensureConstraints();
    } //actions

  }, {
    key: "pointerDown",
    value: function pointerDown(clientPosition) {
      this.lastPanPointerPosition = getRelativePosition(clientPosition, this.container);
    }
  }, {
    key: "pan",
    value: function pan(pointerClientPosition) {
      var pointerPosition = getRelativePosition(pointerClientPosition, this.container);
      var translateX = pointerPosition.x - this.lastPanPointerPosition.x;
      var translateY = pointerPosition.y - this.lastPanPointerPosition.y;
      var top = this.state.top + translateY;
      var left = this.state.left + translateX; //use 0 tolerance to prevent over-panning (doesn't look good)

      this.move(top, left, 0);
      this.lastPanPointerPosition = pointerPosition;
      return translateY > 0 ? 1 //swiping down
      : translateY < 0 ? -1 //swiping up
      : 0;
    }
  }, {
    key: "pointerUp",
    value: function pointerUp(timeStamp) {
      if (this.lastPointerUpTimeStamp && this.lastPointerUpTimeStamp + DOUBLE_TAP_THRESHOLD > timeStamp) {
        //reset
        this.transformToProps(ANIMATION_SPEED);
      }

      this.lastPointerUpTimeStamp = timeStamp;
    }
  }, {
    key: "move",
    value: function move(top, left, tolerance) {
      var speed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      this.applyTransform(top, left, this.state.scale, tolerance, speed);
    }
  }, {
    key: "pinchStart",
    value: function pinchStart(touches) {
      var pointA = getRelativePosition(touches[0], this.container);
      var pointB = getRelativePosition(touches[1], this.container);
      this.lastPinchLength = getDistanceBetweenPoints(pointA, pointB);
    }
  }, {
    key: "pinchChange",
    value: function pinchChange(touches) {
      var pointA = getRelativePosition(touches[0], this.container);
      var pointB = getRelativePosition(touches[1], this.container);
      var length = getDistanceBetweenPoints(pointA, pointB);
      var scale = this.state.scale * length / this.lastPinchLength;
      var midpoint = getMidpoint(pointA, pointB);
      this.zoom(scale, midpoint, OVER_TRANSFORMATION_TOLERANCE);
      this.lastPinchMidpoint = midpoint;
      this.lastPinchLength = length;
    }
  }, {
    key: "zoomIn",
    value: function zoomIn(midpoint) {
      midpoint = midpoint || {
        x: this.container.offsetWidth / 2,
        y: this.container.offsetHeight / 2
      };
      this.zoom(this.state.scale * 5, midpoint, 0);
      this.setState({
        padding: "150px"
      });
    }
  }, {
    key: "zoomOut",
    value: function zoomOut(midpoint) {
      midpoint = midpoint || {
        x: this.container.offsetWidth / 2,
        y: this.container.offsetHeight / 2
      };
      this.zoom(this.state.scale * 0.2, midpoint, 0);
      var padding;
      this.state.scale === 10 ? padding = 80 : padding = 0;
      console.log(padding, this.state.scale);
      this.setState({
        padding: "".concat(padding, "px")
      });
      console.log(this.state.padding);
    }
  }, {
    key: "zoom",
    value: function zoom(scale, midpoint, tolerance) {
      var speed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      scale = this.getValidTransform(0, 0, scale, tolerance).scale;
      var incrementalScalePercentage = (this.state.scale - scale) / this.state.scale;
      var translateY = (midpoint.y - this.state.top) * incrementalScalePercentage;
      var translateX = (midpoint.x - this.state.left) * incrementalScalePercentage;
      var top = this.state.top + translateY;
      var left = this.state.left + translateX;
      this.applyTransform(top, left, scale, tolerance, speed);
    } //state validation and transformation methods

  }, {
    key: "applyTransform",
    value: function applyTransform(requestedTop, requestedLeft, requestedScale, tolerance) {
      var _this2 = this;

      var speed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

      var _getValidTransform = this.getValidTransform(requestedTop, requestedLeft, requestedScale, tolerance),
          top = _getValidTransform.top,
          left = _getValidTransform.left,
          scale = _getValidTransform.scale;

      if (this.state.scale === scale && this.state.top === top && this.state.left === left) {
        return;
      }

      if (speed > 0) {
        var frame = function frame() {
          var translateY = top - _this2.state.top;
          var translateX = left - _this2.state.left;
          var translateScale = scale - _this2.state.scale;
          var nextTransform = {
            top: snapToTarget(_this2.state.top + speed * translateY, top, SNAP_TOLERANCE),
            left: snapToTarget(_this2.state.left + speed * translateX, left, SNAP_TOLERANCE),
            scale: snapToTarget(_this2.state.scale + speed * translateScale, scale, SNAP_TOLERANCE)
          };

          _this2.setState(nextTransform, function () {
            return _this2.animation = requestAnimationFrame(frame);
          });
        };

        this.animation = requestAnimationFrame(frame);
      } else {
        this.setState({
          top: top,
          left: left,
          scale: scale
        });
      }
    }
  }, {
    key: "getValidTransform",
    value: function getValidTransform(top, left, scale, tolerance) {
      var transform = {
        scale: scale || 1,
        top: top || 0,
        left: left || 0
      };
      var lowerBoundFactor = 1.0 - tolerance;
      var upperBoundFactor = 1.0 + tolerance;
      transform.scale = rangeBind(this.minScale * lowerBoundFactor, this.props.maxScale * upperBoundFactor, transform.scale); //get dimensions by which scaled image overflows container

      var negativeSpace = this.calculateNegativeSpace(transform.scale);
      var overflow = {
        width: Math.max(0, invert(negativeSpace.width)),
        height: Math.max(0, invert(negativeSpace.height))
      }; //prevent moving by more than the overflow
      //example: overflow.height = 100, tolerance = 0.05 => top is constrained between -105 and +5

      transform.top = rangeBind(invert(overflow.height) * upperBoundFactor, overflow.height * upperBoundFactor - overflow.height, transform.top);
      transform.left = rangeBind(invert(overflow.width) * upperBoundFactor, overflow.width * upperBoundFactor - overflow.width, transform.left);
      return transform;
    }
  }, {
    key: "transformToProps",
    value: function transformToProps() {
      var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var scale = this.props.initialScale === "auto" ? this.calculateAutofitScale() : this.props.initialScale;
      this.applyTransform(this.props.initialTop, this.props.initialLeft, scale, 0, speed);
    }
  }, {
    key: "ensureValidTransform",
    value: function ensureValidTransform() {
      var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.applyTransform(this.state.top, this.state.left, this.state.scale, 0, speed);
    } //lifecycle methods

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var childElement = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only(this.props.children);
      var originalRef = childElement.ref;

      var composedRef = function composedRef(element) {
        _this3.image = element;

        if (typeof originalRef === "function") {
          originalRef(element);
        }
      };

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_2__PinchZoom_scss___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        }
      }), this.props.zoomButtons && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          position: "absolute",
          bottom: 0,
          right: 0,
          zIndex: 1000
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ZoomOutButton, {
        onClick: function onClick() {
          return _this3.zoomOut();
        },
        disabled: this.state.scale <= this.minScale,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ZoomInButton, {
        onClick: function onClick() {
          return _this3.zoomIn();
        },
        disabled: this.state.scale >= this.props.maxScale,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(childElement, {
        onTouchStart: this.handleTouchStart,
        onTouchEnd: this.handleTouchEnd,
        onMouseDown: this.handleMouseDown,
        onMouseMove: this.handleMouseMove,
        onMouseUp: this.handleMouseUp,
        onWheel: this.handleMouseWheel,
        onDragStart: function onDragStart(event) {
          return event.preventDefault();
        },
        onLoad: this.handleImageLoad,
        ref: composedRef,
        style: {
          cursor: "pointer",
          transform: "translate3d(".concat(this.state.left, "px, ").concat(this.state.top, "px, 0) scale(").concat(this.state.scale, ")"),
          transformOrigin: "0 0",
          padding: "".concat(this.state.padding)
        }
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.image.addEventListener("touchmove", this.handleTouchMove, {
        passive: false
      });
      window.addEventListener("resize", this.handleWindowResize); //Using the child image's original parent enables flex items, e.g., dimensions not explicitly set

      this.container = this.image.parentNode.parentNode;

      if (this.image.offsetWidth && this.image.offsetHeight) {
        this.applyConstraints();
        this.transformToProps();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.image.offsetWidth && this.image.offsetHeight) {
        this.ensureConstraints();

        if (typeof this.state.scale === "undefined") {
          //reset to new props
          this.transformToProps();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.image.removeEventListener("touchmove", this.handleTouchMove);
      window.removeEventListener("resize", this.handleWindowResize);
    } //sizing methods

  }, {
    key: "ensureConstraints",
    value: function ensureConstraints() {
      if (this.image.offsetWidth && this.image.offsetHeight) {
        var negativeSpace = this.calculateNegativeSpace(1);

        if (!this.lastUnzoomedNegativeSpace || negativeSpace.height !== this.lastUnzoomedNegativeSpace.height || negativeSpace.width !== this.lastUnzoomedNegativeSpace.width) {
          //image and/or container dimensions have been set / updated
          this.applyConstraints();
          this.forceUpdate();
        }
      }
    }
  }, {
    key: "applyConstraints",
    value: function applyConstraints() {
      var minScale = 1;

      if (this.props.minScale === "auto") {
        minScale = this.calculateAutofitScale();
      } else {
        minScale = this.props.minScale;
      }

      if (this.minScale !== minScale) {
        this.minScale = minScale;
        this.ensureValidTransform();
      }

      this.lastUnzoomedNegativeSpace = this.calculateNegativeSpace(1);
    }
  }, {
    key: "calculateNegativeSpace",
    value: function calculateNegativeSpace() {
      var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.scale;
      //get difference in dimension between container and scaled image
      var width = this.container.offsetWidth - scale * this.image.offsetWidth;
      var height = this.container.offsetHeight - scale * this.image.offsetHeight;
      return {
        width: width,
        height: height
      };
    }
  }, {
    key: "calculateAutofitScale",
    value: function calculateAutofitScale() {
      var autofitScale = 1;

      if (this.image.offsetWidth > 0) {
        autofitScale = Math.min(this.container.offsetWidth / this.image.offsetWidth, autofitScale);
      }

      if (this.image.offsetHeight > 0) {
        autofitScale = Math.min(this.container.offsetHeight / this.image.offsetHeight, autofitScale);
      }

      return autofitScale;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.initialTop !== prevState.initialTop || nextProps.initialLeft !== prevState.initialLeft || nextProps.initialScale !== prevState.initialScale) {
        return {
          initialTop: nextProps.initialTop,
          initialLeft: nextProps.initialLeft,
          initialScale: nextProps.initialScale
        };
      } else {
        return null;
      }
    }
  }]);

  return PinchZoomPan;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);


PinchZoomPan.defaultProps = {
  initialTop: 0,
  initialLeft: 0,
  initialScale: 1,
  minScale: 1,
  maxScale: 10,
  zoomButtons: true
};
PinchZoomPan.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
};

/***/ }),

/***/ "./components/inventory/pinchZoom/PinchZoom.scss":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = ".iconButton {\n  background-image: linear-gradient(to bottom, #fff 0%, #e0e0e0 100%);\n  background-color: #fff;\n  background-repeat: repeat-x;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);\n  padding: 8px;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  cursor: pointer;\n  text-shadow: 0 1px 0 #fff;\n  color: #333;\n  font-size: 18px;\n  line-height: 12px; }\n\n.iconButton:hover {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n  background-position: 0 -15px; }\n\n.iconButton[disabled] {\n  opacity: .65;\n  box-shadow: none;\n  background-color: #e0e0e0;\n  background-image: none; }\n\n.iconButton[disabled]:hover {\n  border-color: #ccc;\n  cursor: default; }\n";
})();

/***/ }),

/***/ "./pages/inventory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
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
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/inventory")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/inventory.js");


/***/ })

},[4])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=inventory.js.map
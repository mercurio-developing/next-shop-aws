module.exports =
__NEXT_REGISTER_PAGE('/inventory', function() {
          var comp =
      webpackJsonp([6],{

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
        className: "far fa-check-circle pr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "far fa-circle pr-2",
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
          key: id,
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
          className: "far fa-check-circle pr-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
          className: "far fa-circle pr-2",
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("../node_modules/next/node_modules/prop-types/index.js");
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
      coins: _this.props.coins,
      coinDetailData: {},
      showDetail: false
    };
    _this.checkCategory = _this.checkCategory.bind(_assertThisInitialized(_this));
    _this.checkAll = _this.checkAll.bind(_assertThisInitialized(_this));
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
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_2__Inventory_scss___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 category-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__CategoryList__["a" /* default */], {
        dataCategories: this.state.categories,
        checkCategory: this.checkCategory,
        checkAll: this.checkAll,
        allCategories: this.state.allCategories,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, this.state.coins ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__coins_Coins__["a" /* default */], {
        dataCategories: this.state.categories,
        dataCoins: this.state.coins,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "Loading.."))));
    }
  }]);

  return Inventory;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Inventory.propTypes = {
  coins: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(Object).isRequired
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("../node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("../node_modules/next/router.js");
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
        className: "col-xl-4 col-md-4 col-sm-4 col-4 text-center mt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "img-fluid coin-image",
        src: coinData.images[1],
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "mt-2 coin-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, coinData.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "coin-price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, coinData.price), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "btn btn-md btn-gold",
        onClick: this.showCoinDetail.bind(this, coinData._id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
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
      console.log(dataCoins);
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
            lineNumber: 38
          }
        });
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_1__Coins_scss___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row h-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, coinsData));
    }
  }]);

  return Coins;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Coins.propTypes = {
  dataCoins: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.arrayOf(Object).isRequired,
  dataCategories: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.arrayOf(Object).isRequired
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

/***/ "./pages/inventory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_inventory_Inventory__ = __webpack_require__("./components/inventory/Inventory.js");


var _jsxFileName = "/home/tushita/mercuriodev/liberty-coin/client/pages/inventory.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_inventory_Inventory__["a" /* default */], {
        coins: this.props.coins,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var req = _ref.req,
          query = _ref.query;
      var coins;

      if (req) {
        coins = query.query;
      }

      return {
        coins: coins
      };
    }
  }]);

  return inventoryPage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (inventoryPage);
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

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/inventory.js");


/***/ })

},[5])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=inventory.js.map
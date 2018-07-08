module.exports =
__NEXT_REGISTER_PAGE('/inventory', function() {
          var comp =
      webpackJsonp([5],{

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Inventory_scss__ = __webpack_require__("./components/inventory/Inventory.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Inventory_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Inventory_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coins_Coins__ = __webpack_require__("./components/inventory/coins/Coins.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CategoryList__ = __webpack_require__("./components/inventory/CategoryList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mocks_categories__ = __webpack_require__("./components/inventory/mocks/categories.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mocks_categories___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__mocks_categories__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mocks_data__ = __webpack_require__("./components/inventory/mocks/data.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mocks_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__mocks_data__);


var _jsxFileName = "/home/tushita/mercuriodev/liberty-coin/client/components/inventory/Inventory.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




 // Mocks




var Inventory =
/*#__PURE__*/
function (_Component) {
  _inherits(Inventory, _Component);

  function Inventory(props) {
    var _this;

    _classCallCheck(this, Inventory);

    _this = _possibleConstructorReturn(this, (Inventory.__proto__ || Object.getPrototypeOf(Inventory)).call(this, props));
    _this.state = {
      categories: __WEBPACK_IMPORTED_MODULE_4__mocks_categories___default.a,
      allCategories: false,
      coins: __WEBPACK_IMPORTED_MODULE_5__mocks_data___default.a
    };
    _this.checkCategory = _this.checkCategory.bind(_assertThisInitialized(_this));
    _this.checkAll = _this.checkAll.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Inventory, [{
    key: "checkCategory",
    value: function checkCategory(id) {
      var dataCategories = this.state.categories;
      dataCategories[id].checked = !dataCategories[id].checked;
      this.setState({
        categories: dataCategories
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
          __html: __WEBPACK_IMPORTED_MODULE_1__Inventory_scss___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row h-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 category-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__CategoryList__["a" /* default */], {
        dataCategories: this.state.categories,
        checkCategory: this.checkCategory,
        checkAll: this.checkAll,
        allCategories: this.state.allCategories,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coins_Coins__["a" /* default */], {
        dataCategories: this.state.categories,
        dataCoins: this.state.coins,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
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
            lineNumber: 54
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          className: "img-fluid ",
          src: coin.images[1],
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          className: "mt-2 coin-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, coin.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          className: "coin-price",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, coin.price), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          className: "btn btn-md btn-gold ",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }, "ITEM DETAILS"));
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_1__Coins_scss___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row h-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
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
  category: ["World Coins", "Dimes"]
}, {
  id: "3",
  name: "MONEDA 3",
  description: "An interesting coin with a bit of red peeking out from the middle of the cent, with more browns and greens near the rim. Most likely from the famous Randall Hoard, with the die crack that the hoard coins almost all have. Feel free to research the hoard, as it is quite a story.",
  price: "$1,690",
  images: ["/static/assets/coin_1.png", "/static/assets/coin_2.png", "/static/assets/coin_3.png"],
  category: ["Dollars"]
}, {
  id: "4",
  name: "MONEDA 4",
  description: "An interesting coin with a bit of red peeking out from the middle of the cent, with more browns and greens near the rim. Most likely from the famous Randall Hoard, with the die crack that the hoard coins almost all have. Feel free to research the hoard, as it is quite a story.",
  price: "$1,690",
  images: ["/static/assets/coin_1.png", "/static/assets/coin_2.png", "/static/assets/coin_3.png"],
  category: ["Bullion Coins", "Dimes"]
}, {
  id: "5",
  name: "MONEDA 5",
  description: "An interesting coin with a bit of red peeking out from the middle of the cent, with more browns and greens near the rim. Most likely from the famous Randall Hoard, with the die crack that the hoard coins almost all have. Feel free to research the hoard, as it is quite a story.",
  price: "$1,690",
  images: ["/static/assets/coin_1.png", "/static/assets/coin_2.png", "/static/assets/coin_3.png"],
  category: ["Dimes", "Dollars"]
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
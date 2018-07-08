webpackHotUpdate(5,{

/***/ "./components/inventory/Inventory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Inventory_scss__ = __webpack_require__("./components/inventory/Inventory.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Inventory_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Inventory_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coins_Coins__ = __webpack_require__("./components/inventory/coins/Coins.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coins_Coins___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__coins_Coins__);
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
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__coins_Coins__["default"], {
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

/***/ "./components/inventory/coins/Coins.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: /home/tushita/mercuriodev/liberty-coin/client/components/inventory/coins/Coins.js: Unexpected token, expected \",\" (38:10)\n\n  36 |             dataCoinsClean = arra;\n  37 |           });\n> 38 |         });\n     |           ^\n  39 |       });\n  40 | \n  41 |     // if (filterCoin.length === index + 1) {\n    at _class.raise (/home/tushita/mercuriodev/liberty-coin/node_modules/@babel/core/node_modules/babylon/lib/index.js:778:15)\n    at _class.unexpected (/home/tushita/mercuriodev/liberty-coin/node_modules/@babel/core/node_modules/babylon/lib/index.js:2063:16)\n    at _class.expect (/home/tushita/mercuriodev/liberty-coin/node_modules/@babel/core/node_modules/babylon/lib/index.js:2051:28)\n    at _class.parseCallExpressionArguments (/home/tushita/mercuriodev/liberty-coin/node_modules/@babel/core/node_modules/babylon/lib/index.js:2913:14)\n    at _class.parseSubscript (/home/tushita/mercuriodev/liberty-coin/node_modules/@babel/core/node_modules/babylon/lib/index.js:2830:32)\n    at _class.parseSubscripts (/home/tushita/mercuriodev/liberty-coin/node_modules/@babel/core/node_modules/babylon/lib/index.js:2745:19)\n    at _class.parseExprSubscripts (/home/tushita/mercuriodev/liberty-coin/node_modules/@babel/core/node_modules/babylon/lib/index.js:2735:17)\n    at _class.parseMaybeUnary (/home/tushita/mercuriodev/liberty-coin/node_modules/@babel/core/node_modules/babylon/lib/index.js:2704:21)\n    at _class.parseExprOps (/home/tushita/mercuriodev/liberty-coin/node_modules/@babel/core/node_modules/babylon/lib/index.js:2616:21)\n    at _class.parseMaybeConditional (/home/tushita/mercuriodev/liberty-coin/node_modules/@babel/core/node_modules/babylon/lib/index.js:2588:21)\n    at _class.parseMaybeAssign (/home/tushita/mercuriodev/liberty-coin/node_modules/@babel/core/node_modules/babylon/lib/index.js:2546:21)\n    at _class.parseExpression (/home/tushita/mercuriodev/liberty-coin/node_modules/@babel/core/node_modules/babylon/lib/index.js:2499:21)\n    at _class.parseStatementContent (/home/tushita/mercuriodev/liberty-coin/node_modules/@babel/core/node_modules/babylon/lib/index.js:4040:21)\n    at _class.parseStatement (/home/tushita/mercuriodev/liberty-coin/node_modules/@babel/core/node_modules/babylon/lib/index.js:3926:17)\n    at _class.parseBlockOrModuleBlockBody (/home/tushita/mercuriodev/liberty-coin/node_modules/@babel/core/node_modules/babylon/lib/index.js:4470:23)\n    at _class.parseBlockBody (/home/tushita/mercuriodev/liberty-coin/node_modules/@babel/core/node_modules/babylon/lib/index.js:4457:10)\n    at _class.parseBlock (/home/tushita/mercuriodev/liberty-coin/node_modules/@babel/core/node_modules/babylon/lib/index.js:4446:10)\n    at _class.parseFunctionBody (/home/tushita/mercuriodev/liberty-coin/node_modules/@babel/core/node_modules/babylon/lib/index.js:3722:24)\n    at _class.parseFunctionBodyAndFinish (/home/tushita/mercuriodev/liberty-coin/node_modules/@babel/core/node_modules/babylon/lib/index.js:3702:10)\n    at _class.parseMethod (/home/tushita/mercuriodev/liberty-coin/node_modules/@babel/core/node_modules/babylon/lib/index.js:3654:10)\n    at _class.pushClassMethod (/home/tushita/mercuriodev/liberty-coin/node_modules/@babel/core/node_modules/babylon/lib/index.js:4847:30)\n    at _class.parseClassMemberWithIsStatic (/home/tushita/mercuriodev/liberty-coin/node_modules/@babel/core/node_modules/babylon/lib/index.js:4766:12)");

/***/ }),

/***/ "./components/inventory/coins/Coins.scss":
false

})
//# sourceMappingURL=5.9e35f0688c087591a160.hot-update.js.map
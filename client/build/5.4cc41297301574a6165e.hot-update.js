webpackHotUpdate(5,{

/***/ "./components/inventory/Inventory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
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
      showDetail: false
    };
    _this.checkCategory = _this.checkCategory.bind(_assertThisInitialized(_this));
    _this.checkAll = _this.checkAll.bind(_assertThisInitialized(_this));
    _this.showCoinDetail = _this.showCoinDetail.bind(_assertThisInitialized(_this), id);
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
    key: "showCoinDetail",
    value: function showCoinDetail(id) {
      this.setState({
        showDetail: !showDetail
      });
      console.log(this.state.showDetail);
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
          lineNumber: 45
        }
      }), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row h-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 category-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__CategoryList__["a" /* default */], {
        dataCategories: this.state.categories,
        checkCategory: this.checkCategory,
        checkAll: this.checkAll,
        allCategories: this.state.allCategories,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, this.state.showDetail === false ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__coins_Coins__["a" /* default */], {
        dataCategories: this.state.categories,
        dataCoins: this.state.coins,
        coinDetail: this.showCoinDetail,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, "SHOW DETAIL"))));
    }
  }]);

  return Inventory;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Inventory);

/***/ })

})
//# sourceMappingURL=5.4cc41297301574a6165e.hot-update.js.map
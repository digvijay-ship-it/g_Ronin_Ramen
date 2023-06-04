"use strict";
(self["webpackChunkg_ronin_ramen"] = self["webpackChunkg_ronin_ramen"] || []).push([["home"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/home/homeStyle.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/home/homeStyle.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../chang-chang-font/Changchangwoodcut-BL25.ttf */ "./src/chang-chang-font/Changchangwoodcut-BL25.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./homeImg/clouds/main.png */ "./src/home/homeImg/clouds/main.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./homeImg/redCircle.png */ "./src/home/homeImg/redCircle.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'samurai-font';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2');\n    font-weight: 600;\n    font-style: normal;\n  }\nhtml,body{\n    height: 100%;\n    width: 100%;\n    margin: 0px;\n    font-family: 'samurai-font','Courier New', Courier, monospace;\n}\n.content{\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-rows:15% 85%;\n    background-color: white \n}\n.header{\n    background-color: red;\n    grid-column: 1/-1;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: 500px;\n    display: flex;\n    align-items: center;\n    background-color: white;\n    border-radius: 1rem;\n}\n\n.home,.menu,.aboutMe{\n    color: rgb(45,48,53);\n    font-size: 5rem;\n    flex:1; \n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* -webkit-text-stroke:.rem white ; */\n}\n.home p,.menu p,.aboutMe p{\n    border-radius: 1rem;\n}\n\n.wobble:hover {\n    animation: wobble 0.6s ease-in-out 1;\n}\n\n@keyframes wobble {\n    0% { transform: rotate(0deg); }\n    15% { transform: rotate(-10deg); }\n    30% { transform: rotate(10deg); }\n    45% { transform: rotate(-15deg); }\n    60% { transform: rotate(15deg); }\n    75% { transform: rotate(-10deg); }\n    90% { transform: rotate(10deg); }\n    100% { transform: rotate(0deg); }\n}\n\n.mainContainer{\n    display: grid;\n    grid-template-rows: repeat(1,100%);\n    grid-template-columns: 1.5fr 1fr 1fr 1.5fr;\n    overflow: hidden;\n}\n.leftSubMain{\n    background-color: white ;\n    grid-column: 1/3;\n    grid-row: 1/-1;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: 110%;\n    background-repeat: no-repeat;\n    background-position: -13vw -19vh;\n}\n.rightSubMain{\n    background-color: black ;\n    grid-column: 3/-1;\n    grid-row: 1/-1;\n    display: flex;\n    justify-content: start;\n}\n.yinYangdiv{\n    grid-column: 2/4;\n    grid-row: 1/-1;\n    display: flex;\n    justify-content: center;\n}\n.yinYangdiv img{\n    position: relative;\n    height: 100%;   \n    width: 100%;\n}\n\n.ninja{\n    width: 60%;\n    height: 110%;\n}\n.samurai{\n    margin-left: 40%;\n    align-self: flex-end;\n    width: 55%;\n    height: 100%;\n}\n.weaponDiv{\n    grid-row: 1/-1;\n    grid-column: 1/-1;\n    display: flex;\n    width: 100%;\n    height:100%;\n    justify-content: space-between;\n    align-items: end;\n}\n.weaponDiv img{\n    height: 150px;\n    width: 150px;\n}\n.headbandDiv{\n    background-color: black;\n    border-radius: 50%;\n}\n.maskDiv{\n    background-color: rgb(249,252,243);\n    border-radius: 50%;\n}", "",{"version":3,"sources":["webpack://./src/home/homeStyle.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,4DAA0E;IAC1E,gBAAgB;IAChB,kBAAkB;EACpB;AACF;IACI,YAAY;IACZ,WAAW;IACX,WAAW;IACX,6DAA6D;AACjE;AACA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,0BAA0B;IAC1B;AACJ;AACA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,yDAAkD;IAClD,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;IACpB,eAAe;IACf,MAAM;IACN,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,qCAAqC;AACzC;AACA;IACI,mBAAmB;AACvB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,KAAK,uBAAuB,EAAE;IAC9B,MAAM,yBAAyB,EAAE;IACjC,MAAM,wBAAwB,EAAE;IAChC,MAAM,yBAAyB,EAAE;IACjC,MAAM,wBAAwB,EAAE;IAChC,MAAM,yBAAyB,EAAE;IACjC,MAAM,wBAAwB,EAAE;IAChC,OAAO,uBAAuB,EAAE;AACpC;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,0CAA0C;IAC1C,gBAAgB;AACpB;AACA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,cAAc;IACd,yDAAgD;IAChD,qBAAqB;IACrB,4BAA4B;IAC5B,gCAAgC;AACpC;AACA;IACI,wBAAwB;IACxB,iBAAiB;IACjB,cAAc;IACd,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,gBAAgB;IAChB,cAAc;IACd,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,UAAU;IACV,YAAY;AAChB;AACA;IACI,gBAAgB;IAChB,oBAAoB;IACpB,UAAU;IACV,YAAY;AAChB;AACA;IACI,cAAc;IACd,iBAAiB;IACjB,aAAa;IACb,WAAW;IACX,WAAW;IACX,8BAA8B;IAC9B,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,kBAAkB;AACtB;AACA;IACI,kCAAkC;IAClC,kBAAkB;AACtB","sourcesContent":["@font-face {\n    font-family: 'samurai-font';\n    src: url('../chang-chang-font/Changchangwoodcut-BL25.ttf') format('woff2');\n    font-weight: 600;\n    font-style: normal;\n  }\nhtml,body{\n    height: 100%;\n    width: 100%;\n    margin: 0px;\n    font-family: 'samurai-font','Courier New', Courier, monospace;\n}\n.content{\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-rows:15% 85%;\n    background-color: white \n}\n.header{\n    background-color: red;\n    grid-column: 1/-1;\n    background-image: url('./homeImg/clouds/main.png');\n    background-size: 500px;\n    display: flex;\n    align-items: center;\n    background-color: white;\n    border-radius: 1rem;\n}\n\n.home,.menu,.aboutMe{\n    color: rgb(45,48,53);\n    font-size: 5rem;\n    flex:1; \n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* -webkit-text-stroke:.rem white ; */\n}\n.home p,.menu p,.aboutMe p{\n    border-radius: 1rem;\n}\n\n.wobble:hover {\n    animation: wobble 0.6s ease-in-out 1;\n}\n\n@keyframes wobble {\n    0% { transform: rotate(0deg); }\n    15% { transform: rotate(-10deg); }\n    30% { transform: rotate(10deg); }\n    45% { transform: rotate(-15deg); }\n    60% { transform: rotate(15deg); }\n    75% { transform: rotate(-10deg); }\n    90% { transform: rotate(10deg); }\n    100% { transform: rotate(0deg); }\n}\n\n.mainContainer{\n    display: grid;\n    grid-template-rows: repeat(1,100%);\n    grid-template-columns: 1.5fr 1fr 1fr 1.5fr;\n    overflow: hidden;\n}\n.leftSubMain{\n    background-color: white ;\n    grid-column: 1/3;\n    grid-row: 1/-1;\n    background-image: url('./homeImg/redCircle.png');\n    background-size: 110%;\n    background-repeat: no-repeat;\n    background-position: -13vw -19vh;\n}\n.rightSubMain{\n    background-color: black ;\n    grid-column: 3/-1;\n    grid-row: 1/-1;\n    display: flex;\n    justify-content: start;\n}\n.yinYangdiv{\n    grid-column: 2/4;\n    grid-row: 1/-1;\n    display: flex;\n    justify-content: center;\n}\n.yinYangdiv img{\n    position: relative;\n    height: 100%;   \n    width: 100%;\n}\n\n.ninja{\n    width: 60%;\n    height: 110%;\n}\n.samurai{\n    margin-left: 40%;\n    align-self: flex-end;\n    width: 55%;\n    height: 100%;\n}\n.weaponDiv{\n    grid-row: 1/-1;\n    grid-column: 1/-1;\n    display: flex;\n    width: 100%;\n    height:100%;\n    justify-content: space-between;\n    align-items: end;\n}\n.weaponDiv img{\n    height: 150px;\n    width: 150px;\n}\n.headbandDiv{\n    background-color: black;\n    border-radius: 50%;\n}\n.maskDiv{\n    background-color: rgb(249,252,243);\n    border-radius: 50%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/home/homeStyle.css":
/*!********************************!*\
  !*** ./src/home/homeStyle.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_homeStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./homeStyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/home/homeStyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_homeStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_homeStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_homeStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_homeStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/home/home.js":
/*!**************************!*\
  !*** ./src/home/home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _homeStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeStyle.css */ "./src/home/homeStyle.css");
/* harmony import */ var _homeImg_yin_and_yang_152829_1920_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeImg/yin-and-yang-152829_1920.png */ "./src/home/homeImg/yin-and-yang-152829_1920.png");
/* harmony import */ var _homeImg_ninja_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homeImg/ninja.png */ "./src/home/homeImg/ninja.png");
/* harmony import */ var _homeImg_whiteSamurai_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homeImg/whiteSamurai.png */ "./src/home/homeImg/whiteSamurai.png");
/* harmony import */ var _homeImg_ninjaheadBand1_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homeImg/ninjaheadBand1-1.png */ "./src/home/homeImg/ninjaheadBand1-1.png");
/* harmony import */ var _homeImg_KitsuneMaskNotKabutoNotMempo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homeImg/KitsuneMaskNotKabutoNotMempo.png */ "./src/home/homeImg/KitsuneMaskNotKabutoNotMempo.png");







function homePage() {
    const body = document.querySelector('body');

    const divContent = document.createElement('div');
    divContent.classList.add('content');

    // function removeMainContainer(){
    //     const mainContainer = document.querySelector('.mainContainer');
    //     if(mainContainer){
    //         mainContainer.remove();
    //     }
    // }

    const createHeader = () => {
        const headerDiv = document.createElement('div');
        headerDiv.classList.add('header');

        const homeDiv = document.createElement('div');
        homeDiv.classList.add('home');
        homeDiv.innerHTML = '<p class="homePera wobble">Home</p>';

        const menuDiv = document.createElement('div');
        menuDiv.classList.add('menu');
        menuDiv.innerHTML = '<p class="menuPera wobble">Menu</p>';

        const aboutMeDiv = document.createElement('div');
        aboutMeDiv.classList.add('aboutMe');

        aboutMeDiv.innerHTML = '<p class="mePera wobble">About Me</p>';
        
        headerDiv.append(homeDiv,menuDiv,aboutMeDiv);
        divContent.append(headerDiv);
    }
    function enterLeftSideInHomeMain () {
        const leftSubMain = document.createElement('div');
        leftSubMain.classList.add('leftSubMain');

        const ninja = new Image();
        ninja.src = _homeImg_ninja_png__WEBPACK_IMPORTED_MODULE_2__;
        ninja.alt = 'ninja in black clothes';
        ninja.classList.add('ninja');

        leftSubMain.append(ninja);
        return leftSubMain
    }
    function enterRightSideInHomeMain () {
        const rightSubMain = document.createElement('div');
        rightSubMain.classList.add('rightSubMain');

        const samurai = new Image();
        samurai.src = _homeImg_whiteSamurai_png__WEBPACK_IMPORTED_MODULE_3__;
        samurai.alt = 'samurai in white clothes';
        samurai.classList.add('samurai');
        rightSubMain.append(samurai);
        return rightSubMain;
    }
    function enterMidSideInHomeMain() {
        const yinYangContainer = document.createElement("div");
        yinYangContainer.classList.add('yinYangdiv');

        const yinYang = new Image();
        yinYang.src = _homeImg_yin_and_yang_152829_1920_png__WEBPACK_IMPORTED_MODULE_1__;
        yinYang.alt = 'Yin Yang';
        yinYang.classList.add('yinYang');
        yinYangContainer.append(yinYang);
        return yinYangContainer;
    }
    function enterWeaponInHomeMain() {
        const weaponDiv = document.createElement("div");
        weaponDiv.classList.add('weaponDiv');

        const headbandDiv = document.createElement("div");
        headbandDiv.classList.add('headbandDiv');

        const headband = new Image();
        headband.src = _homeImg_ninjaheadBand1_1_png__WEBPACK_IMPORTED_MODULE_4__;
        headband.alt = 'ninja headBand'
        headbandDiv.append(headband);


        const maskDiv = document.createElement("div");
        maskDiv.classList.add('maskDiv');
        const mask = new Image();
        mask.src = _homeImg_KitsuneMaskNotKabutoNotMempo_png__WEBPACK_IMPORTED_MODULE_5__;
        mask.alt = 'Samurai Kitsune'
        maskDiv.append(mask);
        
        weaponDiv.append(headbandDiv,maskDiv)
        return weaponDiv;
    }
    function makeMainContainer() {
        const mainDiv = document.createElement('div');
        mainDiv.classList.add('mainContainer');
        divContent.append(mainDiv);
    }

    function fillMainContainerHome(params) {
        const leftSideOfMain = enterLeftSideInHomeMain();
        const rightSideMain = enterRightSideInHomeMain();
        const yinYang = enterMidSideInHomeMain();
        const weaponDiv = enterWeaponInHomeMain();

        document.querySelector('.mainContainer').append(leftSideOfMain,yinYang,rightSideMain,weaponDiv);
    }

    const homeMain = () =>{
        makeMainContainer();
        fillMainContainerHome();
    }
    body.append(divContent);
    return{
        createHeader,homeMain,makeMainContainer
    }    
}
const homePageMaker = homePage();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePageMaker);

/***/ }),

/***/ "./src/chang-chang-font/Changchangwoodcut-BL25.ttf":
/*!*********************************************************!*\
  !*** ./src/chang-chang-font/Changchangwoodcut-BL25.ttf ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7807925ecf569bb53fee.ttf";

/***/ }),

/***/ "./src/home/homeImg/KitsuneMaskNotKabutoNotMempo.png":
/*!***********************************************************!*\
  !*** ./src/home/homeImg/KitsuneMaskNotKabutoNotMempo.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2fb5cc860724214589de.png";

/***/ }),

/***/ "./src/home/homeImg/clouds/main.png":
/*!******************************************!*\
  !*** ./src/home/homeImg/clouds/main.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5466af7a6d2c3e74cc73.png";

/***/ }),

/***/ "./src/home/homeImg/ninja.png":
/*!************************************!*\
  !*** ./src/home/homeImg/ninja.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c0283d5fc8f37b0309d9.png";

/***/ }),

/***/ "./src/home/homeImg/ninjaheadBand1-1.png":
/*!***********************************************!*\
  !*** ./src/home/homeImg/ninjaheadBand1-1.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "86e293ca51d0729bbec3.png";

/***/ }),

/***/ "./src/home/homeImg/redCircle.png":
/*!****************************************!*\
  !*** ./src/home/homeImg/redCircle.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b7f1c3ab5ea7ce1c03ff.png";

/***/ }),

/***/ "./src/home/homeImg/whiteSamurai.png":
/*!*******************************************!*\
  !*** ./src/home/homeImg/whiteSamurai.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8e7edf1640ade3b3b311.png";

/***/ }),

/***/ "./src/home/homeImg/yin-and-yang-152829_1920.png":
/*!*******************************************************!*\
  !*** ./src/home/homeImg/yin-and-yang-152829_1920.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c11a9a2cf8f461bc5a40.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL2dfcm9uaW5fcmFtZW4vLi9zcmMvaG9tZS9ob21lU3R5bGUuY3NzIiwid2VicGFjazovL2dfcm9uaW5fcmFtZW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2dfcm9uaW5fcmFtZW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2dfcm9uaW5fcmFtZW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9nX3JvbmluX3JhbWVuLy4vc3JjL2hvbWUvaG9tZVN0eWxlLmNzcz8wNjU0Iiwid2VicGFjazovL2dfcm9uaW5fcmFtZW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZ19yb25pbl9yYW1lbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZ19yb25pbl9yYW1lbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9nX3JvbmluX3JhbWVuLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2dfcm9uaW5fcmFtZW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9nX3JvbmluX3JhbWVuLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZ19yb25pbl9yYW1lbi8uL3NyYy9ob21lL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2NoYW5nLWNoYW5nLWZvbnQvQ2hhbmdjaGFuZ3dvb2RjdXQtQkwyNS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2hvbWVJbWcvY2xvdWRzL21haW4ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9ob21lSW1nL3JlZENpcmNsZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ3NhbXVyYWktZm9udCc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIH1cXG5odG1sLGJvZHl7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBmb250LWZhbWlseTogJ3NhbXVyYWktZm9udCcsJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG4uY29udGVudHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjE1JSA4NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlIFxcbn1cXG4uaGVhZGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmhvbWUsLm1lbnUsLmFib3V0TWV7XFxuICAgIGNvbG9yOiByZ2IoNDUsNDgsNTMpO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGZsZXg6MTsgXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC8qIC13ZWJraXQtdGV4dC1zdHJva2U6LnJlbSB3aGl0ZSA7ICovXFxufVxcbi5ob21lIHAsLm1lbnUgcCwuYWJvdXRNZSBwe1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4ud29iYmxlOmhvdmVyIHtcXG4gICAgYW5pbWF0aW9uOiB3b2JibGUgMC42cyBlYXNlLWluLW91dCAxO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHdvYmJsZSB7XFxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gICAgMTUlIHsgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTsgfVxcbiAgICAzMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7IH1cXG4gICAgNDUlIHsgdHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKTsgfVxcbiAgICA2MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7IH1cXG4gICAgNzUlIHsgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTsgfVxcbiAgICA5MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7IH1cXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxufVxcblxcbi5tYWluQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxLDEwMCUpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuNWZyIDFmciAxZnIgMS41ZnI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5sZWZ0U3ViTWFpbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgO1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBncmlkLXJvdzogMS8tMTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMTAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTN2dyAtMTl2aDtcXG59XFxuLnJpZ2h0U3ViTWFpbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgO1xcbiAgICBncmlkLWNvbHVtbjogMy8tMTtcXG4gICAgZ3JpZC1yb3c6IDEvLTE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcbi55aW5ZYW5nZGl2e1xcbiAgICBncmlkLWNvbHVtbjogMi80O1xcbiAgICBncmlkLXJvdzogMS8tMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi55aW5ZYW5nZGl2IGltZ3tcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDEwMCU7ICAgXFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubmluamF7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogMTEwJTtcXG59XFxuLnNhbXVyYWl7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICB3aWR0aDogNTUlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi53ZWFwb25EaXZ7XFxuICAgIGdyaWQtcm93OiAxLy0xO1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDoxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxufVxcbi53ZWFwb25EaXYgaW1ne1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxufVxcbi5oZWFkYmFuZERpdntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLm1hc2tEaXZ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksMjUyLDI0Myk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2hvbWUvaG9tZVN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQiw0REFBMEU7SUFDMUUsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtBQUNGO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsNkRBQTZEO0FBQ2pFO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUI7QUFDSjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQix5REFBa0Q7SUFDbEQsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsTUFBTTtJQUNOLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixxQ0FBcUM7QUFDekM7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLEtBQUssdUJBQXVCLEVBQUU7SUFDOUIsTUFBTSx5QkFBeUIsRUFBRTtJQUNqQyxNQUFNLHdCQUF3QixFQUFFO0lBQ2hDLE1BQU0seUJBQXlCLEVBQUU7SUFDakMsTUFBTSx3QkFBd0IsRUFBRTtJQUNoQyxNQUFNLHlCQUF5QixFQUFFO0lBQ2pDLE1BQU0sd0JBQXdCLEVBQUU7SUFDaEMsT0FBTyx1QkFBdUIsRUFBRTtBQUNwQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsMENBQTBDO0lBQzFDLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QseURBQWdEO0lBQ2hELHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFdBQVc7SUFDWCxXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnc2FtdXJhaS1mb250JztcXG4gICAgc3JjOiB1cmwoJy4uL2NoYW5nLWNoYW5nLWZvbnQvQ2hhbmdjaGFuZ3dvb2RjdXQtQkwyNS50dGYnKSBmb3JtYXQoJ3dvZmYyJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIH1cXG5odG1sLGJvZHl7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBmb250LWZhbWlseTogJ3NhbXVyYWktZm9udCcsJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG4uY29udGVudHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjE1JSA4NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlIFxcbn1cXG4uaGVhZGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaG9tZUltZy9jbG91ZHMvbWFpbi5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA1MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5ob21lLC5tZW51LC5hYm91dE1le1xcbiAgICBjb2xvcjogcmdiKDQ1LDQ4LDUzKTtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBmbGV4OjE7IFxcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAvKiAtd2Via2l0LXRleHQtc3Ryb2tlOi5yZW0gd2hpdGUgOyAqL1xcbn1cXG4uaG9tZSBwLC5tZW51IHAsLmFib3V0TWUgcHtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLndvYmJsZTpob3ZlciB7XFxuICAgIGFuaW1hdGlvbjogd29iYmxlIDAuNnMgZWFzZS1pbi1vdXQgMTtcXG59XFxuXFxuQGtleWZyYW1lcyB3b2JibGUge1xcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAgIDE1JSB7IHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7IH1cXG4gICAgMzAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpOyB9XFxuICAgIDQ1JSB7IHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7IH1cXG4gICAgNjAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpOyB9XFxuICAgIDc1JSB7IHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7IH1cXG4gICAgOTAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpOyB9XFxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbn1cXG5cXG4ubWFpbkNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMSwxMDAlKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjVmciAxZnIgMWZyIDEuNWZyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ubGVmdFN1Yk1haW57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlIDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZ3JpZC1yb3c6IDEvLTE7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9ob21lSW1nL3JlZENpcmNsZS5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMTAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTN2dyAtMTl2aDtcXG59XFxuLnJpZ2h0U3ViTWFpbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgO1xcbiAgICBncmlkLWNvbHVtbjogMy8tMTtcXG4gICAgZ3JpZC1yb3c6IDEvLTE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcbi55aW5ZYW5nZGl2e1xcbiAgICBncmlkLWNvbHVtbjogMi80O1xcbiAgICBncmlkLXJvdzogMS8tMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi55aW5ZYW5nZGl2IGltZ3tcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDEwMCU7ICAgXFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubmluamF7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogMTEwJTtcXG59XFxuLnNhbXVyYWl7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICB3aWR0aDogNTUlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi53ZWFwb25EaXZ7XFxuICAgIGdyaWQtcm93OiAxLy0xO1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDoxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxufVxcbi53ZWFwb25EaXYgaW1ne1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxufVxcbi5oZWFkYmFuZERpdntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLm1hc2tEaXZ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksMjUyLDI0Myk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWVTdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWVTdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vaG9tZVN0eWxlLmNzc1wiXG5cbmltcG9ydCB5aW5ZYW5nSW1nIGZyb20gJy4vaG9tZUltZy95aW4tYW5kLXlhbmctMTUyODI5XzE5MjAucG5nJztcbmltcG9ydCBuaW5qYUltZyBmcm9tICcuL2hvbWVJbWcvbmluamEucG5nJztcbmltcG9ydCBzYW11cmFpSW1nIGZyb20gJy4vaG9tZUltZy93aGl0ZVNhbXVyYWkucG5nJztcbmltcG9ydCBuaW5qYUhlYWRiYW5kSW1nU3JjIGZyb20gJy4vaG9tZUltZy9uaW5qYWhlYWRCYW5kMS0xLnBuZyc7XG5pbXBvcnQgc2FtdXJhaU1hc2tTcmMgZnJvbSAnLi9ob21lSW1nL0tpdHN1bmVNYXNrTm90S2FidXRvTm90TWVtcG8ucG5nJztcbmZ1bmN0aW9uIGhvbWVQYWdlKCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2Q29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG5cbiAgICAvLyBmdW5jdGlvbiByZW1vdmVNYWluQ29udGFpbmVyKCl7XG4gICAgLy8gICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbkNvbnRhaW5lcicpO1xuICAgIC8vICAgICBpZihtYWluQ29udGFpbmVyKXtcbiAgICAvLyAgICAgICAgIG1haW5Db250YWluZXIucmVtb3ZlKCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBjb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkZXJEaXYuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgICAgICAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob21lRGl2LmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcbiAgICAgICAgaG9tZURpdi5pbm5lckhUTUwgPSAnPHAgY2xhc3M9XCJob21lUGVyYSB3b2JibGVcIj5Ib21lPC9wPic7XG5cbiAgICAgICAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51RGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICAgICAgbWVudURpdi5pbm5lckhUTUwgPSAnPHAgY2xhc3M9XCJtZW51UGVyYSB3b2JibGVcIj5NZW51PC9wPic7XG5cbiAgICAgICAgY29uc3QgYWJvdXRNZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhYm91dE1lRGl2LmNsYXNzTGlzdC5hZGQoJ2Fib3V0TWUnKTtcblxuICAgICAgICBhYm91dE1lRGl2LmlubmVySFRNTCA9ICc8cCBjbGFzcz1cIm1lUGVyYSB3b2JibGVcIj5BYm91dCBNZTwvcD4nO1xuICAgICAgICBcbiAgICAgICAgaGVhZGVyRGl2LmFwcGVuZChob21lRGl2LG1lbnVEaXYsYWJvdXRNZURpdik7XG4gICAgICAgIGRpdkNvbnRlbnQuYXBwZW5kKGhlYWRlckRpdik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVudGVyTGVmdFNpZGVJbkhvbWVNYWluICgpIHtcbiAgICAgICAgY29uc3QgbGVmdFN1Yk1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGVmdFN1Yk1haW4uY2xhc3NMaXN0LmFkZCgnbGVmdFN1Yk1haW4nKTtcblxuICAgICAgICBjb25zdCBuaW5qYSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBuaW5qYS5zcmMgPSBuaW5qYUltZztcbiAgICAgICAgbmluamEuYWx0ID0gJ25pbmphIGluIGJsYWNrIGNsb3RoZXMnO1xuICAgICAgICBuaW5qYS5jbGFzc0xpc3QuYWRkKCduaW5qYScpO1xuXG4gICAgICAgIGxlZnRTdWJNYWluLmFwcGVuZChuaW5qYSk7XG4gICAgICAgIHJldHVybiBsZWZ0U3ViTWFpblxuICAgIH1cbiAgICBmdW5jdGlvbiBlbnRlclJpZ2h0U2lkZUluSG9tZU1haW4gKCkge1xuICAgICAgICBjb25zdCByaWdodFN1Yk1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmlnaHRTdWJNYWluLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0U3ViTWFpbicpO1xuXG4gICAgICAgIGNvbnN0IHNhbXVyYWkgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgc2FtdXJhaS5zcmMgPSBzYW11cmFpSW1nO1xuICAgICAgICBzYW11cmFpLmFsdCA9ICdzYW11cmFpIGluIHdoaXRlIGNsb3RoZXMnO1xuICAgICAgICBzYW11cmFpLmNsYXNzTGlzdC5hZGQoJ3NhbXVyYWknKTtcbiAgICAgICAgcmlnaHRTdWJNYWluLmFwcGVuZChzYW11cmFpKTtcbiAgICAgICAgcmV0dXJuIHJpZ2h0U3ViTWFpbjtcbiAgICB9XG4gICAgZnVuY3Rpb24gZW50ZXJNaWRTaWRlSW5Ib21lTWFpbigpIHtcbiAgICAgICAgY29uc3QgeWluWWFuZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHlpbllhbmdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgneWluWWFuZ2RpdicpO1xuXG4gICAgICAgIGNvbnN0IHlpbllhbmcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgeWluWWFuZy5zcmMgPSB5aW5ZYW5nSW1nO1xuICAgICAgICB5aW5ZYW5nLmFsdCA9ICdZaW4gWWFuZyc7XG4gICAgICAgIHlpbllhbmcuY2xhc3NMaXN0LmFkZCgneWluWWFuZycpO1xuICAgICAgICB5aW5ZYW5nQ29udGFpbmVyLmFwcGVuZCh5aW5ZYW5nKTtcbiAgICAgICAgcmV0dXJuIHlpbllhbmdDb250YWluZXI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVudGVyV2VhcG9uSW5Ib21lTWFpbigpIHtcbiAgICAgICAgY29uc3Qgd2VhcG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgd2VhcG9uRGl2LmNsYXNzTGlzdC5hZGQoJ3dlYXBvbkRpdicpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRiYW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaGVhZGJhbmREaXYuY2xhc3NMaXN0LmFkZCgnaGVhZGJhbmREaXYnKTtcblxuICAgICAgICBjb25zdCBoZWFkYmFuZCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBoZWFkYmFuZC5zcmMgPSBuaW5qYUhlYWRiYW5kSW1nU3JjO1xuICAgICAgICBoZWFkYmFuZC5hbHQgPSAnbmluamEgaGVhZEJhbmQnXG4gICAgICAgIGhlYWRiYW5kRGl2LmFwcGVuZChoZWFkYmFuZCk7XG5cblxuICAgICAgICBjb25zdCBtYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFza0Rpdi5jbGFzc0xpc3QuYWRkKCdtYXNrRGl2Jyk7XG4gICAgICAgIGNvbnN0IG1hc2sgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbWFzay5zcmMgPSBzYW11cmFpTWFza1NyYztcbiAgICAgICAgbWFzay5hbHQgPSAnU2FtdXJhaSBLaXRzdW5lJ1xuICAgICAgICBtYXNrRGl2LmFwcGVuZChtYXNrKTtcbiAgICAgICAgXG4gICAgICAgIHdlYXBvbkRpdi5hcHBlbmQoaGVhZGJhbmREaXYsbWFza0RpdilcbiAgICAgICAgcmV0dXJuIHdlYXBvbkRpdjtcbiAgICB9XG4gICAgZnVuY3Rpb24gbWFrZU1haW5Db250YWluZXIoKSB7XG4gICAgICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKCdtYWluQ29udGFpbmVyJyk7XG4gICAgICAgIGRpdkNvbnRlbnQuYXBwZW5kKG1haW5EaXYpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbGxNYWluQ29udGFpbmVySG9tZShwYXJhbXMpIHtcbiAgICAgICAgY29uc3QgbGVmdFNpZGVPZk1haW4gPSBlbnRlckxlZnRTaWRlSW5Ib21lTWFpbigpO1xuICAgICAgICBjb25zdCByaWdodFNpZGVNYWluID0gZW50ZXJSaWdodFNpZGVJbkhvbWVNYWluKCk7XG4gICAgICAgIGNvbnN0IHlpbllhbmcgPSBlbnRlck1pZFNpZGVJbkhvbWVNYWluKCk7XG4gICAgICAgIGNvbnN0IHdlYXBvbkRpdiA9IGVudGVyV2VhcG9uSW5Ib21lTWFpbigpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluQ29udGFpbmVyJykuYXBwZW5kKGxlZnRTaWRlT2ZNYWluLHlpbllhbmcscmlnaHRTaWRlTWFpbix3ZWFwb25EaXYpO1xuICAgIH1cblxuICAgIGNvbnN0IGhvbWVNYWluID0gKCkgPT57XG4gICAgICAgIG1ha2VNYWluQ29udGFpbmVyKCk7XG4gICAgICAgIGZpbGxNYWluQ29udGFpbmVySG9tZSgpO1xuICAgIH1cbiAgICBib2R5LmFwcGVuZChkaXZDb250ZW50KTtcbiAgICByZXR1cm57XG4gICAgICAgIGNyZWF0ZUhlYWRlcixob21lTWFpbixtYWtlTWFpbkNvbnRhaW5lclxuICAgIH0gICAgXG59XG5jb25zdCBob21lUGFnZU1ha2VyID0gaG9tZVBhZ2UoKTtcbmV4cG9ydCBkZWZhdWx0IGhvbWVQYWdlTWFrZXI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ19yb25pbl9yYW1lbi8uL3NyYy9ob21lL2hvbWVTdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZ19yb25pbl9yYW1lbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZ19yb25pbl9yYW1lbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vZ19yb25pbl9yYW1lbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2dfcm9uaW5fcmFtZW4vLi9zcmMvaG9tZS9ob21lU3R5bGUuY3NzPzA2NTQiLCJ3ZWJwYWNrOi8vZ19yb25pbl9yYW1lbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9nX3JvbmluX3JhbWVuLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9nX3JvbmluX3JhbWVuLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2dfcm9uaW5fcmFtZW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZ19yb25pbl9yYW1lbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2dfcm9uaW5fcmFtZW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9nX3JvbmluX3JhbWVuLy4vc3JjL2hvbWUvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vY2hhbmctY2hhbmctZm9udC9DaGFuZ2NoYW5nd29vZGN1dC1CTDI1LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaG9tZUltZy9jbG91ZHMvbWFpbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2hvbWVJbWcvcmVkQ2lyY2xlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnc2FtdXJhaS1mb250JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgnd29mZjInKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgfVxcbmh0bWwsYm9keXtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnc2FtdXJhaS1mb250JywnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcbi5jb250ZW50e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6MTUlIDg1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgXFxufVxcbi5oZWFkZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uaG9tZSwubWVudSwuYWJvdXRNZXtcXG4gICAgY29sb3I6IHJnYig0NSw0OCw1Myk7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgZmxleDoxOyBcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogLXdlYmtpdC10ZXh0LXN0cm9rZToucmVtIHdoaXRlIDsgKi9cXG59XFxuLmhvbWUgcCwubWVudSBwLC5hYm91dE1lIHB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi53b2JibGU6aG92ZXIge1xcbiAgICBhbmltYXRpb246IHdvYmJsZSAwLjZzIGVhc2UtaW4tb3V0IDE7XFxufVxcblxcbkBrZXlmcmFtZXMgd29iYmxlIHtcXG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgICAxNSUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpOyB9XFxuICAgIDMwJSB7IHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTsgfVxcbiAgICA0NSUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpOyB9XFxuICAgIDYwJSB7IHRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTsgfVxcbiAgICA3NSUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpOyB9XFxuICAgIDkwJSB7IHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTsgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG59XFxuXFxuLm1haW5Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEsMTAwJSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS41ZnIgMWZyIDFmciAxLjVmcjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmxlZnRTdWJNYWlue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSA7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGdyaWQtcm93OiAxLy0xO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDExMCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xM3Z3IC0xOXZoO1xcbn1cXG4ucmlnaHRTdWJNYWlue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayA7XFxuICAgIGdyaWQtY29sdW1uOiAzLy0xO1xcbiAgICBncmlkLXJvdzogMS8tMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuLnlpbllhbmdkaXZ7XFxuICAgIGdyaWQtY29sdW1uOiAyLzQ7XFxuICAgIGdyaWQtcm93OiAxLy0xO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnlpbllhbmdkaXYgaW1ne1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMTAwJTsgICBcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5uaW5qYXtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiAxMTAlO1xcbn1cXG4uc2FtdXJhaXtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIHdpZHRoOiA1NSU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLndlYXBvbkRpdntcXG4gICAgZ3JpZC1yb3c6IDEvLTE7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG59XFxuLndlYXBvbkRpdiBpbWd7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG59XFxuLmhlYWRiYW5kRGl2e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4ubWFza0RpdntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OSwyNTIsMjQzKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaG9tZS9ob21lU3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLDREQUEwRTtJQUMxRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0FBQ0Y7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCw2REFBNkQ7QUFDakU7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQjtBQUNKO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLHlEQUFrRDtJQUNsRCxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixNQUFNO0lBQ04sWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHFDQUFxQztBQUN6QztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksS0FBSyx1QkFBdUIsRUFBRTtJQUM5QixNQUFNLHlCQUF5QixFQUFFO0lBQ2pDLE1BQU0sd0JBQXdCLEVBQUU7SUFDaEMsTUFBTSx5QkFBeUIsRUFBRTtJQUNqQyxNQUFNLHdCQUF3QixFQUFFO0lBQ2hDLE1BQU0seUJBQXlCLEVBQUU7SUFDakMsTUFBTSx3QkFBd0IsRUFBRTtJQUNoQyxPQUFPLHVCQUF1QixFQUFFO0FBQ3BDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQywwQ0FBMEM7SUFDMUMsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCx5REFBZ0Q7SUFDaEQscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsV0FBVztJQUNYLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdzYW11cmFpLWZvbnQnO1xcbiAgICBzcmM6IHVybCgnLi4vY2hhbmctY2hhbmctZm9udC9DaGFuZ2NoYW5nd29vZGN1dC1CTDI1LnR0ZicpIGZvcm1hdCgnd29mZjInKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgfVxcbmh0bWwsYm9keXtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnc2FtdXJhaS1mb250JywnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcbi5jb250ZW50e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6MTUlIDg1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgXFxufVxcbi5oZWFkZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9ob21lSW1nL2Nsb3Vkcy9tYWluLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmhvbWUsLm1lbnUsLmFib3V0TWV7XFxuICAgIGNvbG9yOiByZ2IoNDUsNDgsNTMpO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGZsZXg6MTsgXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC8qIC13ZWJraXQtdGV4dC1zdHJva2U6LnJlbSB3aGl0ZSA7ICovXFxufVxcbi5ob21lIHAsLm1lbnUgcCwuYWJvdXRNZSBwe1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4ud29iYmxlOmhvdmVyIHtcXG4gICAgYW5pbWF0aW9uOiB3b2JibGUgMC42cyBlYXNlLWluLW91dCAxO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHdvYmJsZSB7XFxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gICAgMTUlIHsgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTsgfVxcbiAgICAzMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7IH1cXG4gICAgNDUlIHsgdHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKTsgfVxcbiAgICA2MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7IH1cXG4gICAgNzUlIHsgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTsgfVxcbiAgICA5MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7IH1cXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxufVxcblxcbi5tYWluQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxLDEwMCUpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuNWZyIDFmciAxZnIgMS41ZnI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5sZWZ0U3ViTWFpbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgO1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBncmlkLXJvdzogMS8tMTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2hvbWVJbWcvcmVkQ2lyY2xlLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDExMCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xM3Z3IC0xOXZoO1xcbn1cXG4ucmlnaHRTdWJNYWlue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayA7XFxuICAgIGdyaWQtY29sdW1uOiAzLy0xO1xcbiAgICBncmlkLXJvdzogMS8tMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuLnlpbllhbmdkaXZ7XFxuICAgIGdyaWQtY29sdW1uOiAyLzQ7XFxuICAgIGdyaWQtcm93OiAxLy0xO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnlpbllhbmdkaXYgaW1ne1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMTAwJTsgICBcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5uaW5qYXtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiAxMTAlO1xcbn1cXG4uc2FtdXJhaXtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIHdpZHRoOiA1NSU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLndlYXBvbkRpdntcXG4gICAgZ3JpZC1yb3c6IDEvLTE7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG59XFxuLndlYXBvbkRpdiBpbWd7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG59XFxuLmhlYWRiYW5kRGl2e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4ubWFza0RpdntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OSwyNTIsMjQzKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZVN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZVN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9ob21lU3R5bGUuY3NzXCJcblxuaW1wb3J0IHlpbllhbmdJbWcgZnJvbSAnLi9ob21lSW1nL3lpbi1hbmQteWFuZy0xNTI4MjlfMTkyMC5wbmcnO1xuaW1wb3J0IG5pbmphSW1nIGZyb20gJy4vaG9tZUltZy9uaW5qYS5wbmcnO1xuaW1wb3J0IHNhbXVyYWlJbWcgZnJvbSAnLi9ob21lSW1nL3doaXRlU2FtdXJhaS5wbmcnO1xuaW1wb3J0IG5pbmphSGVhZGJhbmRJbWdTcmMgZnJvbSAnLi9ob21lSW1nL25pbmphaGVhZEJhbmQxLTEucG5nJztcbmltcG9ydCBzYW11cmFpTWFza1NyYyBmcm9tICcuL2hvbWVJbWcvS2l0c3VuZU1hc2tOb3RLYWJ1dG9Ob3RNZW1wby5wbmcnO1xuZnVuY3Rpb24gaG9tZVBhZ2UoKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAgICAgICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhvbWVEaXYuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuICAgICAgICBob21lRGl2LmlubmVySFRNTCA9ICc8cCBjbGFzcz1cImhvbWVQZXJhIHdvYmJsZVwiPkhvbWU8L3A+JztcblxuICAgICAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVEaXYuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgICAgICBtZW51RGl2LmlubmVySFRNTCA9ICc8cCBjbGFzcz1cIm1lbnVQZXJhIHdvYmJsZVwiPk1lbnU8L3A+JztcblxuICAgICAgICBjb25zdCBhYm91dE1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFib3V0TWVEaXYuY2xhc3NMaXN0LmFkZCgnYWJvdXRNZScpO1xuXG4gICAgICAgIGFib3V0TWVEaXYuaW5uZXJIVE1MID0gJzxwIGNsYXNzPVwibWVQZXJhIHdvYmJsZVwiPkFib3V0IE1lPC9wPic7XG4gICAgICAgIFxuICAgICAgICBoZWFkZXJEaXYuYXBwZW5kKGhvbWVEaXYsbWVudURpdixhYm91dE1lRGl2KTtcbiAgICAgICAgZGl2Q29udGVudC5hcHBlbmQoaGVhZGVyRGl2KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZW50ZXJMZWZ0U2lkZUluSG9tZU1haW4gKCkge1xuICAgICAgICBjb25zdCBsZWZ0U3ViTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZWZ0U3ViTWFpbi5jbGFzc0xpc3QuYWRkKCdsZWZ0U3ViTWFpbicpO1xuXG4gICAgICAgIGNvbnN0IG5pbmphID0gbmV3IEltYWdlKCk7XG4gICAgICAgIG5pbmphLnNyYyA9IG5pbmphSW1nO1xuICAgICAgICBuaW5qYS5hbHQgPSAnbmluamEgaW4gYmxhY2sgY2xvdGhlcyc7XG4gICAgICAgIG5pbmphLmNsYXNzTGlzdC5hZGQoJ25pbmphJyk7XG5cbiAgICAgICAgbGVmdFN1Yk1haW4uYXBwZW5kKG5pbmphKTtcbiAgICAgICAgcmV0dXJuIGxlZnRTdWJNYWluXG4gICAgfVxuICAgIGZ1bmN0aW9uIGVudGVyUmlnaHRTaWRlSW5Ib21lTWFpbiAoKSB7XG4gICAgICAgIGNvbnN0IHJpZ2h0U3ViTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByaWdodFN1Yk1haW4uY2xhc3NMaXN0LmFkZCgncmlnaHRTdWJNYWluJyk7XG5cbiAgICAgICAgY29uc3Qgc2FtdXJhaSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBzYW11cmFpLnNyYyA9IHNhbXVyYWlJbWc7XG4gICAgICAgIHNhbXVyYWkuYWx0ID0gJ3NhbXVyYWkgaW4gd2hpdGUgY2xvdGhlcyc7XG4gICAgICAgIHNhbXVyYWkuY2xhc3NMaXN0LmFkZCgnc2FtdXJhaScpO1xuICAgICAgICByaWdodFN1Yk1haW4uYXBwZW5kKHNhbXVyYWkpO1xuICAgICAgICByZXR1cm4gcmlnaHRTdWJNYWluO1xuICAgIH1cbiAgICBmdW5jdGlvbiBlbnRlck1pZFNpZGVJbkhvbWVNYWluKCkge1xuICAgICAgICBjb25zdCB5aW5ZYW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgeWluWWFuZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd5aW5ZYW5nZGl2Jyk7XG5cbiAgICAgICAgY29uc3QgeWluWWFuZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB5aW5ZYW5nLnNyYyA9IHlpbllhbmdJbWc7XG4gICAgICAgIHlpbllhbmcuYWx0ID0gJ1lpbiBZYW5nJztcbiAgICAgICAgeWluWWFuZy5jbGFzc0xpc3QuYWRkKCd5aW5ZYW5nJyk7XG4gICAgICAgIHlpbllhbmdDb250YWluZXIuYXBwZW5kKHlpbllhbmcpO1xuICAgICAgICByZXR1cm4geWluWWFuZ0NvbnRhaW5lcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gZW50ZXJXZWFwb25JbkhvbWVNYWluKCkge1xuICAgICAgICBjb25zdCB3ZWFwb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB3ZWFwb25EaXYuY2xhc3NMaXN0LmFkZCgnd2VhcG9uRGl2Jyk7XG5cbiAgICAgICAgY29uc3QgaGVhZGJhbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBoZWFkYmFuZERpdi5jbGFzc0xpc3QuYWRkKCdoZWFkYmFuZERpdicpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRiYW5kID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGhlYWRiYW5kLnNyYyA9IG5pbmphSGVhZGJhbmRJbWdTcmM7XG4gICAgICAgIGhlYWRiYW5kLmFsdCA9ICduaW5qYSBoZWFkQmFuZCdcbiAgICAgICAgaGVhZGJhbmREaXYuYXBwZW5kKGhlYWRiYW5kKTtcblxuXG4gICAgICAgIGNvbnN0IG1hc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXNrRGl2LmNsYXNzTGlzdC5hZGQoJ21hc2tEaXYnKTtcbiAgICAgICAgY29uc3QgbWFzayA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBtYXNrLnNyYyA9IHNhbXVyYWlNYXNrU3JjO1xuICAgICAgICBtYXNrLmFsdCA9ICdTYW11cmFpIEtpdHN1bmUnXG4gICAgICAgIG1hc2tEaXYuYXBwZW5kKG1hc2spO1xuICAgICAgICBcbiAgICAgICAgd2VhcG9uRGl2LmFwcGVuZChoZWFkYmFuZERpdixtYXNrRGl2KVxuICAgICAgICByZXR1cm4gd2VhcG9uRGl2O1xuICAgIH1cbiAgICBmdW5jdGlvbiBtYWtlTWFpbkNvbnRhaW5lcigpIHtcbiAgICAgICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoJ21haW5Db250YWluZXInKTtcbiAgICAgICAgZGl2Q29udGVudC5hcHBlbmQobWFpbkRpdik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlsbE1haW5Db250YWluZXJIb21lKHBhcmFtcykge1xuICAgICAgICBjb25zdCBsZWZ0U2lkZU9mTWFpbiA9IGVudGVyTGVmdFNpZGVJbkhvbWVNYWluKCk7XG4gICAgICAgIGNvbnN0IHJpZ2h0U2lkZU1haW4gPSBlbnRlclJpZ2h0U2lkZUluSG9tZU1haW4oKTtcbiAgICAgICAgY29uc3QgeWluWWFuZyA9IGVudGVyTWlkU2lkZUluSG9tZU1haW4oKTtcbiAgICAgICAgY29uc3Qgd2VhcG9uRGl2ID0gZW50ZXJXZWFwb25JbkhvbWVNYWluKCk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5Db250YWluZXInKS5hcHBlbmQobGVmdFNpZGVPZk1haW4seWluWWFuZyxyaWdodFNpZGVNYWluLHdlYXBvbkRpdik7XG4gICAgfVxuXG4gICAgY29uc3QgaG9tZU1haW4gPSAoKSA9PntcbiAgICAgICAgbWFrZU1haW5Db250YWluZXIoKTtcbiAgICAgICAgZmlsbE1haW5Db250YWluZXJIb21lKCk7XG4gICAgfVxuICAgIGJvZHkuYXBwZW5kKGRpdkNvbnRlbnQpO1xuICAgIHJldHVybntcbiAgICAgICAgY3JlYXRlSGVhZGVyLGhvbWVNYWluLG1ha2VNYWluQ29udGFpbmVyXG4gICAgfSAgICBcbn1cbmNvbnN0IGhvbWVQYWdlTWFrZXIgPSBob21lUGFnZSgpO1xuZXhwb3J0IGRlZmF1bHQgaG9tZVBhZ2VNYWtlcjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
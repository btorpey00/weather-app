/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --bg-color: slategray;\n    --text-color: yellowgreen;\n    --card-bg: rgb(82, 98, 114);\n    --button-clr: rgb(67, 83, 99);\n}\n\nbody {\n    background: var(--bg-color);\n    color: var(--text-color);\n}\n\n.city-card {\n    box-sizing: border-box;\n    width: min(90vw, 450px);\n    border: 2px solid var(--text-color);\n    border-radius: 8px;\n    padding: 1rem;\n    background: var(--card-bg);\n}\n\n.add-new-container {\n    box-sizing: border-box;\n    width: min(90vw, 450px);\n    border: 2px solid var(--text-color);\n    border-radius: 8px;\n    padding: 1rem;\n    background: var(--card-bg);\n}\n\nbutton {\n    background: var(--button-clr);\n    color: var(--text-color);\n}\n\n.main-display {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 2rem;\n    padding: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,yBAAyB;IACzB,2BAA2B;IAC3B,6BAA6B;AACjC;;AAEA;IACI,2BAA2B;IAC3B,wBAAwB;AAC5B;;AAEA;IACI,sBAAsB;IACtB,uBAAuB;IACvB,mCAAmC;IACnC,kBAAkB;IAClB,aAAa;IACb,0BAA0B;AAC9B;;AAEA;IACI,sBAAsB;IACtB,uBAAuB;IACvB,mCAAmC;IACnC,kBAAkB;IAClB,aAAa;IACb,0BAA0B;AAC9B;;AAEA;IACI,6BAA6B;IAC7B,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,SAAS;IACT,aAAa;AACjB","sourcesContent":[":root {\n    --bg-color: slategray;\n    --text-color: yellowgreen;\n    --card-bg: rgb(82, 98, 114);\n    --button-clr: rgb(67, 83, 99);\n}\n\nbody {\n    background: var(--bg-color);\n    color: var(--text-color);\n}\n\n.city-card {\n    box-sizing: border-box;\n    width: min(90vw, 450px);\n    border: 2px solid var(--text-color);\n    border-radius: 8px;\n    padding: 1rem;\n    background: var(--card-bg);\n}\n\n.add-new-container {\n    box-sizing: border-box;\n    width: min(90vw, 450px);\n    border: 2px solid var(--text-color);\n    border-radius: 8px;\n    padding: 1rem;\n    background: var(--card-bg);\n}\n\nbutton {\n    background: var(--button-clr);\n    color: var(--text-color);\n}\n\n.main-display {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 2rem;\n    padding: 1rem;\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allCities": () => (/* binding */ allCities),
/* harmony export */   "mainDisplay": () => (/* binding */ mainDisplay),
/* harmony export */   "updateStorage": () => (/* binding */ updateStorage)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_renderCities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderCities */ "./src/modules/renderCities.js");



let allCities = JSON.parse(localStorage.getItem("allCities") || '[]');
const mainDisplay = document.createElement('div');

window.addEventListener('onLoad', (0,_modules_renderCities__WEBPACK_IMPORTED_MODULE_1__["default"])(allCities))

//Update Storage
function updateStorage(cityArray) {
    localStorage.setItem("allCities", JSON.stringify(cityArray));
};

/***/ }),

/***/ "./src/modules/addNew.js":
/*!*******************************!*\
  !*** ./src/modules/addNew.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addNewCity)
/* harmony export */ });
/* harmony import */ var _apiActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiActions */ "./src/modules/apiActions.js");


//choose how to add new city
function addNewCity() {
    const addNewContainer = document.createElement('div');
    addNewContainer.classList = 'add-new-container';
    
    const addNewHeader = document.createElement('h3');
    addNewHeader.textContent = 'Add New City';
    addNewContainer.appendChild(addNewHeader);

    const addNewText = document.createElement('p');
    addNewText.textContent = '(Maximum 5 Cities)';
    addNewContainer.appendChild(addNewText);

    const addNewLocationButton = document.createElement('button');
    addNewLocationButton.classList = 'add-new-button';
    addNewLocationButton.innerText = 'Add by Current Location';
    addNewLocationButton.addEventListener('click', function() {
        addNewContainer.innerText = 'Loading...';
        console.log(addNewContainer.innerText);
        (0,_apiActions__WEBPACK_IMPORTED_MODULE_0__.newCityByLocation)(addNewContainer);
    });
    addNewContainer.appendChild(addNewLocationButton);

    const addNewZipButton = document.createElement('button');
    addNewZipButton.classList = 'add-new-button';
    addNewZipButton.innerText = 'Add by Zip Code';
    addNewZipButton.addEventListener('click', function() {
        newCityByZip(addNewContainer);
    });
    addNewContainer.appendChild(addNewZipButton);
    
    const addNewNameButton = document.createElement('button');
    addNewNameButton.classList = 'add-new-button';
    addNewNameButton.innerText = 'Add by City and State';
    addNewNameButton.addEventListener('click', function() {
        newCityByName(addNewContainer);
    });
    addNewContainer.appendChild(addNewNameButton)
    
    return addNewContainer;
}

//receive new city by zip
function newCityByZip(addNewContainer) {
    addNewContainer.innerText = '';

    const zipInputField = document.createElement('input');
    zipInputField.setAttribute('type', 'number');
    zipInputField.id = 'zip-input-field';
    zipInputField.classList = 'zip-input';
    const zipInputLabel = document.createElement('label');
    zipInputLabel.setAttribute('for', 'zip-input-field');
    zipInputLabel.innerText = 'Zip Code: ';
    addNewContainer.appendChild(zipInputLabel);
    addNewContainer.appendChild(zipInputField);

    const zipCancel = document.createElement('button');
    zipCancel.classList = 'cancel-button';
    zipCancel.innerText = 'Cancel';
    addNewContainer.appendChild(zipCancel);

    const zipAccept = document.createElement('button');
    zipAccept.classList = 'accept-button';
    zipAccept.innerText = 'Enter';
    addNewContainer.appendChild(zipAccept);
    zipAccept.addEventListener('click', function() {
        addNewContainer.innerText = 'Loading...';
        (0,_apiActions__WEBPACK_IMPORTED_MODULE_0__.getLocationByZip)(zipInputField.value);
        // addNewContainer.innerText = '';
    });
}

//receive new city by name
function newCityByName(addNewContainer) {
    addNewContainer.innerText = '';

    const cityInputField = document.createElement('input');
    cityInputField.id = 'city-input-field';
    cityInputField.classList = 'city-input';
    const cityInputLabel = document.createElement('label');
    cityInputLabel.setAttribute('for', 'city-input-field');
    cityInputLabel.innerText = 'City: ';
    addNewContainer.appendChild(cityInputLabel);
    addNewContainer.appendChild(cityInputField);

    const stateSelect = document.createElement('select');
    stateSelect.id = 'select-state';
    const stateLabel = document.createElement('label');
    stateLabel.setAttribute('for', 'select-state');
    stateLabel.innerText = 'State: '
    addNewContainer.appendChild(stateLabel);
    addNewContainer.appendChild(stateSelect);

    const stateCodes = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

    for(let i = 0; i < stateCodes.length; i++) {
        let stateCode = document.createElement('option');
        stateCode.value = stateCodes[i];
        stateCode.innerText = stateCodes[i];
        stateSelect.appendChild(stateCode);
    }

    const byNameCancel = document.createElement('button');
    byNameCancel.classList = 'cancel-button';
    byNameCancel.innerText = 'Cancel';
    addNewContainer.appendChild(byNameCancel);

    const byNameAccept = document.createElement('button');
    byNameAccept.classList = 'accept-button';
    byNameAccept.innerText = 'Enter';
    addNewContainer.appendChild(byNameAccept);
    byNameAccept.addEventListener('click', function() {
        addNewContainer.innerText = 'Loading...';
        (0,_apiActions__WEBPACK_IMPORTED_MODULE_0__.getLocationByCity)(cityInputField.value, stateSelect.value);
        // addNewContainer.innerText = '';
    });
};


/***/ }),

/***/ "./src/modules/apiActions.js":
/*!***********************************!*\
  !*** ./src/modules/apiActions.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLocationByCity": () => (/* binding */ getLocationByCity),
/* harmony export */   "getLocationByZip": () => (/* binding */ getLocationByZip),
/* harmony export */   "getWeather": () => (/* binding */ getWeather),
/* harmony export */   "locationError": () => (/* binding */ locationError),
/* harmony export */   "newCityByLocation": () => (/* binding */ newCityByLocation),
/* harmony export */   "updateAll": () => (/* binding */ updateAll)
/* harmony export */ });
/* harmony import */ var _renderCities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCities */ "./src/modules/renderCities.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _cityFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cityFactory */ "./src/modules/cityFactory.js");




//recieve new city by location
function newCityByLocation(addNewContainer) {
    if('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((function(position) {
            getWeather(position.coords.latitude, position.coords.longitude);
        }), locationError)
    }
    else {
        alert('Must allow location to be detected');
        (0,_renderCities__WEBPACK_IMPORTED_MODULE_0__["default"])(___WEBPACK_IMPORTED_MODULE_1__.allCities);
        console.log('no location');
    }
    // addNewContainer.innerText = '';
}

function locationError(error) {
    alert('Must allow location to be detected');
    (0,_renderCities__WEBPACK_IMPORTED_MODULE_0__["default"])(___WEBPACK_IMPORTED_MODULE_1__.allCities);
    console.log(error);
}

//Find Lat and Lon from city, state name
async function getLocationByCity(searchCity, searchState) {
    try {
        const response = await fetch('https://api.openweathermap.org/geo/1.0/direct?q='+ searchCity + ',' + searchState + ',US&limit=1&appid=c0a92c0ac55c91de326ffa8fa5b4e1f7', {mode: 'cors'});
        const cityData = await response.json();
        getWeather(cityData[0].lat, cityData[0].lon);
    } catch (error) {
        alert('Invalid City/State');
        (0,_renderCities__WEBPACK_IMPORTED_MODULE_0__["default"])(___WEBPACK_IMPORTED_MODULE_1__.allCities);
        console.log(error);
    }
};

//find Lat and Lon from zip
async function getLocationByZip(searchZip) {
    try {
        const response = await fetch('https://api.openweathermap.org/geo/1.0/zip?zip='+ searchZip + ',US&limit=5&appid=c0a92c0ac55c91de326ffa8fa5b4e1f7', {mode: 'cors'});
        const cityData = await response.json();
        getWeather(cityData.lat, cityData.lon);
    } catch (error) {
        alert('Could not find Zip Code');
        (0,_renderCities__WEBPACK_IMPORTED_MODULE_0__["default"])(___WEBPACK_IMPORTED_MODULE_1__.allCities);
        console.log(error);
    }
};

//fetch weather info from API
async function getWeather(lat, lon) {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=c0a92c0ac55c91de326ffa8fa5b4e1f7&units=imperial', {mode: 'cors'});
        const cityWeather = await response.json();
        let cityInfo = (0,_cityFactory__WEBPACK_IMPORTED_MODULE_2__.newCity)(cityWeather.name, cityWeather.main.temp, cityWeather.main.temp_max, cityWeather.main.temp_min, cityWeather.weather[0].description, cityWeather.weather[0].icon, lat, lon);
        ___WEBPACK_IMPORTED_MODULE_1__.allCities.push(cityInfo);
        (0,___WEBPACK_IMPORTED_MODULE_1__.updateStorage)(___WEBPACK_IMPORTED_MODULE_1__.allCities);
        (0,_renderCities__WEBPACK_IMPORTED_MODULE_0__["default"])(___WEBPACK_IMPORTED_MODULE_1__.allCities);        
    } catch (error) {
        alert('Invalid entry');
        (0,_renderCities__WEBPACK_IMPORTED_MODULE_0__["default"])(___WEBPACK_IMPORTED_MODULE_1__.allCities);
        console.log(error);
    }
};

async function updateAll() {
    for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_1__.allCities.length; i++) {
        try {
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + ___WEBPACK_IMPORTED_MODULE_1__.allCities[i].lat+'&lon='+___WEBPACK_IMPORTED_MODULE_1__.allCities[i].lon + '&appid=c0a92c0ac55c91de326ffa8fa5b4e1f7&units=imperial', {mode: 'cors'});
            const cityWeather = await response.json();
            let cityInfo = (0,_cityFactory__WEBPACK_IMPORTED_MODULE_2__.newCity)(cityWeather.name, cityWeather.main.temp, cityWeather.main.temp_max, cityWeather.main.temp_min, cityWeather.weather[0].description, cityWeather.weather[0].icon, cityWeather.coord.lat, cityWeather.coord.lon);
            ___WEBPACK_IMPORTED_MODULE_1__.allCities[i] = cityInfo;
            (0,___WEBPACK_IMPORTED_MODULE_1__.updateStorage)(___WEBPACK_IMPORTED_MODULE_1__.allCities);

        } catch (error) {
            alert('Invalid entry');
            (0,_renderCities__WEBPACK_IMPORTED_MODULE_0__["default"])(___WEBPACK_IMPORTED_MODULE_1__.allCities);
            console.log(error);
        }
    }
}

// async function extendedForecast(city) {
//     try {
//         const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat='+city.lat+'&lon='+city.lon+'&appid=c0a92c0ac55c91de326ffa8fa5b4e1f7&units=imperial', {mode: 'cors'});
//         const extendedDetails = await response.json();
//         console.log(extendedDetails);
//     } catch (error) {
//         console.log(error);
//     }
// }



/***/ }),

/***/ "./src/modules/cityFactory.js":
/*!************************************!*\
  !*** ./src/modules/cityFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newCity": () => (/* binding */ newCity)
/* harmony export */ });
const newCity = (cityName, currentTemp, highTemp, lowTemp, weather, icon, lat, lon) => {
    return {
        cityName,
        currentTemp,
        highTemp,
        lowTemp,
        weather,
        icon,
        lat,
        lon
    };
}

/***/ }),

/***/ "./src/modules/renderCities.js":
/*!*************************************!*\
  !*** ./src/modules/renderCities.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderCities)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _addNew__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addNew */ "./src/modules/addNew.js");
/* harmony import */ var _apiActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apiActions */ "./src/modules/apiActions.js");




function renderCities(allCities) {
    
    (0,_apiActions__WEBPACK_IMPORTED_MODULE_2__.updateAll)();
    _index__WEBPACK_IMPORTED_MODULE_0__.mainDisplay.classList = 'main-display';
    document.body.appendChild(_index__WEBPACK_IMPORTED_MODULE_0__.mainDisplay);

    _index__WEBPACK_IMPORTED_MODULE_0__.mainDisplay.innerText = '';

    for (let index = 0; index < allCities.length; index++) {
            
        const cityCard = document.createElement('div');
        cityCard.classList = 'city-card';
        _index__WEBPACK_IMPORTED_MODULE_0__.mainDisplay.appendChild(cityCard);

        const cityName = document.createElement('h2');
        cityName.classList = 'city-name';
        cityName.textContent = allCities[index].cityName;
        cityCard.appendChild(cityName);

        const cityTemp = document.createElement('p');
        cityTemp.classList = 'city-temp';
        cityTemp.textContent = 'Current Temp: ' + Math.round(allCities[index].currentTemp) + ' \u00B0F';
        cityCard.appendChild(cityTemp);

        const cityTempHigh = document.createElement('p');
        cityTempHigh.classList = 'city-temp-high';
        cityTempHigh.textContent = 'High Temp: ' + Math.round(allCities[index].highTemp) + ' \u00B0F';
        cityCard.appendChild(cityTempHigh);

        const cityTempLow = document.createElement('p');
        cityTempLow.classList = 'city-temp-low';
        cityTempLow.textContent = 'Low Temp: ' + Math.round(allCities[index].lowTemp) + ' \u00B0F';
        cityCard.appendChild(cityTempLow);

        const cityWeather = document.createElement('p');
        cityWeather.classList = 'city-weather';
        cityWeather.textContent = allCities[index].weather.charAt(0).toUpperCase() + allCities[index].weather.slice(1);
        cityCard.appendChild(cityWeather);

        const weatherIcon = document.createElement('img');
        weatherIcon.classList = 'weather-icon';
        weatherIcon.src = 'https://openweathermap.org/img/wn/'+allCities[index].icon+'@2x.png';
        cityCard.appendChild(weatherIcon);

        // const viewMore = document.createElement('button');
        // viewMore.innerText = 'View Details';
        // cityCard.appendChild(viewMore);
        // viewMore.addEventListener('click', function(){
        //     extendedForcast(allCities[index]);
        // });

        const deleteCity = document.createElement('button');
        deleteCity.innerText = 'Delete City';
        cityCard.appendChild(deleteCity);
        deleteCity.addEventListener('click', function(){
            allCities.splice(index , 1);
            (0,_index__WEBPACK_IMPORTED_MODULE_0__.updateStorage)(allCities);
            renderCities(allCities);
        });
    };
    if(allCities.length < 5) {
        _index__WEBPACK_IMPORTED_MODULE_0__.mainDisplay.appendChild((0,_addNew__WEBPACK_IMPORTED_MODULE_1__["default"])());
    };
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/modules/apiActions.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9hZGROZXcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9hcGlBY3Rpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvY2l0eUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9yZW5kZXJDaXRpZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWJnLWNvbG9yOiBzbGF0ZWdyYXk7XFxuICAgIC0tdGV4dC1jb2xvcjogeWVsbG93Z3JlZW47XFxuICAgIC0tY2FyZC1iZzogcmdiKDgyLCA5OCwgMTE0KTtcXG4gICAgLS1idXR0b24tY2xyOiByZ2IoNjcsIDgzLCA5OSk7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLmNpdHktY2FyZCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiBtaW4oOTB2dywgNDUwcHgpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcXG59XFxuXFxuLmFkZC1uZXctY29udGFpbmVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IG1pbig5MHZ3LCA0NTBweCk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtYmcpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tY2xyKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5cXG4ubWFpbi1kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFNBQVM7SUFDVCxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1iZy1jb2xvcjogc2xhdGVncmF5O1xcbiAgICAtLXRleHQtY29sb3I6IHllbGxvd2dyZWVuO1xcbiAgICAtLWNhcmQtYmc6IHJnYig4MiwgOTgsIDExNCk7XFxuICAgIC0tYnV0dG9uLWNscjogcmdiKDY3LCA4MywgOTkpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbi5jaXR5LWNhcmQge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogbWluKDkwdncsIDQ1MHB4KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XFxufVxcblxcbi5hZGQtbmV3LWNvbnRhaW5lciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiBtaW4oOTB2dywgNDUwcHgpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWNscik7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLm1haW4tZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCByZW5kZXJDaXRpZXMgZnJvbSAnLi9tb2R1bGVzL3JlbmRlckNpdGllcyc7XG5cbmV4cG9ydCBsZXQgYWxsQ2l0aWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFsbENpdGllc1wiKSB8fCAnW10nKTtcbmV4cG9ydCBjb25zdCBtYWluRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb25Mb2FkJywgcmVuZGVyQ2l0aWVzKGFsbENpdGllcykpXG5cbi8vVXBkYXRlIFN0b3JhZ2VcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdG9yYWdlKGNpdHlBcnJheSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWxsQ2l0aWVzXCIsIEpTT04uc3RyaW5naWZ5KGNpdHlBcnJheSkpO1xufTsiLCJpbXBvcnQgeyBuZXdDaXR5QnlMb2NhdGlvbiwgbG9jYXRpb25FcnJvciwgZ2V0TG9jYXRpb25CeUNpdHksIGdldExvY2F0aW9uQnlaaXAsIGdldFdlYXRoZXIgfSBmcm9tIFwiLi9hcGlBY3Rpb25zXCI7XG5cbi8vY2hvb3NlIGhvdyB0byBhZGQgbmV3IGNpdHlcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE5ld0NpdHkoKSB7XG4gICAgY29uc3QgYWRkTmV3Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkTmV3Q29udGFpbmVyLmNsYXNzTGlzdCA9ICdhZGQtbmV3LWNvbnRhaW5lcic7XG4gICAgXG4gICAgY29uc3QgYWRkTmV3SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBhZGROZXdIZWFkZXIudGV4dENvbnRlbnQgPSAnQWRkIE5ldyBDaXR5JztcbiAgICBhZGROZXdDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkTmV3SGVhZGVyKTtcblxuICAgIGNvbnN0IGFkZE5ld1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWRkTmV3VGV4dC50ZXh0Q29udGVudCA9ICcoTWF4aW11bSA1IENpdGllcyknO1xuICAgIGFkZE5ld0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGROZXdUZXh0KTtcblxuICAgIGNvbnN0IGFkZE5ld0xvY2F0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkTmV3TG9jYXRpb25CdXR0b24uY2xhc3NMaXN0ID0gJ2FkZC1uZXctYnV0dG9uJztcbiAgICBhZGROZXdMb2NhdGlvbkJ1dHRvbi5pbm5lclRleHQgPSAnQWRkIGJ5IEN1cnJlbnQgTG9jYXRpb24nO1xuICAgIGFkZE5ld0xvY2F0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGFkZE5ld0NvbnRhaW5lci5pbm5lclRleHQgPSAnTG9hZGluZy4uLic7XG4gICAgICAgIGNvbnNvbGUubG9nKGFkZE5ld0NvbnRhaW5lci5pbm5lclRleHQpO1xuICAgICAgICBuZXdDaXR5QnlMb2NhdGlvbihhZGROZXdDb250YWluZXIpO1xuICAgIH0pO1xuICAgIGFkZE5ld0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGROZXdMb2NhdGlvbkJ1dHRvbik7XG5cbiAgICBjb25zdCBhZGROZXdaaXBCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGROZXdaaXBCdXR0b24uY2xhc3NMaXN0ID0gJ2FkZC1uZXctYnV0dG9uJztcbiAgICBhZGROZXdaaXBCdXR0b24uaW5uZXJUZXh0ID0gJ0FkZCBieSBaaXAgQ29kZSc7XG4gICAgYWRkTmV3WmlwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIG5ld0NpdHlCeVppcChhZGROZXdDb250YWluZXIpO1xuICAgIH0pO1xuICAgIGFkZE5ld0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGROZXdaaXBCdXR0b24pO1xuICAgIFxuICAgIGNvbnN0IGFkZE5ld05hbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGROZXdOYW1lQnV0dG9uLmNsYXNzTGlzdCA9ICdhZGQtbmV3LWJ1dHRvbic7XG4gICAgYWRkTmV3TmFtZUJ1dHRvbi5pbm5lclRleHQgPSAnQWRkIGJ5IENpdHkgYW5kIFN0YXRlJztcbiAgICBhZGROZXdOYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIG5ld0NpdHlCeU5hbWUoYWRkTmV3Q29udGFpbmVyKTtcbiAgICB9KTtcbiAgICBhZGROZXdDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkTmV3TmFtZUJ1dHRvbilcbiAgICBcbiAgICByZXR1cm4gYWRkTmV3Q29udGFpbmVyO1xufVxuXG4vL3JlY2VpdmUgbmV3IGNpdHkgYnkgemlwXG5mdW5jdGlvbiBuZXdDaXR5QnlaaXAoYWRkTmV3Q29udGFpbmVyKSB7XG4gICAgYWRkTmV3Q29udGFpbmVyLmlubmVyVGV4dCA9ICcnO1xuXG4gICAgY29uc3QgemlwSW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgemlwSW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XG4gICAgemlwSW5wdXRGaWVsZC5pZCA9ICd6aXAtaW5wdXQtZmllbGQnO1xuICAgIHppcElucHV0RmllbGQuY2xhc3NMaXN0ID0gJ3ppcC1pbnB1dCc7XG4gICAgY29uc3QgemlwSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgemlwSW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd6aXAtaW5wdXQtZmllbGQnKTtcbiAgICB6aXBJbnB1dExhYmVsLmlubmVyVGV4dCA9ICdaaXAgQ29kZTogJztcbiAgICBhZGROZXdDb250YWluZXIuYXBwZW5kQ2hpbGQoemlwSW5wdXRMYWJlbCk7XG4gICAgYWRkTmV3Q29udGFpbmVyLmFwcGVuZENoaWxkKHppcElucHV0RmllbGQpO1xuXG4gICAgY29uc3QgemlwQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgemlwQ2FuY2VsLmNsYXNzTGlzdCA9ICdjYW5jZWwtYnV0dG9uJztcbiAgICB6aXBDYW5jZWwuaW5uZXJUZXh0ID0gJ0NhbmNlbCc7XG4gICAgYWRkTmV3Q29udGFpbmVyLmFwcGVuZENoaWxkKHppcENhbmNlbCk7XG5cbiAgICBjb25zdCB6aXBBY2NlcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB6aXBBY2NlcHQuY2xhc3NMaXN0ID0gJ2FjY2VwdC1idXR0b24nO1xuICAgIHppcEFjY2VwdC5pbm5lclRleHQgPSAnRW50ZXInO1xuICAgIGFkZE5ld0NvbnRhaW5lci5hcHBlbmRDaGlsZCh6aXBBY2NlcHQpO1xuICAgIHppcEFjY2VwdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBhZGROZXdDb250YWluZXIuaW5uZXJUZXh0ID0gJ0xvYWRpbmcuLi4nO1xuICAgICAgICBnZXRMb2NhdGlvbkJ5WmlwKHppcElucHV0RmllbGQudmFsdWUpO1xuICAgICAgICAvLyBhZGROZXdDb250YWluZXIuaW5uZXJUZXh0ID0gJyc7XG4gICAgfSk7XG59XG5cbi8vcmVjZWl2ZSBuZXcgY2l0eSBieSBuYW1lXG5mdW5jdGlvbiBuZXdDaXR5QnlOYW1lKGFkZE5ld0NvbnRhaW5lcikge1xuICAgIGFkZE5ld0NvbnRhaW5lci5pbm5lclRleHQgPSAnJztcblxuICAgIGNvbnN0IGNpdHlJbnB1dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaXR5SW5wdXRGaWVsZC5pZCA9ICdjaXR5LWlucHV0LWZpZWxkJztcbiAgICBjaXR5SW5wdXRGaWVsZC5jbGFzc0xpc3QgPSAnY2l0eS1pbnB1dCc7XG4gICAgY29uc3QgY2l0eUlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNpdHlJbnB1dExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2NpdHktaW5wdXQtZmllbGQnKTtcbiAgICBjaXR5SW5wdXRMYWJlbC5pbm5lclRleHQgPSAnQ2l0eTogJztcbiAgICBhZGROZXdDb250YWluZXIuYXBwZW5kQ2hpbGQoY2l0eUlucHV0TGFiZWwpO1xuICAgIGFkZE5ld0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaXR5SW5wdXRGaWVsZCk7XG5cbiAgICBjb25zdCBzdGF0ZVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHN0YXRlU2VsZWN0LmlkID0gJ3NlbGVjdC1zdGF0ZSc7XG4gICAgY29uc3Qgc3RhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgc3RhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdzZWxlY3Qtc3RhdGUnKTtcbiAgICBzdGF0ZUxhYmVsLmlubmVyVGV4dCA9ICdTdGF0ZTogJ1xuICAgIGFkZE5ld0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdGF0ZUxhYmVsKTtcbiAgICBhZGROZXdDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhdGVTZWxlY3QpO1xuXG4gICAgY29uc3Qgc3RhdGVDb2RlcyA9IFtcIkFMXCIsIFwiQUtcIiwgXCJBWlwiLCBcIkFSXCIsIFwiQ0FcIiwgXCJDT1wiLCBcIkNUXCIsIFwiREVcIiwgXCJGTFwiLCBcIkdBXCIsIFwiSElcIiwgXCJJRFwiLCBcIklMXCIsIFwiSU5cIiwgXCJJQVwiLCBcIktTXCIsIFwiS1lcIiwgXCJMQVwiLCBcIk1FXCIsIFwiTURcIiwgXCJNQVwiLCBcIk1JXCIsIFwiTU5cIiwgXCJNU1wiLCBcIk1PXCIsIFwiTVRcIiwgXCJORVwiLCBcIk5WXCIsIFwiTkhcIiwgXCJOSlwiLCBcIk5NXCIsIFwiTllcIiwgXCJOQ1wiLCBcIk5EXCIsIFwiT0hcIiwgXCJPS1wiLCBcIk9SXCIsIFwiUEFcIiwgXCJSSVwiLCBcIlNDXCIsIFwiU0RcIiwgXCJUTlwiLCBcIlRYXCIsIFwiVVRcIiwgXCJWVFwiLCBcIlZBXCIsIFwiV0FcIiwgXCJXVlwiLCBcIldJXCIsIFwiV1lcIl07XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RhdGVDb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc3RhdGVDb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHN0YXRlQ29kZS52YWx1ZSA9IHN0YXRlQ29kZXNbaV07XG4gICAgICAgIHN0YXRlQ29kZS5pbm5lclRleHQgPSBzdGF0ZUNvZGVzW2ldO1xuICAgICAgICBzdGF0ZVNlbGVjdC5hcHBlbmRDaGlsZChzdGF0ZUNvZGUpO1xuICAgIH1cblxuICAgIGNvbnN0IGJ5TmFtZUNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ5TmFtZUNhbmNlbC5jbGFzc0xpc3QgPSAnY2FuY2VsLWJ1dHRvbic7XG4gICAgYnlOYW1lQ2FuY2VsLmlubmVyVGV4dCA9ICdDYW5jZWwnO1xuICAgIGFkZE5ld0NvbnRhaW5lci5hcHBlbmRDaGlsZChieU5hbWVDYW5jZWwpO1xuXG4gICAgY29uc3QgYnlOYW1lQWNjZXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnlOYW1lQWNjZXB0LmNsYXNzTGlzdCA9ICdhY2NlcHQtYnV0dG9uJztcbiAgICBieU5hbWVBY2NlcHQuaW5uZXJUZXh0ID0gJ0VudGVyJztcbiAgICBhZGROZXdDb250YWluZXIuYXBwZW5kQ2hpbGQoYnlOYW1lQWNjZXB0KTtcbiAgICBieU5hbWVBY2NlcHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgYWRkTmV3Q29udGFpbmVyLmlubmVyVGV4dCA9ICdMb2FkaW5nLi4uJztcbiAgICAgICAgZ2V0TG9jYXRpb25CeUNpdHkoY2l0eUlucHV0RmllbGQudmFsdWUsIHN0YXRlU2VsZWN0LnZhbHVlKTtcbiAgICAgICAgLy8gYWRkTmV3Q29udGFpbmVyLmlubmVyVGV4dCA9ICcnO1xuICAgIH0pO1xufTtcbiIsImltcG9ydCByZW5kZXJDaXRpZXMgZnJvbSBcIi4vcmVuZGVyQ2l0aWVzXCI7XG5pbXBvcnQgeyBhbGxDaXRpZXMgLCB1cGRhdGVTdG9yYWdlIH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgeyBuZXdDaXR5IH0gZnJvbSBcIi4vY2l0eUZhY3RvcnlcIjtcblxuLy9yZWNpZXZlIG5ldyBjaXR5IGJ5IGxvY2F0aW9uXG5leHBvcnQgZnVuY3Rpb24gbmV3Q2l0eUJ5TG9jYXRpb24oYWRkTmV3Q29udGFpbmVyKSB7XG4gICAgaWYoJ2dlb2xvY2F0aW9uJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigoZnVuY3Rpb24ocG9zaXRpb24pIHtcbiAgICAgICAgICAgIGdldFdlYXRoZXIocG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLCBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlKTtcbiAgICAgICAgfSksIGxvY2F0aW9uRXJyb3IpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhbGVydCgnTXVzdCBhbGxvdyBsb2NhdGlvbiB0byBiZSBkZXRlY3RlZCcpO1xuICAgICAgICByZW5kZXJDaXRpZXMoYWxsQ2l0aWVzKTtcbiAgICAgICAgY29uc29sZS5sb2coJ25vIGxvY2F0aW9uJyk7XG4gICAgfVxuICAgIC8vIGFkZE5ld0NvbnRhaW5lci5pbm5lclRleHQgPSAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvY2F0aW9uRXJyb3IoZXJyb3IpIHtcbiAgICBhbGVydCgnTXVzdCBhbGxvdyBsb2NhdGlvbiB0byBiZSBkZXRlY3RlZCcpO1xuICAgIHJlbmRlckNpdGllcyhhbGxDaXRpZXMpO1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbn1cblxuLy9GaW5kIExhdCBhbmQgTG9uIGZyb20gY2l0eSwgc3RhdGUgbmFtZVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uQnlDaXR5KHNlYXJjaENpdHksIHNlYXJjaFN0YXRlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9Jysgc2VhcmNoQ2l0eSArICcsJyArIHNlYXJjaFN0YXRlICsgJyxVUyZsaW1pdD0xJmFwcGlkPWMwYTkyYzBhYzU1YzkxZGUzMjZmZmE4ZmE1YjRlMWY3Jywge21vZGU6ICdjb3JzJ30pO1xuICAgICAgICBjb25zdCBjaXR5RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgZ2V0V2VhdGhlcihjaXR5RGF0YVswXS5sYXQsIGNpdHlEYXRhWzBdLmxvbik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgYWxlcnQoJ0ludmFsaWQgQ2l0eS9TdGF0ZScpO1xuICAgICAgICByZW5kZXJDaXRpZXMoYWxsQ2l0aWVzKTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbn07XG5cbi8vZmluZCBMYXQgYW5kIExvbiBmcm9tIHppcFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uQnlaaXAoc2VhcmNoWmlwKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvemlwP3ppcD0nKyBzZWFyY2haaXAgKyAnLFVTJmxpbWl0PTUmYXBwaWQ9YzBhOTJjMGFjNTVjOTFkZTMyNmZmYThmYTViNGUxZjcnLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgICAgIGNvbnN0IGNpdHlEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBnZXRXZWF0aGVyKGNpdHlEYXRhLmxhdCwgY2l0eURhdGEubG9uKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBhbGVydCgnQ291bGQgbm90IGZpbmQgWmlwIENvZGUnKTtcbiAgICAgICAgcmVuZGVyQ2l0aWVzKGFsbENpdGllcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG59O1xuXG4vL2ZldGNoIHdlYXRoZXIgaW5mbyBmcm9tIEFQSVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobGF0LCBsb24pIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JytsYXQrJyZsb249Jytsb24rJyZhcHBpZD1jMGE5MmMwYWM1NWM5MWRlMzI2ZmZhOGZhNWI0ZTFmNyZ1bml0cz1pbXBlcmlhbCcsIHttb2RlOiAnY29ycyd9KTtcbiAgICAgICAgY29uc3QgY2l0eVdlYXRoZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGxldCBjaXR5SW5mbyA9IG5ld0NpdHkoY2l0eVdlYXRoZXIubmFtZSwgY2l0eVdlYXRoZXIubWFpbi50ZW1wLCBjaXR5V2VhdGhlci5tYWluLnRlbXBfbWF4LCBjaXR5V2VhdGhlci5tYWluLnRlbXBfbWluLCBjaXR5V2VhdGhlci53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLCBjaXR5V2VhdGhlci53ZWF0aGVyWzBdLmljb24sIGxhdCwgbG9uKTtcbiAgICAgICAgYWxsQ2l0aWVzLnB1c2goY2l0eUluZm8pO1xuICAgICAgICB1cGRhdGVTdG9yYWdlKGFsbENpdGllcyk7XG4gICAgICAgIHJlbmRlckNpdGllcyhhbGxDaXRpZXMpOyAgICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgYWxlcnQoJ0ludmFsaWQgZW50cnknKTtcbiAgICAgICAgcmVuZGVyQ2l0aWVzKGFsbENpdGllcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQWxsKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsQ2l0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JyArIGFsbENpdGllc1tpXS5sYXQrJyZsb249JythbGxDaXRpZXNbaV0ubG9uICsgJyZhcHBpZD1jMGE5MmMwYWM1NWM5MWRlMzI2ZmZhOGZhNWI0ZTFmNyZ1bml0cz1pbXBlcmlhbCcsIHttb2RlOiAnY29ycyd9KTtcbiAgICAgICAgICAgIGNvbnN0IGNpdHlXZWF0aGVyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgbGV0IGNpdHlJbmZvID0gbmV3Q2l0eShjaXR5V2VhdGhlci5uYW1lLCBjaXR5V2VhdGhlci5tYWluLnRlbXAsIGNpdHlXZWF0aGVyLm1haW4udGVtcF9tYXgsIGNpdHlXZWF0aGVyLm1haW4udGVtcF9taW4sIGNpdHlXZWF0aGVyLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sIGNpdHlXZWF0aGVyLndlYXRoZXJbMF0uaWNvbiwgY2l0eVdlYXRoZXIuY29vcmQubGF0LCBjaXR5V2VhdGhlci5jb29yZC5sb24pO1xuICAgICAgICAgICAgYWxsQ2l0aWVzW2ldID0gY2l0eUluZm87XG4gICAgICAgICAgICB1cGRhdGVTdG9yYWdlKGFsbENpdGllcyk7XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdJbnZhbGlkIGVudHJ5Jyk7XG4gICAgICAgICAgICByZW5kZXJDaXRpZXMoYWxsQ2l0aWVzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gYXN5bmMgZnVuY3Rpb24gZXh0ZW5kZWRGb3JlY2FzdChjaXR5KSB7XG4vLyAgICAgdHJ5IHtcbi8vICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0nK2NpdHkubGF0KycmbG9uPScrY2l0eS5sb24rJyZhcHBpZD1jMGE5MmMwYWM1NWM5MWRlMzI2ZmZhOGZhNWI0ZTFmNyZ1bml0cz1pbXBlcmlhbCcsIHttb2RlOiAnY29ycyd9KTtcbi8vICAgICAgICAgY29uc3QgZXh0ZW5kZWREZXRhaWxzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhleHRlbmRlZERldGFpbHMpO1xuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbi8vICAgICB9XG4vLyB9XG5cbiIsImV4cG9ydCBjb25zdCBuZXdDaXR5ID0gKGNpdHlOYW1lLCBjdXJyZW50VGVtcCwgaGlnaFRlbXAsIGxvd1RlbXAsIHdlYXRoZXIsIGljb24sIGxhdCwgbG9uKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2l0eU5hbWUsXG4gICAgICAgIGN1cnJlbnRUZW1wLFxuICAgICAgICBoaWdoVGVtcCxcbiAgICAgICAgbG93VGVtcCxcbiAgICAgICAgd2VhdGhlcixcbiAgICAgICAgaWNvbixcbiAgICAgICAgbGF0LFxuICAgICAgICBsb25cbiAgICB9O1xufSIsImltcG9ydCB7ICBtYWluRGlzcGxheSAsIHVwZGF0ZVN0b3JhZ2UgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCBhZGROZXdDaXR5IGZyb20gXCIuL2FkZE5ld1wiO1xuaW1wb3J0IHsgdXBkYXRlQWxsIH0gZnJvbSBcIi4vYXBpQWN0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJDaXRpZXMoYWxsQ2l0aWVzKSB7XG4gICAgXG4gICAgdXBkYXRlQWxsKCk7XG4gICAgbWFpbkRpc3BsYXkuY2xhc3NMaXN0ID0gJ21haW4tZGlzcGxheSc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluRGlzcGxheSk7XG5cbiAgICBtYWluRGlzcGxheS5pbm5lclRleHQgPSAnJztcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhbGxDaXRpZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgY2l0eUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2l0eUNhcmQuY2xhc3NMaXN0ID0gJ2NpdHktY2FyZCc7XG4gICAgICAgIG1haW5EaXNwbGF5LmFwcGVuZENoaWxkKGNpdHlDYXJkKTtcblxuICAgICAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGNpdHlOYW1lLmNsYXNzTGlzdCA9ICdjaXR5LW5hbWUnO1xuICAgICAgICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IGFsbENpdGllc1tpbmRleF0uY2l0eU5hbWU7XG4gICAgICAgIGNpdHlDYXJkLmFwcGVuZENoaWxkKGNpdHlOYW1lKTtcblxuICAgICAgICBjb25zdCBjaXR5VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY2l0eVRlbXAuY2xhc3NMaXN0ID0gJ2NpdHktdGVtcCc7XG4gICAgICAgIGNpdHlUZW1wLnRleHRDb250ZW50ID0gJ0N1cnJlbnQgVGVtcDogJyArIE1hdGgucm91bmQoYWxsQ2l0aWVzW2luZGV4XS5jdXJyZW50VGVtcCkgKyAnIFxcdTAwQjBGJztcbiAgICAgICAgY2l0eUNhcmQuYXBwZW5kQ2hpbGQoY2l0eVRlbXApO1xuXG4gICAgICAgIGNvbnN0IGNpdHlUZW1wSGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY2l0eVRlbXBIaWdoLmNsYXNzTGlzdCA9ICdjaXR5LXRlbXAtaGlnaCc7XG4gICAgICAgIGNpdHlUZW1wSGlnaC50ZXh0Q29udGVudCA9ICdIaWdoIFRlbXA6ICcgKyBNYXRoLnJvdW5kKGFsbENpdGllc1tpbmRleF0uaGlnaFRlbXApICsgJyBcXHUwMEIwRic7XG4gICAgICAgIGNpdHlDYXJkLmFwcGVuZENoaWxkKGNpdHlUZW1wSGlnaCk7XG5cbiAgICAgICAgY29uc3QgY2l0eVRlbXBMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNpdHlUZW1wTG93LmNsYXNzTGlzdCA9ICdjaXR5LXRlbXAtbG93JztcbiAgICAgICAgY2l0eVRlbXBMb3cudGV4dENvbnRlbnQgPSAnTG93IFRlbXA6ICcgKyBNYXRoLnJvdW5kKGFsbENpdGllc1tpbmRleF0ubG93VGVtcCkgKyAnIFxcdTAwQjBGJztcbiAgICAgICAgY2l0eUNhcmQuYXBwZW5kQ2hpbGQoY2l0eVRlbXBMb3cpO1xuXG4gICAgICAgIGNvbnN0IGNpdHlXZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjaXR5V2VhdGhlci5jbGFzc0xpc3QgPSAnY2l0eS13ZWF0aGVyJztcbiAgICAgICAgY2l0eVdlYXRoZXIudGV4dENvbnRlbnQgPSBhbGxDaXRpZXNbaW5kZXhdLndlYXRoZXIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBhbGxDaXRpZXNbaW5kZXhdLndlYXRoZXIuc2xpY2UoMSk7XG4gICAgICAgIGNpdHlDYXJkLmFwcGVuZENoaWxkKGNpdHlXZWF0aGVyKTtcblxuICAgICAgICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QgPSAnd2VhdGhlci1pY29uJztcbiAgICAgICAgd2VhdGhlckljb24uc3JjID0gJ2h0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8nK2FsbENpdGllc1tpbmRleF0uaWNvbisnQDJ4LnBuZyc7XG4gICAgICAgIGNpdHlDYXJkLmFwcGVuZENoaWxkKHdlYXRoZXJJY29uKTtcblxuICAgICAgICAvLyBjb25zdCB2aWV3TW9yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAvLyB2aWV3TW9yZS5pbm5lclRleHQgPSAnVmlldyBEZXRhaWxzJztcbiAgICAgICAgLy8gY2l0eUNhcmQuYXBwZW5kQ2hpbGQodmlld01vcmUpO1xuICAgICAgICAvLyB2aWV3TW9yZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vICAgICBleHRlbmRlZEZvcmNhc3QoYWxsQ2l0aWVzW2luZGV4XSk7XG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZUNpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlQ2l0eS5pbm5lclRleHQgPSAnRGVsZXRlIENpdHknO1xuICAgICAgICBjaXR5Q2FyZC5hcHBlbmRDaGlsZChkZWxldGVDaXR5KTtcbiAgICAgICAgZGVsZXRlQ2l0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBhbGxDaXRpZXMuc3BsaWNlKGluZGV4ICwgMSk7XG4gICAgICAgICAgICB1cGRhdGVTdG9yYWdlKGFsbENpdGllcyk7XG4gICAgICAgICAgICByZW5kZXJDaXRpZXMoYWxsQ2l0aWVzKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBpZihhbGxDaXRpZXMubGVuZ3RoIDwgNSkge1xuICAgICAgICBtYWluRGlzcGxheS5hcHBlbmRDaGlsZChhZGROZXdDaXR5KCkpO1xuICAgIH07XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbW9kdWxlcy9hcGlBY3Rpb25zLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
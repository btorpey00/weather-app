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
        (0,_apiActions__WEBPACK_IMPORTED_MODULE_0__.getLocationByZip)(zipInputField.value);
        addNewContainer.innerText = '';
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
        (0,_apiActions__WEBPACK_IMPORTED_MODULE_0__.getLocationByCity)(cityInputField.value, stateSelect.value);
        addNewContainer.innerText = '';
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
        console.log('no location');
    }
    addNewContainer.innerText = '';
}

function locationError(error) {
    alert('Must allow location to be detected');
    console.log(error);
}

//Find Lat and Lon from city, state name
async function getLocationByCity(searchCity, searchState) {
    try {
        const response = await fetch('http://api.openweathermap.org/geo/1.0/direct?q='+ searchCity + ',' + searchState + ',US&limit=1&appid=c0a92c0ac55c91de326ffa8fa5b4e1f7', {mode: 'cors'});
        const cityData = await response.json();
        getWeather(cityData[0].lat, cityData[0].lon);
    } catch (error) {
        alert('Invalid City/State');
        console.log(error);
    }
};

//find Lat and Lon from zip
async function getLocationByZip(searchZip) {
    try {
        const response = await fetch('http://api.openweathermap.org/geo/1.0/zip?zip='+ searchZip + ',US&limit=5&appid=c0a92c0ac55c91de326ffa8fa5b4e1f7', {mode: 'cors'});
        const cityData = await response.json();
        getWeather(cityData.lat, cityData.lon);
    } catch (error) {
        alert('Could not find Zip Code');
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
            // return array;
            // updateStorage(array);
            // renderCities(allCities);        
            // return cityInfo;
        } catch (error) {
            alert('Invalid entry');
            // renderCities(allCities);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2FkZE5ldy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2FwaUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9jaXR5RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3JlbmRlckNpdGllcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tYmctY29sb3I6IHNsYXRlZ3JheTtcXG4gICAgLS10ZXh0LWNvbG9yOiB5ZWxsb3dncmVlbjtcXG4gICAgLS1jYXJkLWJnOiByZ2IoODIsIDk4LCAxMTQpO1xcbiAgICAtLWJ1dHRvbi1jbHI6IHJnYig2NywgODMsIDk5KTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5cXG4uY2l0eS1jYXJkIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IG1pbig5MHZ3LCA0NTBweCk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtYmcpO1xcbn1cXG5cXG4uYWRkLW5ldy1jb250YWluZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogbWluKDkwdncsIDQ1MHB4KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbi5tYWluLWRpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsU0FBUztJQUNULGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWJnLWNvbG9yOiBzbGF0ZWdyYXk7XFxuICAgIC0tdGV4dC1jb2xvcjogeWVsbG93Z3JlZW47XFxuICAgIC0tY2FyZC1iZzogcmdiKDgyLCA5OCwgMTE0KTtcXG4gICAgLS1idXR0b24tY2xyOiByZ2IoNjcsIDgzLCA5OSk7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLmNpdHktY2FyZCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiBtaW4oOTB2dywgNDUwcHgpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcXG59XFxuXFxuLmFkZC1uZXctY29udGFpbmVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IG1pbig5MHZ3LCA0NTBweCk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtYmcpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tY2xyKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5cXG4ubWFpbi1kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHJlbmRlckNpdGllcyBmcm9tICcuL21vZHVsZXMvcmVuZGVyQ2l0aWVzJztcblxuZXhwb3J0IGxldCBhbGxDaXRpZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWxsQ2l0aWVzXCIpIHx8ICdbXScpO1xuZXhwb3J0IGNvbnN0IG1haW5EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvbkxvYWQnLCByZW5kZXJDaXRpZXMoYWxsQ2l0aWVzKSlcblxuLy9VcGRhdGUgU3RvcmFnZVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVN0b3JhZ2UoY2l0eUFycmF5KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbGxDaXRpZXNcIiwgSlNPTi5zdHJpbmdpZnkoY2l0eUFycmF5KSk7XG59OyIsImltcG9ydCB7IG5ld0NpdHlCeUxvY2F0aW9uLCBsb2NhdGlvbkVycm9yLCBnZXRMb2NhdGlvbkJ5Q2l0eSwgZ2V0TG9jYXRpb25CeVppcCwgZ2V0V2VhdGhlciB9IGZyb20gXCIuL2FwaUFjdGlvbnNcIjtcblxuLy9jaG9vc2UgaG93IHRvIGFkZCBuZXcgY2l0eVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTmV3Q2l0eSgpIHtcbiAgICBjb25zdCBhZGROZXdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGROZXdDb250YWluZXIuY2xhc3NMaXN0ID0gJ2FkZC1uZXctY29udGFpbmVyJztcbiAgICBcbiAgICBjb25zdCBhZGROZXdIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGFkZE5ld0hlYWRlci50ZXh0Q29udGVudCA9ICdBZGQgTmV3IENpdHknO1xuICAgIGFkZE5ld0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGROZXdIZWFkZXIpO1xuXG4gICAgY29uc3QgYWRkTmV3VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhZGROZXdUZXh0LnRleHRDb250ZW50ID0gJyhNYXhpbXVtIDUgQ2l0aWVzKSc7XG4gICAgYWRkTmV3Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZE5ld1RleHQpO1xuXG4gICAgY29uc3QgYWRkTmV3TG9jYXRpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGROZXdMb2NhdGlvbkJ1dHRvbi5jbGFzc0xpc3QgPSAnYWRkLW5ldy1idXR0b24nO1xuICAgIGFkZE5ld0xvY2F0aW9uQnV0dG9uLmlubmVyVGV4dCA9ICdBZGQgYnkgQ3VycmVudCBMb2NhdGlvbic7XG4gICAgYWRkTmV3TG9jYXRpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbmV3Q2l0eUJ5TG9jYXRpb24oYWRkTmV3Q29udGFpbmVyKTtcbiAgICB9KTtcbiAgICBhZGROZXdDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkTmV3TG9jYXRpb25CdXR0b24pO1xuXG4gICAgY29uc3QgYWRkTmV3WmlwQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkTmV3WmlwQnV0dG9uLmNsYXNzTGlzdCA9ICdhZGQtbmV3LWJ1dHRvbic7XG4gICAgYWRkTmV3WmlwQnV0dG9uLmlubmVyVGV4dCA9ICdBZGQgYnkgWmlwIENvZGUnO1xuICAgIGFkZE5ld1ppcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBuZXdDaXR5QnlaaXAoYWRkTmV3Q29udGFpbmVyKTtcbiAgICB9KTtcbiAgICBhZGROZXdDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkTmV3WmlwQnV0dG9uKTtcbiAgICBcbiAgICBjb25zdCBhZGROZXdOYW1lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkTmV3TmFtZUJ1dHRvbi5jbGFzc0xpc3QgPSAnYWRkLW5ldy1idXR0b24nO1xuICAgIGFkZE5ld05hbWVCdXR0b24uaW5uZXJUZXh0ID0gJ0FkZCBieSBDaXR5IGFuZCBTdGF0ZSc7XG4gICAgYWRkTmV3TmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBuZXdDaXR5QnlOYW1lKGFkZE5ld0NvbnRhaW5lcik7XG4gICAgfSk7XG4gICAgYWRkTmV3Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZE5ld05hbWVCdXR0b24pXG4gICAgXG4gICAgcmV0dXJuIGFkZE5ld0NvbnRhaW5lcjtcbn1cblxuLy9yZWNlaXZlIG5ldyBjaXR5IGJ5IHppcFxuZnVuY3Rpb24gbmV3Q2l0eUJ5WmlwKGFkZE5ld0NvbnRhaW5lcikge1xuICAgIGFkZE5ld0NvbnRhaW5lci5pbm5lclRleHQgPSAnJztcblxuICAgIGNvbnN0IHppcElucHV0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHppcElucHV0RmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xuICAgIHppcElucHV0RmllbGQuaWQgPSAnemlwLWlucHV0LWZpZWxkJztcbiAgICB6aXBJbnB1dEZpZWxkLmNsYXNzTGlzdCA9ICd6aXAtaW5wdXQnO1xuICAgIGNvbnN0IHppcElucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHppcElucHV0TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnemlwLWlucHV0LWZpZWxkJyk7XG4gICAgemlwSW5wdXRMYWJlbC5pbm5lclRleHQgPSAnWmlwIENvZGU6ICc7XG4gICAgYWRkTmV3Q29udGFpbmVyLmFwcGVuZENoaWxkKHppcElucHV0TGFiZWwpO1xuICAgIGFkZE5ld0NvbnRhaW5lci5hcHBlbmRDaGlsZCh6aXBJbnB1dEZpZWxkKTtcblxuICAgIGNvbnN0IHppcENhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHppcENhbmNlbC5jbGFzc0xpc3QgPSAnY2FuY2VsLWJ1dHRvbic7XG4gICAgemlwQ2FuY2VsLmlubmVyVGV4dCA9ICdDYW5jZWwnO1xuICAgIGFkZE5ld0NvbnRhaW5lci5hcHBlbmRDaGlsZCh6aXBDYW5jZWwpO1xuXG4gICAgY29uc3QgemlwQWNjZXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgemlwQWNjZXB0LmNsYXNzTGlzdCA9ICdhY2NlcHQtYnV0dG9uJztcbiAgICB6aXBBY2NlcHQuaW5uZXJUZXh0ID0gJ0VudGVyJztcbiAgICBhZGROZXdDb250YWluZXIuYXBwZW5kQ2hpbGQoemlwQWNjZXB0KTtcbiAgICB6aXBBY2NlcHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZ2V0TG9jYXRpb25CeVppcCh6aXBJbnB1dEZpZWxkLnZhbHVlKTtcbiAgICAgICAgYWRkTmV3Q29udGFpbmVyLmlubmVyVGV4dCA9ICcnO1xuICAgIH0pO1xufVxuXG4vL3JlY2VpdmUgbmV3IGNpdHkgYnkgbmFtZVxuZnVuY3Rpb24gbmV3Q2l0eUJ5TmFtZShhZGROZXdDb250YWluZXIpIHtcbiAgICBhZGROZXdDb250YWluZXIuaW5uZXJUZXh0ID0gJyc7XG5cbiAgICBjb25zdCBjaXR5SW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY2l0eUlucHV0RmllbGQuaWQgPSAnY2l0eS1pbnB1dC1maWVsZCc7XG4gICAgY2l0eUlucHV0RmllbGQuY2xhc3NMaXN0ID0gJ2NpdHktaW5wdXQnO1xuICAgIGNvbnN0IGNpdHlJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjaXR5SW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdjaXR5LWlucHV0LWZpZWxkJyk7XG4gICAgY2l0eUlucHV0TGFiZWwuaW5uZXJUZXh0ID0gJ0NpdHk6ICc7XG4gICAgYWRkTmV3Q29udGFpbmVyLmFwcGVuZENoaWxkKGNpdHlJbnB1dExhYmVsKTtcbiAgICBhZGROZXdDb250YWluZXIuYXBwZW5kQ2hpbGQoY2l0eUlucHV0RmllbGQpO1xuXG4gICAgY29uc3Qgc3RhdGVTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBzdGF0ZVNlbGVjdC5pZCA9ICdzZWxlY3Qtc3RhdGUnO1xuICAgIGNvbnN0IHN0YXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHN0YXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnc2VsZWN0LXN0YXRlJyk7XG4gICAgc3RhdGVMYWJlbC5pbm5lclRleHQgPSAnU3RhdGU6ICdcbiAgICBhZGROZXdDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhdGVMYWJlbCk7XG4gICAgYWRkTmV3Q29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXRlU2VsZWN0KTtcblxuICAgIGNvbnN0IHN0YXRlQ29kZXMgPSBbXCJBTFwiLCBcIkFLXCIsIFwiQVpcIiwgXCJBUlwiLCBcIkNBXCIsIFwiQ09cIiwgXCJDVFwiLCBcIkRFXCIsIFwiRkxcIiwgXCJHQVwiLCBcIkhJXCIsIFwiSURcIiwgXCJJTFwiLCBcIklOXCIsIFwiSUFcIiwgXCJLU1wiLCBcIktZXCIsIFwiTEFcIiwgXCJNRVwiLCBcIk1EXCIsIFwiTUFcIiwgXCJNSVwiLCBcIk1OXCIsIFwiTVNcIiwgXCJNT1wiLCBcIk1UXCIsIFwiTkVcIiwgXCJOVlwiLCBcIk5IXCIsIFwiTkpcIiwgXCJOTVwiLCBcIk5ZXCIsIFwiTkNcIiwgXCJORFwiLCBcIk9IXCIsIFwiT0tcIiwgXCJPUlwiLCBcIlBBXCIsIFwiUklcIiwgXCJTQ1wiLCBcIlNEXCIsIFwiVE5cIiwgXCJUWFwiLCBcIlVUXCIsIFwiVlRcIiwgXCJWQVwiLCBcIldBXCIsIFwiV1ZcIiwgXCJXSVwiLCBcIldZXCJdO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHN0YXRlQ29kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHN0YXRlQ29kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBzdGF0ZUNvZGUudmFsdWUgPSBzdGF0ZUNvZGVzW2ldO1xuICAgICAgICBzdGF0ZUNvZGUuaW5uZXJUZXh0ID0gc3RhdGVDb2Rlc1tpXTtcbiAgICAgICAgc3RhdGVTZWxlY3QuYXBwZW5kQ2hpbGQoc3RhdGVDb2RlKTtcbiAgICB9XG5cbiAgICBjb25zdCBieU5hbWVDYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBieU5hbWVDYW5jZWwuY2xhc3NMaXN0ID0gJ2NhbmNlbC1idXR0b24nO1xuICAgIGJ5TmFtZUNhbmNlbC5pbm5lclRleHQgPSAnQ2FuY2VsJztcbiAgICBhZGROZXdDb250YWluZXIuYXBwZW5kQ2hpbGQoYnlOYW1lQ2FuY2VsKTtcblxuICAgIGNvbnN0IGJ5TmFtZUFjY2VwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ5TmFtZUFjY2VwdC5jbGFzc0xpc3QgPSAnYWNjZXB0LWJ1dHRvbic7XG4gICAgYnlOYW1lQWNjZXB0LmlubmVyVGV4dCA9ICdFbnRlcic7XG4gICAgYWRkTmV3Q29udGFpbmVyLmFwcGVuZENoaWxkKGJ5TmFtZUFjY2VwdCk7XG4gICAgYnlOYW1lQWNjZXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGdldExvY2F0aW9uQnlDaXR5KGNpdHlJbnB1dEZpZWxkLnZhbHVlLCBzdGF0ZVNlbGVjdC52YWx1ZSk7XG4gICAgICAgIGFkZE5ld0NvbnRhaW5lci5pbm5lclRleHQgPSAnJztcbiAgICB9KTtcbn07XG4iLCJpbXBvcnQgcmVuZGVyQ2l0aWVzIGZyb20gXCIuL3JlbmRlckNpdGllc1wiO1xuaW1wb3J0IHsgYWxsQ2l0aWVzICwgdXBkYXRlU3RvcmFnZSB9IGZyb20gXCIuLlwiO1xuaW1wb3J0IHsgbmV3Q2l0eSB9IGZyb20gXCIuL2NpdHlGYWN0b3J5XCI7XG5cbi8vcmVjaWV2ZSBuZXcgY2l0eSBieSBsb2NhdGlvblxuZXhwb3J0IGZ1bmN0aW9uIG5ld0NpdHlCeUxvY2F0aW9uKGFkZE5ld0NvbnRhaW5lcikge1xuICAgIGlmKCdnZW9sb2NhdGlvbicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICBnZXRXZWF0aGVyKHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSwgcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSk7XG4gICAgICAgIH0pLCBsb2NhdGlvbkVycm9yKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYWxlcnQoJ011c3QgYWxsb3cgbG9jYXRpb24gdG8gYmUgZGV0ZWN0ZWQnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ25vIGxvY2F0aW9uJyk7XG4gICAgfVxuICAgIGFkZE5ld0NvbnRhaW5lci5pbm5lclRleHQgPSAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvY2F0aW9uRXJyb3IoZXJyb3IpIHtcbiAgICBhbGVydCgnTXVzdCBhbGxvdyBsb2NhdGlvbiB0byBiZSBkZXRlY3RlZCcpO1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbn1cblxuLy9GaW5kIExhdCBhbmQgTG9uIGZyb20gY2l0eSwgc3RhdGUgbmFtZVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uQnlDaXR5KHNlYXJjaENpdHksIHNlYXJjaFN0YXRlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0nKyBzZWFyY2hDaXR5ICsgJywnICsgc2VhcmNoU3RhdGUgKyAnLFVTJmxpbWl0PTEmYXBwaWQ9YzBhOTJjMGFjNTVjOTFkZTMyNmZmYThmYTViNGUxZjcnLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgICAgIGNvbnN0IGNpdHlEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBnZXRXZWF0aGVyKGNpdHlEYXRhWzBdLmxhdCwgY2l0eURhdGFbMF0ubG9uKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBhbGVydCgnSW52YWxpZCBDaXR5L1N0YXRlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG59O1xuXG4vL2ZpbmQgTGF0IGFuZCBMb24gZnJvbSB6aXBcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbkJ5WmlwKHNlYXJjaFppcCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvemlwP3ppcD0nKyBzZWFyY2haaXAgKyAnLFVTJmxpbWl0PTUmYXBwaWQ9YzBhOTJjMGFjNTVjOTFkZTMyNmZmYThmYTViNGUxZjcnLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgICAgIGNvbnN0IGNpdHlEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBnZXRXZWF0aGVyKGNpdHlEYXRhLmxhdCwgY2l0eURhdGEubG9uKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBhbGVydCgnQ291bGQgbm90IGZpbmQgWmlwIENvZGUnKTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbn07XG5cbi8vZmV0Y2ggd2VhdGhlciBpbmZvIGZyb20gQVBJXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsYXQsIGxvbikge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0nK2xhdCsnJmxvbj0nK2xvbisnJmFwcGlkPWMwYTkyYzBhYzU1YzkxZGUzMjZmZmE4ZmE1YjRlMWY3JnVuaXRzPWltcGVyaWFsJywge21vZGU6ICdjb3JzJ30pO1xuICAgICAgICBjb25zdCBjaXR5V2VhdGhlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgbGV0IGNpdHlJbmZvID0gbmV3Q2l0eShjaXR5V2VhdGhlci5uYW1lLCBjaXR5V2VhdGhlci5tYWluLnRlbXAsIGNpdHlXZWF0aGVyLm1haW4udGVtcF9tYXgsIGNpdHlXZWF0aGVyLm1haW4udGVtcF9taW4sIGNpdHlXZWF0aGVyLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sIGNpdHlXZWF0aGVyLndlYXRoZXJbMF0uaWNvbiwgbGF0LCBsb24pO1xuICAgICAgICBhbGxDaXRpZXMucHVzaChjaXR5SW5mbyk7XG4gICAgICAgIHVwZGF0ZVN0b3JhZ2UoYWxsQ2l0aWVzKTtcbiAgICAgICAgcmVuZGVyQ2l0aWVzKGFsbENpdGllcyk7ICAgICAgICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBhbGVydCgnSW52YWxpZCBlbnRyeScpO1xuICAgICAgICByZW5kZXJDaXRpZXMoYWxsQ2l0aWVzKTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVBbGwoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxDaXRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0nICsgYWxsQ2l0aWVzW2ldLmxhdCsnJmxvbj0nK2FsbENpdGllc1tpXS5sb24gKyAnJmFwcGlkPWMwYTkyYzBhYzU1YzkxZGUzMjZmZmE4ZmE1YjRlMWY3JnVuaXRzPWltcGVyaWFsJywge21vZGU6ICdjb3JzJ30pO1xuICAgICAgICAgICAgY29uc3QgY2l0eVdlYXRoZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBsZXQgY2l0eUluZm8gPSBuZXdDaXR5KGNpdHlXZWF0aGVyLm5hbWUsIGNpdHlXZWF0aGVyLm1haW4udGVtcCwgY2l0eVdlYXRoZXIubWFpbi50ZW1wX21heCwgY2l0eVdlYXRoZXIubWFpbi50ZW1wX21pbiwgY2l0eVdlYXRoZXIud2VhdGhlclswXS5kZXNjcmlwdGlvbiwgY2l0eVdlYXRoZXIud2VhdGhlclswXS5pY29uLCBjaXR5V2VhdGhlci5jb29yZC5sYXQsIGNpdHlXZWF0aGVyLmNvb3JkLmxvbik7XG4gICAgICAgICAgICBhbGxDaXRpZXNbaV0gPSBjaXR5SW5mbztcbiAgICAgICAgICAgIHVwZGF0ZVN0b3JhZ2UoYWxsQ2l0aWVzKTtcbiAgICAgICAgICAgIC8vIHJldHVybiBhcnJheTtcbiAgICAgICAgICAgIC8vIHVwZGF0ZVN0b3JhZ2UoYXJyYXkpO1xuICAgICAgICAgICAgLy8gcmVuZGVyQ2l0aWVzKGFsbENpdGllcyk7ICAgICAgICBcbiAgICAgICAgICAgIC8vIHJldHVybiBjaXR5SW5mbztcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdJbnZhbGlkIGVudHJ5Jyk7XG4gICAgICAgICAgICAvLyByZW5kZXJDaXRpZXMoYWxsQ2l0aWVzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gYXN5bmMgZnVuY3Rpb24gZXh0ZW5kZWRGb3JlY2FzdChjaXR5KSB7XG4vLyAgICAgdHJ5IHtcbi8vICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0nK2NpdHkubGF0KycmbG9uPScrY2l0eS5sb24rJyZhcHBpZD1jMGE5MmMwYWM1NWM5MWRlMzI2ZmZhOGZhNWI0ZTFmNyZ1bml0cz1pbXBlcmlhbCcsIHttb2RlOiAnY29ycyd9KTtcbi8vICAgICAgICAgY29uc3QgZXh0ZW5kZWREZXRhaWxzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhleHRlbmRlZERldGFpbHMpO1xuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbi8vICAgICB9XG4vLyB9XG5cbiIsImV4cG9ydCBjb25zdCBuZXdDaXR5ID0gKGNpdHlOYW1lLCBjdXJyZW50VGVtcCwgaGlnaFRlbXAsIGxvd1RlbXAsIHdlYXRoZXIsIGljb24sIGxhdCwgbG9uKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2l0eU5hbWUsXG4gICAgICAgIGN1cnJlbnRUZW1wLFxuICAgICAgICBoaWdoVGVtcCxcbiAgICAgICAgbG93VGVtcCxcbiAgICAgICAgd2VhdGhlcixcbiAgICAgICAgaWNvbixcbiAgICAgICAgbGF0LFxuICAgICAgICBsb25cbiAgICB9O1xufSIsImltcG9ydCB7ICBtYWluRGlzcGxheSAsIHVwZGF0ZVN0b3JhZ2UgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCBhZGROZXdDaXR5IGZyb20gXCIuL2FkZE5ld1wiO1xuaW1wb3J0IHsgdXBkYXRlQWxsIH0gZnJvbSBcIi4vYXBpQWN0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJDaXRpZXMoYWxsQ2l0aWVzKSB7XG4gICAgXG4gICAgdXBkYXRlQWxsKCk7XG4gICAgbWFpbkRpc3BsYXkuY2xhc3NMaXN0ID0gJ21haW4tZGlzcGxheSc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluRGlzcGxheSk7XG5cbiAgICBtYWluRGlzcGxheS5pbm5lclRleHQgPSAnJztcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhbGxDaXRpZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgY2l0eUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2l0eUNhcmQuY2xhc3NMaXN0ID0gJ2NpdHktY2FyZCc7XG4gICAgICAgIG1haW5EaXNwbGF5LmFwcGVuZENoaWxkKGNpdHlDYXJkKTtcblxuICAgICAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGNpdHlOYW1lLmNsYXNzTGlzdCA9ICdjaXR5LW5hbWUnO1xuICAgICAgICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IGFsbENpdGllc1tpbmRleF0uY2l0eU5hbWU7XG4gICAgICAgIGNpdHlDYXJkLmFwcGVuZENoaWxkKGNpdHlOYW1lKTtcblxuICAgICAgICBjb25zdCBjaXR5VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY2l0eVRlbXAuY2xhc3NMaXN0ID0gJ2NpdHktdGVtcCc7XG4gICAgICAgIGNpdHlUZW1wLnRleHRDb250ZW50ID0gJ0N1cnJlbnQgVGVtcDogJyArIE1hdGgucm91bmQoYWxsQ2l0aWVzW2luZGV4XS5jdXJyZW50VGVtcCkgKyAnIFxcdTAwQjBGJztcbiAgICAgICAgY2l0eUNhcmQuYXBwZW5kQ2hpbGQoY2l0eVRlbXApO1xuXG4gICAgICAgIGNvbnN0IGNpdHlUZW1wSGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY2l0eVRlbXBIaWdoLmNsYXNzTGlzdCA9ICdjaXR5LXRlbXAtaGlnaCc7XG4gICAgICAgIGNpdHlUZW1wSGlnaC50ZXh0Q29udGVudCA9ICdIaWdoIFRlbXA6ICcgKyBNYXRoLnJvdW5kKGFsbENpdGllc1tpbmRleF0uaGlnaFRlbXApICsgJyBcXHUwMEIwRic7XG4gICAgICAgIGNpdHlDYXJkLmFwcGVuZENoaWxkKGNpdHlUZW1wSGlnaCk7XG5cbiAgICAgICAgY29uc3QgY2l0eVRlbXBMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNpdHlUZW1wTG93LmNsYXNzTGlzdCA9ICdjaXR5LXRlbXAtbG93JztcbiAgICAgICAgY2l0eVRlbXBMb3cudGV4dENvbnRlbnQgPSAnTG93IFRlbXA6ICcgKyBNYXRoLnJvdW5kKGFsbENpdGllc1tpbmRleF0ubG93VGVtcCkgKyAnIFxcdTAwQjBGJztcbiAgICAgICAgY2l0eUNhcmQuYXBwZW5kQ2hpbGQoY2l0eVRlbXBMb3cpO1xuXG4gICAgICAgIGNvbnN0IGNpdHlXZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjaXR5V2VhdGhlci5jbGFzc0xpc3QgPSAnY2l0eS13ZWF0aGVyJztcbiAgICAgICAgY2l0eVdlYXRoZXIudGV4dENvbnRlbnQgPSBhbGxDaXRpZXNbaW5kZXhdLndlYXRoZXIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBhbGxDaXRpZXNbaW5kZXhdLndlYXRoZXIuc2xpY2UoMSk7XG4gICAgICAgIGNpdHlDYXJkLmFwcGVuZENoaWxkKGNpdHlXZWF0aGVyKTtcblxuICAgICAgICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QgPSAnd2VhdGhlci1pY29uJztcbiAgICAgICAgd2VhdGhlckljb24uc3JjID0gJ2h0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8nK2FsbENpdGllc1tpbmRleF0uaWNvbisnQDJ4LnBuZyc7XG4gICAgICAgIGNpdHlDYXJkLmFwcGVuZENoaWxkKHdlYXRoZXJJY29uKTtcblxuICAgICAgICAvLyBjb25zdCB2aWV3TW9yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAvLyB2aWV3TW9yZS5pbm5lclRleHQgPSAnVmlldyBEZXRhaWxzJztcbiAgICAgICAgLy8gY2l0eUNhcmQuYXBwZW5kQ2hpbGQodmlld01vcmUpO1xuICAgICAgICAvLyB2aWV3TW9yZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vICAgICBleHRlbmRlZEZvcmNhc3QoYWxsQ2l0aWVzW2luZGV4XSk7XG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZUNpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlQ2l0eS5pbm5lclRleHQgPSAnRGVsZXRlIENpdHknO1xuICAgICAgICBjaXR5Q2FyZC5hcHBlbmRDaGlsZChkZWxldGVDaXR5KTtcbiAgICAgICAgZGVsZXRlQ2l0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBhbGxDaXRpZXMuc3BsaWNlKGluZGV4ICwgMSk7XG4gICAgICAgICAgICB1cGRhdGVTdG9yYWdlKGFsbENpdGllcyk7XG4gICAgICAgICAgICByZW5kZXJDaXRpZXMoYWxsQ2l0aWVzKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBpZihhbGxDaXRpZXMubGVuZ3RoIDwgNSkge1xuICAgICAgICBtYWluRGlzcGxheS5hcHBlbmRDaGlsZChhZGROZXdDaXR5KCkpO1xuICAgIH07XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbW9kdWxlcy9hcGlBY3Rpb25zLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
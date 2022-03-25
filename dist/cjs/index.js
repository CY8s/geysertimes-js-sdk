"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("isomorphic-fetch");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _baseURL = /*#__PURE__*/new WeakMap();

var _geysers = /*#__PURE__*/new WeakMap();

var _getData = /*#__PURE__*/new WeakSet();

class Client {
  constructor(args = {}) {
    _classPrivateMethodInitSpec(this, _getData);

    _classPrivateFieldInitSpec(this, _baseURL, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _geysers, {
      writable: true,
      value: null
    });

    const {
      baseURL = "https://www.geysertimes.org/api/v5"
    } = args;

    _classPrivateFieldSet(this, _baseURL, baseURL);
  }

  getGeysers(args = {}) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const {
        forceRefresh = false
      } = args;

      if (forceRefresh || !_classPrivateFieldGet(_this, _geysers)) {
        const data = yield _classPrivateMethodGet(_this, _getData, _getData2).call(_this, "geysers");

        _classPrivateFieldSet(_this, _geysers, data.geysers || null);
      }

      return _classPrivateFieldGet(_this, _geysers);
    })();
  }

  getPredictions(args = {}) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      const {
        userIDs = "44,208"
      } = args;
      const data = yield _classPrivateMethodGet(_this2, _getData, _getData2).call(_this2, `predictions_latest?userID=${userIDs}`);
      return data.predictions;
    })();
  }

}

function _getData2(_x) {
  return _getData3.apply(this, arguments);
}

function _getData3() {
  _getData3 = _asyncToGenerator(function* (pathSegment) {
    const request = yield fetch(`${_classPrivateFieldGet(this, _baseURL)}/${pathSegment}`);
    const data = yield request.json();
    return data;
  });
  return _getData3.apply(this, arguments);
}

var _default = Client;
exports.default = _default;
//# sourceMappingURL=index.js.map
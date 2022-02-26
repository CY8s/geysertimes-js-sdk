"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPredictions = exports.getGeysers = exports.default = void 0;

require("isomorphic-fetch");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const baseURL = "https://www.geysertimes.org/api/v5";

const getData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (pathSegment) {
    const request = yield fetch(`${baseURL}/${pathSegment}`);
    const data = yield request.json();
    return data;
  });

  return function getData(_x) {
    return _ref.apply(this, arguments);
  };
}();

const getGeysers = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* () {
    const data = yield getData("geysers");
    return data.geysers;
  });

  return function getGeysers() {
    return _ref2.apply(this, arguments);
  };
}();

exports.getGeysers = getGeysers;

const getPredictions = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (args = {}) {
    const {
      userIDs = "44,208"
    } = args;
    const data = yield getData(`predictions_latest?userID=${userIDs}`);
    return data.predictions;
  });

  return function getPredictions() {
    return _ref3.apply(this, arguments);
  };
}();

exports.getPredictions = getPredictions;
const client = Object.freeze({
  getGeysers,
  getPredictions,
  sayHello
});
var _default = client;
exports.default = _default;
//# sourceMappingURL=index.js.map
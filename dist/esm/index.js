function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import "isomorphic-fetch";
export const getGeysers = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* () {
    const request = yield fetch("https://www.geysertimes.org/api/v5/geysers");
    const data = yield request.json();
    return data.geysers;
  });

  return function getGeysers() {
    return _ref.apply(this, arguments);
  };
}();
const client = Object.freeze({
  getGeysers
});
export default client;
//# sourceMappingURL=index.js.map
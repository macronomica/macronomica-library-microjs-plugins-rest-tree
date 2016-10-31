"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (micro, actions, schema) {
  return function () {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        cmd = _ref.cmd,
        _ref$criteria = _ref.criteria,
        criteria = _ref$criteria === undefined ? {} : _ref$criteria;

    var _criteria$parentId = criteria.parentId,
        parentId = _criteria$parentId === undefined ? null : _criteria$parentId;

    return actions.count(schema, criteria);
  };
};
//# sourceMappingURL=count.js.map
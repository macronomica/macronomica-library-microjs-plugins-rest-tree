"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (micro, actions, schema) {
  return function () {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        cmd = _ref.cmd,
        fields = _ref.fields,
        sort = _ref.sort,
        limit = _ref.limit,
        offset = _ref.offset,
        _ref$criteria = _ref.criteria,
        criteria = _ref$criteria === undefined ? {} : _ref$criteria;

    var _criteria$parentId = criteria.parentId,
        parentId = _criteria$parentId === undefined ? null : _criteria$parentId;

    return actions.find.list(schema, _extends({}, criteria, { parentId: parentId }), { fields: fields, sort: sort, limit: limit, offset: offset });
  };
};
//# sourceMappingURL=list.js.map

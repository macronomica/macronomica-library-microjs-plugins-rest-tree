'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (micro, actions, schema) {
  return function () {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        cmd = _ref.cmd,
        id = _ref.id,
        fields = _ref.fields,
        _ref$criteria = _ref.criteria,
        criteria = _ref$criteria === undefined ? {} : _ref$criteria;

    if (!('id' in criteria) && !!id) {
      criteria.id = id;
    }
    return actions.find.one(schema, criteria, { fields: fields });
  };
};
//# sourceMappingURL=one.js.map

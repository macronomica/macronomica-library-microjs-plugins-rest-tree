"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (micro, actions, schema) {
  return function () {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        cmd = _ref.cmd,
        fields = _ref.fields,
        params = _ref.params;

    return actions.tree.create(schema, params, { fields: fields });
  };
};
//# sourceMappingURL=create.js.map
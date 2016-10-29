'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.methods = undefined;

var _methods = require('./methods');

var _methods2 = _interopRequireDefault(_methods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var supportedMethodKeys = Object.keys(_methods2.default);

var methods = exports.methods = _methods2.default;

exports.default = function (schema) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (micro) {
    var _options$methods = options.methods,
        methods = _options$methods === undefined ? supportedMethodKeys : _options$methods;

    var api = {};

    methods.forEach(function (name) {
      if (supportedMethodKeys.includes(name)) {
        micro.add('cmd:' + name, api[name] = function () {
          var _micro$plugin = micro.plugin('dal'),
              actions = _micro$plugin.actions;

          return _methods2.default[name](micro, actions, schema).apply(undefined, arguments);
        });
      }
    });

    return api;
  };
};
//# sourceMappingURL=index.js.map

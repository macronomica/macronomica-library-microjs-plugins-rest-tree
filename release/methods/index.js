'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _one = require('./one');

var _one2 = _interopRequireDefault(_one);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var _create = require('./create');

var _create2 = _interopRequireDefault(_create);

var _update = require('./update');

var _update2 = _interopRequireDefault(_update);

var _remove = require('./remove');

var _remove2 = _interopRequireDefault(_remove);

var _path = require('./path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  one: _one2.default,
  list: _list2.default,
  create: _create2.default,
  path: _path2.default,
  update: _update2.default,
  remove: _remove2.default
};
//# sourceMappingURL=index.js.map

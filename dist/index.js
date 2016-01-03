'use strict';

require('babel-polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } step("next"); }); }; }

var server = (0, _express2.default)();

function loadFile() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('foo');
        }, 1000);
    });
}

server.get('/', (function () {
    var _this = this;

    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res) {
        var content;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        content = undefined;
                        _context.prev = 1;
                        _context.next = 4;
                        return loadFile();

                    case 4:
                        content = _context.sent;
                        _context.next = 10;
                        break;

                    case 7:
                        _context.prev = 7;
                        _context.t0 = _context['catch'](1);

                        console.log(_context.t0);

                    case 10:

                        res.send('hello world 3');

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this, [[1, 7]]);
    }));

    return function (_x, _x2) {
        return ref.apply(this, arguments);
    };
})());

server.listen(8080, function (err) {
    if (!err) {
        console.log('server is start at port 8080');
    }
});
//# sourceMappingURL=index.js.map

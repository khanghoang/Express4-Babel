'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();

server.get('/', function (req, res) {
    debugger;
    res.send('hello world 3');
});

server.listen(8080, function (err) {
    if (!err) {
        console.log('server is start at port 8080');
    }
});
//# sourceMappingURL=index.js.map

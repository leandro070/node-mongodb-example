"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _userRoutes = require("./routes/userRoutes");

var _userRoutes2 = _interopRequireDefault(_userRoutes);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var router = _express2.default.Router();

app.use(_express2.default.json());
app.use((0, _morgan2.default)('dev'));
app.use('/users', (0, _userRoutes2.default)(router));

app.get('/', function (req, res) {
  res.send("MAIN");
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("Listening on port", port);
});
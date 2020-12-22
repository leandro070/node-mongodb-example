"use strict";

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _userRoutes = _interopRequireDefault(require("./routes/userRoutes"));

var _handleErrors = _interopRequireDefault(require("./utils/handleErrors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

var router = _express["default"].Router();

app.use(_express["default"].json());
app.use((0, _morgan["default"])('dev'));
app.use('/users', (0, _userRoutes["default"])(router));
app.use(_handleErrors["default"]);

_mongoose["default"].set('useNewUrlParser', true);

_mongoose["default"].set('useUnifiedTopology', true);

_mongoose["default"].set('useCreateIndex', true);

_mongoose["default"].connect('mongodb://localhost:27017/coffee');

_mongoose["default"].connection.on('close', console.error.bind(console, 'connection error:'));

_mongoose["default"].connection.once('open', function () {
  console.log("Mongodb connected");
  var port = process.env.PORT || 3000;
  app.listen(port, function () {
    console.log("Listening on port", port);
  });
});
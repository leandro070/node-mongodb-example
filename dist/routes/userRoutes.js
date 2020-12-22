"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _userController = _interopRequireDefault(require("../controllers/userController"));

var _userRepository = _interopRequireDefault(require("../repository/userRepository"));

var _userService = _interopRequireDefault(require("../services/userService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(router) {
  var userRepository = (0, _userRepository["default"])();
  var userService = (0, _userService["default"])(userRepository);
  var userController = (0, _userController["default"])(userService);
  router.get("/", function (req, res) {
    res.json("GET USER");
  });
  router.post("/", userController.createUser);
  router.put("/", function (req, res) {
    var body = req.body;
    res.json(body);
  });
  return router;
}
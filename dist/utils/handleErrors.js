"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _httpError = _interopRequireDefault(require("../errors/httpError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var handleErrors = function handleErrors(err, req, res, next) {
  if (err instanceof _httpError["default"]) {
    return res.status(err.getCode()).json({
      status: 'error',
      message: err.getMessage()
    });
  }

  return res.status(500).json({
    status: 'error',
    message: err.message,
    error: err.stack
  });
};

var _default = handleErrors;
exports["default"] = _default;
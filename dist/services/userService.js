"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _UserAlreadyExist = _interopRequireDefault(require("../errors/UserAlreadyExist"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function UserService(userRepository) {
  function createUser(_x) {
    return _createUser.apply(this, arguments);
  }

  function _createUser() {
    _createUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
      var name, password, email, userExist, newUser;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              name = _ref.name, password = _ref.password, email = _ref.email;
              _context.next = 3;
              return userRepository.findByEmail(email);

            case 3:
              userExist = _context.sent;

              if (!userExist) {
                _context.next = 6;
                break;
              }

              throw new _UserAlreadyExist["default"]();

            case 6:
              newUser = userRepository.create({
                name: name,
                password: password,
                email: email
              });
              return _context.abrupt("return", newUser);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _createUser.apply(this, arguments);
  }

  return {
    createUser: createUser
  };
}

var _default = UserService;
exports["default"] = _default;
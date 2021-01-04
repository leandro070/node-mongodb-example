"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var userController_1 = __importDefault(require("../controllers/userController"));
var authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
var userRepository_1 = __importDefault(require("../repository/userRepository"));
var userService_1 = __importDefault(require("../services/userService"));
function default_1(router) {
    var authMiddleware = new authMiddleware_1.default();
    var userRepository = new userRepository_1.default();
    var userService = new userService_1.default(userRepository);
    var userController = new userController_1.default(userService);
    router.get("/", authMiddleware.validateToken, function (req, res) {
        res.json({
            message: "Viva Perón",
            user: req.body.user
        });
    });
    router.post("/", userController.createUser);
    router.post("/changePassword", userController.updatePassword);
    return router;
}
exports.default = default_1;

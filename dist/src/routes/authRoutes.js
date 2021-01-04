"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var controllers_1 = __importDefault(require("../controllers"));
function default_1(router) {
    router.post("/login", controllers_1.default.Auth.login);
    return router;
}
exports.default = default_1;

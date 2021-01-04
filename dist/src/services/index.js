"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var authService_1 = __importDefault(require("./authService"));
var userService_1 = __importDefault(require("./userService"));
var repository_1 = __importDefault(require("../repository"));
var authService = new authService_1.default(repository_1.default.User);
var userService = new userService_1.default(repository_1.default.User);
exports.default = {
    Auth: authService,
    User: userService,
};

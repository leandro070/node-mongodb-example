"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var authController_1 = __importDefault(require("./authController"));
var userController_1 = __importDefault(require("./userController"));
var services_1 = __importDefault(require("../services"));
var authController = new authController_1.default(services_1.default.Auth);
var userController = new userController_1.default(services_1.default.User);
exports.default = {
    Auth: authController,
    User: userController,
};

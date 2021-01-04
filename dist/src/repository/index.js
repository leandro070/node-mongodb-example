"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var userRepository_1 = __importDefault(require("./userRepository"));
var userRepository = new userRepository_1.default();
exports.default = {
    User: userRepository,
};

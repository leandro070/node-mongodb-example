"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.hashPassword = void 0;
var bcrypt_1 = require("bcrypt");
var saltRounds = 10;
function hashPassword(unhashed) {
    return bcrypt_1.hash(unhashed, saltRounds);
}
exports.hashPassword = hashPassword;
function comparePassword(unhashed, hashed) {
    return bcrypt_1.compare(unhashed, hashed);
}
exports.comparePassword = comparePassword;

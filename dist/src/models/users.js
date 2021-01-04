"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        default: "USER_ROLE"
    },
    state: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false,
    }
});
exports.User = mongoose_1.model("users", userSchema);

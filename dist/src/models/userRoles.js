"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var userRolesSchema = new mongoose_1.Schema({
    description: {
        type: String,
        required: true,
    },
    key: {
        type: String,
        required: true,
    }
});
exports.default = mongoose_1.model("user_roles", userRolesSchema);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var httpError_1 = __importDefault(require("../errors/httpError"));
var HandlerError = /** @class */ (function () {
    function HandlerError() {
    }
    HandlerError.prototype.catchError = function (err, req, res) {
        if (err instanceof httpError_1.default) {
            return res.status(err.getCode()).json({
                status: "error",
                message: err.getMessage(),
                errors: err.getBody(),
            });
        }
        console.error(err);
        return res.status(500).json({
            status: "error",
            message: err.message,
            error: err.stack
        });
    };
    return HandlerError;
}());
exports.default = HandlerError;

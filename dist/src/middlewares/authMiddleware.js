"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = __importStar(require("jsonwebtoken"));
var Unauthorized_1 = __importDefault(require("../errors/Unauthorized"));
var handleErrors_1 = __importDefault(require("../utils/handleErrors"));
var AuthMiddleware = /** @class */ (function () {
    function AuthMiddleware() {
    }
    AuthMiddleware.prototype.validateToken = function (req, res, next) {
        try {
            var authHeader = req.headers.authorization;
            if (!authHeader) {
                throw new Unauthorized_1.default();
            }
            var token = authHeader.split(" ")[1];
            jwt.verify(token, process.env.JWT_SECRET || "", function (err, user) {
                if (err) {
                    throw new Unauthorized_1.default();
                }
                req.user = user;
                next();
            });
        }
        catch (error) {
            var handleErrors = new handleErrors_1.default();
            handleErrors.catchError(error, req, res);
        }
    };
    return AuthMiddleware;
}());
exports.default = AuthMiddleware;

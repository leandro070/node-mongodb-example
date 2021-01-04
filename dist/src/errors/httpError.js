"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPError = /** @class */ (function (_super) {
    __extends(HTTPError, _super);
    function HTTPError(code, message, data) {
        var _this = _super.call(this, message) || this;
        _this._code = code;
        _this._message = message;
        _this._body = data;
        return _this;
    }
    HTTPError.prototype.getCode = function () {
        return this._code;
    };
    HTTPError.prototype.getMessage = function () {
        return this._message;
    };
    HTTPError.prototype.getBody = function () {
        return this._body;
    };
    return HTTPError;
}(Error));
exports.default = HTTPError;

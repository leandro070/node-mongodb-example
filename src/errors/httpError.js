export default class HTTPError extends Error {
    constructor(code, message, data) {
        super(message);
        this._code = code;
        this._message = message;
        this._body = data;
    }

    getCode() {
        return this._code;
    }

    getMessage() {
        return this._message;
    }

    getBody() {
        return this._body;
    }
}
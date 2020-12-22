export default class HTTPError extends Error {
    constructor(code, message) {
        super(message);
        this.code = code;
        this.message = message;
    }

    getCode() {
        return this.code;
    }

    getMessage() {
        return this.message
    }
}
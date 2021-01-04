export default class HTTPError extends Error {
    private _code: number;
    private _message: string;
    private _body: unknown;

    constructor(code: number, message: string, data?: unknown) {
        super(message);
        this._code = code;
        this._message = message;
        this._body = data;
    }

    getCode(): number {
        return this._code;
    }

    getMessage(): string {
        return this._message;
    }

    getBody(): unknown {
        return this._body;
    }
}
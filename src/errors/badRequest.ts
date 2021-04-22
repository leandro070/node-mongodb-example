import HTTPError from "./httpError";

export default class BadRequest extends HTTPError {
    constructor(data?: unknown) {
        super(400, "Request invalid", data);
    }
}
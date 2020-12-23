import HTTPError from "./httpError";

export default class BadRequest extends HTTPError {
    constructor(data) {
        super(400, "Request invalid", data);
    }
}
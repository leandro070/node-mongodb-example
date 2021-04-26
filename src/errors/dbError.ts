import HTTPError from "./httpError";

export default class DbError extends HTTPError {
    constructor(data?: unknown) {
        super(500, "An error has occurred on database", data);
    }
}
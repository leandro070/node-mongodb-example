import HTTPError from "./httpError";

export default class Unauthorized extends HTTPError {
    constructor() {
        super(401, "Invalid token");
    }
}
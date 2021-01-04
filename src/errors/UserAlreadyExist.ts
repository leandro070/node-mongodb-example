import HTTPError from "./httpError";

export default class UserAlreadyExist extends HTTPError {
    constructor() {
        super(400, "User already exist");
    }
}
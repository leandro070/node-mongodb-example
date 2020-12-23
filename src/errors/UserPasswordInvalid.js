import HTTPError from "./httpError";

export default class UserPasswordInvalid extends HTTPError {
    constructor() {
        super(400, "User or password invalid");
    }
}
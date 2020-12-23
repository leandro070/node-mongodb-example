import { compare, hash } from "bcrypt";

const saltRounds = 10;

function hashPassword(unhashed) {
    return hash(unhashed, saltRounds);
}

function comparePassword(unhashed, hashed) {
    return compare(unhashed, hashed);
}

export {
    hashPassword,
    comparePassword
}  
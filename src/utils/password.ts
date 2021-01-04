import { compare, hash } from "bcrypt";

const saltRounds = 10;

function hashPassword(unhashed: string): Promise<string> {
    return hash(unhashed, saltRounds);
}

function comparePassword(unhashed: string, hashed: string): Promise<boolean> {
    return compare(unhashed, hashed);
}

export {
    hashPassword,
    comparePassword
};
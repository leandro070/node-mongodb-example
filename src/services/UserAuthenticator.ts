import * as jwt from "jsonwebtoken";
import UserPasswordInvalid from "../errors/userPasswordInvalid";
import { comparePassword } from "../utils/password";
import { IUserRepository } from "../repository/interfaces/iUserRepository";

class UserAuthenticator {
    constructor(private readonly userRepository: IUserRepository) {}

    public async execute({ email, password }) {
        const user = (await this.userRepository.findByEmail(email));

        if (!user) {
            throw new UserPasswordInvalid();
        }

        const valid = await comparePassword(password, user.password);
        if (!valid) {
            throw new UserPasswordInvalid();
        }

        return {
            user,
            token: this.generateJWT(user),
        };
    }

    private generateJWT({ email, name, state }) {
        const token = jwt.sign({
            email, name, state
        }, process.env.JWT_SECRET || "", { expiresIn: process.env.JWT_EXPIRY,  });

        return {
            accessToken: token,
            expiresIn: process.env.JWT_EXPIRY
        };
    }
}

export default UserAuthenticator;
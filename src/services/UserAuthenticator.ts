import * as jwt from "jsonwebtoken";
import UserRepository from "../repository/UserRepository";
import UserPasswordInvalid from "../errors/UserPasswordInvalid";
import { comparePassword } from "../utils/password";


class UserAuthenticator {
    private _userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this._userRepository = userRepository;
    }

    public async execute({ email, password }) {
        const user = (await this._userRepository.findBy({ email }))[0];

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
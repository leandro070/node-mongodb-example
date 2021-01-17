
import BadRequest from "../errors/BadRequest";
import { IUser } from "../models/users";
import UserRepository from "../repository/UserRepository";
import { comparePassword, hashPassword } from "../utils/password";

class UserPasswordUpdater {

    constructor(private _userRepository: UserRepository) {}

    async execute(email: string, { password, oldPassword }) {
        const user = (await this._userRepository.findBy({ email }))[0];
        if (!user) {
            throw new BadRequest();
        }

        const valid = await comparePassword(oldPassword, user.password);
        if (!valid) {
            throw new BadRequest();
        }

        const hashedPassword = await hashPassword(password);

        const result = await this._userRepository.update(user._id, { password: hashedPassword } as IUser);

        return result;

    }
}

export default UserPasswordUpdater;

import BadRequest from "../errors/badRequest";
import { IUser } from "../models/users";
import { IUserRepository } from "../repository/interfaces/iUserRepository";
import { comparePassword, hashPassword } from "../utils/password";

class UserPasswordUpdater {

    constructor(private _userRepository: IUserRepository) {}

    async execute(email: string, { password, oldPassword }) {
        const user = (await this._userRepository.findByEmail(email));
        if (!user) {
            throw new BadRequest();
        }

        const valid = await comparePassword(oldPassword, user.password);
        if (!valid) {
            throw new BadRequest();
        }

        const hashedPassword = await hashPassword(password);

        const result = await this._userRepository.update(user.id, { password: hashedPassword } as IUser);

        return result;

    }
}

export default UserPasswordUpdater;
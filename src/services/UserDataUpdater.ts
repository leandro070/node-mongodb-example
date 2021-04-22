
import BadRequest from "../errors/badRequest";
import { IUserRepository } from "../repository/interfaces/iUserRepository";

class UserDataUpdater {
    constructor(private _userRepository: IUserRepository) {}

    async execute(email, data) {
        const user = (await this._userRepository.findByEmail( email ))[0];
        if (!user) {
            throw new BadRequest();
        }

        const result = await this._userRepository.update(user._id, data);

        return result;
    }
}

export default UserDataUpdater;
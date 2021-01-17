
import BadRequest from "../errors/BadRequest";
import UserRepository from "../repository/UserRepository";

class UserDataUpdater {
    constructor(private _userRepository: UserRepository) {}

    async execute(email, data) {
        const user = (await this._userRepository.findBy({ email }))[0];
        if (!user) {
            throw new BadRequest();
        }

        const result = await this._userRepository.update(user._id, data);

        return result;
    }
}

export default UserDataUpdater;
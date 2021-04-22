import UserAlreadyExist from "../errors/userAlreadyExist";
import { hashPassword } from "../utils/password";
import { IUser } from "../models/users";
import { IUserRepository } from "../repository/interfaces/iUserRepository";

class UserCreator {
    private _userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this._userRepository = userRepository;
    }

    async execute({ name, password, email }) {
        const userExist = await this._userRepository.findByEmail( email )[0];

        if (userExist) {
            throw new UserAlreadyExist();
        }
        const hashed = await hashPassword(password);
        const user = { name, password: hashed, email } as IUser;

        const newUser = await this._userRepository.create(user);

        return newUser;
    }
}

export default UserCreator;
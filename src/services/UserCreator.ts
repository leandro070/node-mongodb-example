import UserAlreadyExist from "../errors/UserAlreadyExist";
import { hashPassword } from "../utils/password";
import { IUser } from "../models/users";
import UserRepository from "../repository/UserRepository";

class UserCreator {
    private _userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this._userRepository = userRepository;
    }

    async execute({ name, password, email }) {
        const userExist = await this._userRepository.findBy({ email })[0];

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
import UserAlreadyExist from "../errors/UserAlreadyExist";
import { hashPassword } from "../utils/password";
import { IUser } from "../models/users";
import UserRepository from "../repository/UserRepository";

class UserService {
    private _userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this._userRepository = userRepository;
    }

    async createUser({ name, password, email }) {
        const userExist = await this._userRepository.findBy({ email });

        if (userExist) {
            throw new UserAlreadyExist();
        }
        const hashed = await hashPassword(password);
        const user = { name, password: hashed, email } as IUser;

        const newUser = this._userRepository.create(user);
        return newUser;
    }

    updatePassword(password: string) {

    }

    updateUserData(user) {

    }
}

export default UserService;
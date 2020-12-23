import UserAlreadyExist from "../errors/UserAlreadyExist";
import { hashPassword } from "../utils/password";
import User from "../models/users";

function UserService(userRepository) {
    
    async function createUser({ name, password, email }) {
        const userExist = await userRepository.findByEmail(email);
        if (userExist) {
            throw new UserAlreadyExist();
        }
        const hashed = await hashPassword(password)
        const user = new User({ name, password: hashed, email })

        const newUser = userRepository.create(user)
        return newUser;
    }

    async function updatePassword({ user, password }) {
        
    }

    return {
        createUser,
        updatePassword
    }
}

export default UserService
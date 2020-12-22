import UserAlreadyExist from "../errors/UserAlreadyExist";

function UserService(userRepository) {
    
    async function createUser({ name, password, email }) {

        const userExist = await userRepository.findByEmail(email);
        if (userExist) {
            throw new UserAlreadyExist();
        }

        const newUser = userRepository.create({ name, password, email })
        return newUser;
    }

    return {
        createUser,
    }
}

export default UserService
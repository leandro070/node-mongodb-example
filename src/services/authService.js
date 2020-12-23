import jwt from "jsonwebtoken";
import UserPasswordInvalid from "../errors/UserPasswordInvalid";
import { comparePassword } from "../utils/password";

function AuthService(userRepository) {
    
    async function validateUserAndPassword({ email, password }) {
        const user = await userRepository.findByEmail(email)
        if (!user) {
            throw new UserPasswordInvalid();
        }

        const valid = await comparePassword(password, user.password)
        if (!valid) {
            throw new UserPasswordInvalid();
        }

        return user;        
    }

    function generateJWT({ email, name, state }) {
        const token = jwt.sign({
            email, name, state
        }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRY,  })

        return {
            accessToken: token,
            expiresIn: process.env.JWT_EXPIRY
        }
    }
    
    return {
        validateUserAndPassword,
        generateJWT
    }
}

export default AuthService;
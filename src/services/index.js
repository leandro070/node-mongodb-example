import AuthService from "./authService";
import UserService from "./userService";
import Repositories from "../repository";

const authService = AuthService(Repositories.User)
const userService = UserService(Repositories.User)

export default {
    Auth: authService,
    User: userService,
}
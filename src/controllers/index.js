import AuthController from "./authController";
import UserController from "./userController";
import Services from "../services";

const authController = AuthController(Services.Auth)
const userController = UserController(Services.User)

export default {
    Auth: authController,
    User: userController,
}
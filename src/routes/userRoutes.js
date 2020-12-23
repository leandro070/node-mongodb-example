import UserController from "../controllers/userController";
import AuthMiddleware from "../middlewares/authMiddleware";
import UserRepository from "../repository/userRepository";
import UserService from "../services/userService";

export default function(router) {
    const authMiddleware = AuthMiddleware();
    const userRepository = UserRepository();
    const userService = UserService(userRepository);
    const userController = UserController(userService);

    router.get("/", authMiddleware.validateToken, function(req, res) {
        res.json({
            message: "Viva Perón",
            user: req.user
        });
    })

    router.post("/", userController.createUser)

    router.post("/changePassword", userController.updatePassword)

    return router;
}
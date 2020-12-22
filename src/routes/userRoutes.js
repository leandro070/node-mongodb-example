import UserController from "../controllers/userController";
import UserRepository from "../repository/userRepository";
import UserService from "../services/userService";

export default function(router) {
    const userRepository = UserRepository();
    const userService = UserService(userRepository);
    const userController = UserController(userService);

    router.get("/", function(req, res) {
        res.json("GET USER")
    })

    router.post("/", userController.createUser)

    router.put("/", function(req, res) {
        const { body } = req;
        res.json(body)
    })

    return router;
}
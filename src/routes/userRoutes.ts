import { Request, Router } from "express";
import { ContainerBuilder } from "node-dependency-injection";
import UserController from "../controllers/userController";
import AuthMiddleware from "../middlewares/authMiddleware";

export default function(router: Router, container: ContainerBuilder) {
    const authMiddleware = new AuthMiddleware();

    const userService = container.get("service.user");
    const userController = new UserController(userService);

    router.get("/", authMiddleware.validateToken, function(req: Request, res) {
        res.json({
            message: "Viva Perón",
            user: req.body.user
        });
    });

    router.post("/", userController.createUser.bind(userController));

    return router;
}
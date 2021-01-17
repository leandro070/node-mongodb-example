import { Request, Router } from "express";
import { ContainerBuilder } from "node-dependency-injection";
import UserController from "../controllers/userController";
import AuthMiddleware from "../middlewares/authMiddleware";

export default function(router: Router, container: ContainerBuilder) {
    const authMiddleware = new AuthMiddleware();

    // USE CASES
    const userCreator = container.get("service.user-creator");
    const userDataUpdater = container.get("service.user-data-updater");
    const userPasswordUpdater = container.get("service.user-password-updater");
    // END USE CASES

    const userController = new UserController(userCreator, userDataUpdater, userPasswordUpdater);

    router.get("/", authMiddleware.validateToken, function(req: Request, res) {
        res.json({
            message: "Viva Perón",
            user: req["user"]
        });
    });

    router.post("/", userController.createUser.bind(userController));

    router.put("/data", authMiddleware.validateToken, userController.updateUserData.bind(userController));
    router.put("/change-password", authMiddleware.validateToken, userController.updatePassword.bind(userController));


    return router;
}
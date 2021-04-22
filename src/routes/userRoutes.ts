import { Router } from "express";
import { IServices } from "../app";
import UserController from "../controllers/userController";
import AuthMiddleware from "../middlewares/authMiddleware";

export default function(router: Router, services: IServices) {    
    const userController = new UserController(services);

    router.post("/new", userController.createUser.bind(userController));
    router.put("/data", AuthMiddleware.validateToken, userController.updateUserData.bind(userController));
    router.put("/change-password", AuthMiddleware.validateToken, userController.updatePassword.bind(userController));

    return router;
}
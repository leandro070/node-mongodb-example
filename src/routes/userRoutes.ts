import { Router } from "express";
import { IServices } from "../app";
import UserController from "../controllers/userController";
import AuthMiddleware from "../middlewares/authMiddleware";
import { catchAsync } from "../utils/handleErrors";

export default function(router: Router, services: IServices) {
    const userController = new UserController(services);

    router.post("/new", catchAsync(userController.createUser.bind(userController)));
    router.put("/data", catchAsync(AuthMiddleware.validateToken), catchAsync(userController.updateUserData.bind(userController)));
    router.put("/change-password", catchAsync(AuthMiddleware.validateToken), catchAsync(userController.updatePassword.bind(userController)));

    return router;
}
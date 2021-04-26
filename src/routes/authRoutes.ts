import { Router } from "express";
import { IServices } from "../app";
import AuthController from "../controllers/authController";
import { catchAsync } from "../utils/handleErrors";

export default function (router: Router, services: IServices) {

    const authController = new AuthController(services);

    router.post("/login", catchAsync(authController.login.bind(authController)));

    return router;
}
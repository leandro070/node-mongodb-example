import { Router } from "express";
import { IServices } from "../app";
import AuthController from "../controllers/authController";

export default function (router: Router, services: IServices) {

    const authController = new AuthController(services);

    router.post("/login", authController.login.bind(authController));

    return router;
}
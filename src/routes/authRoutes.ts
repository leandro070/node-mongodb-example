import { Router } from "express";
import AuthController from "../controllers/authController";
import { ContainerBuilder } from "node-dependency-injection";

export default function (router: Router, container: ContainerBuilder) {
    const authService = container.get("service.auth");

    const authController = new AuthController(authService);

    router.post("/login", authController.login.bind(authController));

    return router;
}
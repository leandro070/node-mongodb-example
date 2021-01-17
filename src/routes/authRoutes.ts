import { Router } from "express";
import AuthController from "../controllers/authController";
import { ContainerBuilder } from "node-dependency-injection";

export default function (router: Router, container: ContainerBuilder) {
    const userAuthenticator = container.get("service.user-authenticator");

    const authController = new AuthController(userAuthenticator);

    router.post("/login", authController.login.bind(authController));

    return router;
}
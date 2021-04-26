import { NextFunction, Request, Response } from "express";
import * as yup from "yup";
import { IServices } from "../app";
import { IUser } from "../models/users";
import UserCreator from "../services/UserCreator";
import UserDataUpdater from "../services/UserDataUpdater";
import UserPasswordUpdater from "../services/UserPasswordUpdater";
import HandlerSchemas from "../utils/handleSchemas";

class UserController {

    constructor(private readonly services: IServices) {}

    async createUser(req: Request, res: Response): Promise<void> {

        const userCreator = new UserCreator(this.services.userRepository);

        const userDto = req.body;

        const validationSchema = yup.object().shape({
            name: yup.string().required("Name is required"),
            email: yup.string().email("Email is invalid").required("Email is required"),
            password: yup.string().required("Password is required").min(0, "Password is required"),
            photo: yup.string(),
            role: yup.string()
        });

        await HandlerSchemas.validate(validationSchema, userDto);

        const result = await userCreator.execute(userDto);

        res.status(201).json({ ok: result });
    }

    async updateUserData(req: Request, res: Response): Promise<void> {

        const userDataUpdater = new UserDataUpdater(this.services.userRepository);

        const user = req["user"] as IUser;
        const { name } = req.body;

        const validationSchema = yup.object().shape({
            name: yup.string().required(),
        });

        await HandlerSchemas.validate(validationSchema, { name });

        const result = await userDataUpdater.execute(user.email, { name });

        res.status(200).json({ ok: result });
    }

    async updatePassword(req: Request, res: Response): Promise<void> {

        const userPasswordUpdater = new UserPasswordUpdater(this.services.userRepository);

        const passwordsDTO = req.body;
        const user: IUser = req["user"];

        const validationSchema = yup.object().shape({
            password: yup.string().required("Password is required"),
            repeatPassword: yup.string().required("Repeat password is required").oneOf([yup.ref("password"), undefined], "Passwords must match"),
            oldPassword: yup.string().email("Email is invalid").required("Old password is required"),
        });

        await HandlerSchemas.validate(validationSchema, passwordsDTO);

        await userPasswordUpdater.execute(user.email, passwordsDTO);

        res.status(200);
    }
}

export default UserController;
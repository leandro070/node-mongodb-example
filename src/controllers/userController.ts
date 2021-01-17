import { NextFunction, Request, Response } from "express";
import * as yup from "yup";
import { IUser } from "../models/users";
import UserCreator from "../services/UserCreator";
import UserDataUpdater from "../services/UserDataUpdater";
import UserPasswordUpdater from "../services/UserPasswordUpdater";
import HandlerSchemas from "../utils/handleSchemas";


class UserController {

    constructor(
        private _userCreator: UserCreator,
        private _userDataUpdater: UserDataUpdater,
        private _userPasswordUpdater: UserPasswordUpdater,
    ) {}

    async createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const userDto = req.body;

            const validationSchema = yup.object().shape({
                name: yup.string().required("Name is required"),
                email: yup.string().email("Email is invalid").required("Email is required"),
                password: yup.string().required("Password is required").min(0, "Password is required"),
                photo: yup.string(),
                role: yup.string()
            });

            const handleSchemas = new HandlerSchemas();
            await handleSchemas.validate(validationSchema, userDto);

            const result = await this._userCreator.execute(userDto);

            res.status(201).json({ ok: result });
        } catch (error) {
            next(error);
        }
    }

    async updateUserData(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const user = req["user"] as IUser;
            const { name } = req.body;

            const validationSchema = yup.object().shape({
                name: yup.string().required(),
            });

            const handleSchemas = new HandlerSchemas();
            await handleSchemas.validate(validationSchema, { name });

            const result = await this._userDataUpdater.execute(user.email, { name });

            res.status(200).json({ ok: result });
        } catch (error) {
            next(error);
        }
    }

    async updatePassword(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const passwordsDTO = req.body;
            const user: IUser = req["user"];

            const validationSchema = yup.object().shape({
                password: yup.string().required("Password is required"),
                repeatPassword: yup.string().required("Repeat password is required").oneOf([yup.ref("password"), undefined], "Passwords must match"),
                oldPassword: yup.string().email("Email is invalid").required("Old password is required"),
            });

            const handleSchemas = new HandlerSchemas();
            await handleSchemas.validate(validationSchema, passwordsDTO);
            console.log("PASO");

            await this._userPasswordUpdater.execute(user.email, passwordsDTO);

            res.status(200);
        } catch (error) {
            next(error);
        }
    }
}

export default UserController;
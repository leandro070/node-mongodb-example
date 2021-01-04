import { NextFunction, Request, Response } from "express";
import * as yup from "yup";
import UserService from "../services/UserService";
import HandlerSchemas from "../utils/handleSchemas";


class UserController {
    private _userService: UserService;

    constructor(userService: UserService) {
        this._userService = userService;
    }

    async createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        const userDto = req.body;

        const validationSchema = yup.object().shape({
            name: yup.string().required("Name is required"),
            email: yup.string().email("Email is invalid").required("Email is required"),
            password: yup.string().required("Password is required").min(0, "Password is required"),
            photo: yup.string(),
            role: yup.string()
        });

        try {
            const handleSchemas = new HandlerSchemas();
            await handleSchemas.validate(validationSchema, userDto);

            const user = await this._userService.createUser(userDto);

            res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    }

    async updateUserData(req: Request, res: Response, next: NextFunction): Promise<void> {
        // const userSession = req.body.user;
        // const userDataDTO = req.body.userdata;

        // const validationSchema = yup.object().shape({
        //     password: yup.string().required("Password is required"),
        //     repeatPassword: yup.string().required("Repeat password is required").oneOf([yup.ref("password"), undefined], "Passwords must match"),
        //     oldPassword: yup.string().email("Email is invalid").required("Old password is required"),
        // });

    }

    async updatePassword(req: Request, res: Response, next: NextFunction): Promise<void> {
        const passwordsDTO = req.body as string;

        const validationSchema = yup.object().shape({
            password: yup.string().required("Password is required"),
            repeatPassword: yup.string().required("Repeat password is required").oneOf([yup.ref("password"), undefined], "Passwords must match"),
            oldPassword: yup.string().email("Email is invalid").required("Old password is required"),
        });

        try {
            const handleSchemas = new HandlerSchemas();
            await handleSchemas.validate(validationSchema, passwordsDTO);

            await this._userService.updatePassword(passwordsDTO);

            res.status(200);
        } catch (error) {
            next(error);
        }
    }
}

export default UserController;
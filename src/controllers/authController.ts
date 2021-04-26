import * as yup from "yup";
import HandlerSchemas from "../utils/handleSchemas";
import UserAuthenticator from "../services/UserAuthenticator";
import { IServices } from "../app";

class AuthController {

    constructor(private readonly services: IServices) {}

    async login(req, res, next) {

        const useCase = new UserAuthenticator(this.services.userRepository);

        const loginDTO = req.body;

        const validationSchema = yup.object().shape({
            email: yup.string().email("Email invalid").required("Email is required"),
            password: yup.string().required("Password is required"),
        });

        await HandlerSchemas.validate(validationSchema, loginDTO);

        const auth = await useCase.execute(loginDTO);

        res.status(200).json(auth);
    }
}

export default AuthController;
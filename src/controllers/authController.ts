import * as yup from "yup";
import HandlerSchemas from "../utils/handleSchemas";
import UserAuthenticator from "../services/UserAuthenticator";

class AuthController {
    constructor(private _userAuthenticator: UserAuthenticator) {}

    async login(req, res, next) {
        const loginDTO = req.body;

        const validationSchema = yup.object().shape({
            email: yup.string().email("Email invalid").required("Email is required"),
            password: yup.string().required("Password is required"),
        });

        try {
            const handlerSchemas = new HandlerSchemas();
            await handlerSchemas.validate(validationSchema, loginDTO);

            const auth = await this._userAuthenticator.execute(loginDTO);

            res.status(200).json(auth);
        } catch (error) {
            next(error);
        }
    }
}

export default AuthController;
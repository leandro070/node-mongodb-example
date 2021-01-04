import AuthService from "../services/AuthService";
import * as yup from "yup";
import HandlerSchemas from "../utils/handleSchemas";

class AuthController {
    private _authService: AuthService;

    constructor(authService: AuthService) {
        this._authService = authService;
    }

    async login(req, res, next) {
        const loginDTO = req.body;

        const validationSchema = yup.object().shape({
            email: yup.string().email("Email invalid").required("Email is required"),
            password: yup.string().required("Password is required"),
        });

        try {
            const handlerSchemas = new HandlerSchemas();
            await handlerSchemas.validate(validationSchema, loginDTO);
            const user = await this._authService.validateUserAndPassword(loginDTO);
            const jwt = await this._authService.generateJWT(user);

            res.status(200).json({
                user: {
                    role: user.role,
                    state: user.state,
                    name: user.name,
                    email: user.email,
                },
                token: jwt
            });
        } catch (error) {
            next(error);
        }
    }
}

export default AuthController;
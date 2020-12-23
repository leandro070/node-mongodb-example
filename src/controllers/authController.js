import * as yup from "yup";
import handleSchemas from "../utils/handleSchemas";

function AuthController(authService) {

    async function login(req, res, next) {
        const loginDTO = req.body;

        const validationSchema = yup.object().shape({
            email: yup.string().email("Email invalid").required("Email is required"),
            password: yup.string().required("Password is required"),
        })

        try {
            await handleSchemas.validate(validationSchema, loginDTO);
            
            const user = await authService.validateUserAndPassword(loginDTO)
            const jwt = await authService.generateJWT(user);

            res.status(200).json({
                user: {
                    role: user.role,
                    state: user.state,
                    name: user.name,
                    email: user.email,
                },
                token: jwt
            })
        } catch (error) {
            next(error)
        }

    }

    return {
        login
    }
    
}

export default AuthController;
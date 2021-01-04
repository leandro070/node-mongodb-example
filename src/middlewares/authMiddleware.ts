import * as jwt from "jsonwebtoken";
import Unauthorized from "../errors/Unauthorized";
import { handleError } from "../utils/handleErrors";

class AuthMiddleware {
    validateToken(req, res, next): void {
        try {
            const authHeader = req.headers.authorization;
            if (!authHeader) {
                throw new Unauthorized();
            }

            const token = authHeader.split(" ")[1];
            jwt.verify(token, process.env.JWT_SECRET || "", (err, user) => {
                if (err) {
                    throw new Unauthorized();
                }

                req.user = user;
                next();
            });

        } catch (error) {
            handleError(error, req, res, next);
        }
    }
}

export default AuthMiddleware;
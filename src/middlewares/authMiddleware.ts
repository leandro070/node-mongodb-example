import * as jwt from "jsonwebtoken";
import Unauthorized from "../errors/unauthorized";

class AuthMiddleware {
    static validateToken(req, res, next): void {
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
    }
}

export default AuthMiddleware;
import jwt from "jsonwebtoken";
import Unauthorized from "../errors/Unauthorized";
import handleErrors from "../utils/handleErrors";

function AuthMiddleware() {

    function validateToken(req, res, next) {
        try {
            const authHeader = req.headers.authorization;        
            if (!authHeader) {
                throw new Unauthorized();
            }

            const token = authHeader.split(' ')[1];
            jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
                if (err) {
                    throw new Unauthorized();
                }
    
                req.user = user;
                next();
            });

        } catch (error) {
            handleErrors(error, req, res, next);
        }
    }

    return {
        validateToken,
    }
}


export default AuthMiddleware;
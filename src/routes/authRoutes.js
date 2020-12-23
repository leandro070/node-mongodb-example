import Controllers from "../controllers";

export default function (router) {
    
    router.post("/login", Controllers.Auth.login)

    return router;
} 
function UserController(userService) {

    async function createUser(req, res, next) {
        const { email, password, name } = req.body;
    
        try {
            const user = await userService.createUser({ email, password, name });
            
            res.json(user);
        } catch (error) {
            next(error);
        }
    }

    return {
        createUser
    }
}



export default UserController
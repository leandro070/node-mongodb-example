import * as yup from 'yup';
import handleSchemas from '../utils/handleSchemas';

function UserController(userService) {

    async function createUser(req, res, next) {
        const userDto = req.body;

        const validationSchema = yup.object().shape({
            name: yup.string("Name invalid").required("Name is required"),
            email: yup.string().email("Email is invalid").required("Email is required"),
            password: yup.string("Password is invalid").required("Password is required").min(0, "Password is required"),
            photo: yup.string("Photo is invalid"),
            role: yup.string("Role invalid")
        })
    
        try {
            await handleSchemas.validate(validationSchema, userDto);

            const user = await userService.createUser(userDto);
            
            res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    }

    async function updateUserData(req, res, next) {
        const userDataDTO = req.body;

        const validationSchema = yup.object().shape({
            password: yup.string("Password invalid").required("Password is required"),
            repeatPassword: yup.string().required("Repeat password is required").oneOf([yup.ref('password'), null], 'Passwords must match'),
            oldPassword: yup.string().email("Email is invalid").required("Old password is required"),
        })
    }

    async function updatePassword(req, res, next) {
        const passwordsDTO = req.body;

        const validationSchema = yup.object().shape({
            password: yup.string("Password invalid").required("Password is required"),
            repeatPassword: yup.string().required("Repeat password is required").oneOf([yup.ref('password'), null], 'Passwords must match'),
            oldPassword: yup.string().email("Email is invalid").required("Old password is required"),
        })
        
        try {
            await handleSchemas.validate(validationSchema, passwordsDTO);

            await userService.updatePassword(passwordsDTO);

            res.status(200);
        } catch (error) {
            next(error);
        }
    }

    return {
        createUser,
        updatePassword,
    }
}



export default UserController
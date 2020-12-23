import { model, Schema } from "mongoose";

const userRolesSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    key: {
        type: String,
        required: true,
    }
});

export default model('user_roles', userRolesSchema);
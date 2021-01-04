import { model, Schema } from "mongoose";

const userRolesSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    key: {
        type: String,
        required: true,
    },
    is_deleted: {
        type: Boolean,
        default: false,
    }
});

export default model("user_roles", userRolesSchema);
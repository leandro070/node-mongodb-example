import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        default: 'USER_ROLE'
    },
    state: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false,
    }
});

export default model('users', userSchema);
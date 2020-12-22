import { Schema, model, plugin } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name required'],
    },
    email: {
        type: String,
        required: [true, 'Email required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password required'],
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
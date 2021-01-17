import { MongoDocument } from "./mongoDocument";

export interface IUser extends MongoDocument {
    name: string;
    email: string;
    password: string;
    photo: string;
    role: string;
    state: boolean;
    google: boolean;
}

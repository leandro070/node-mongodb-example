import { IUser } from "../models/users";
import MongoManager from "../services/MongoManager";
import { BaseRepository } from "./BaseRepository";

class UserRepository extends BaseRepository<IUser> {
    constructor(mongo: MongoManager) {
        super(mongo, "users");
    }
}

export default UserRepository;
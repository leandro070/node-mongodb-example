import { IUser } from "../models/users";
import { IDbRepository } from "./interfaces/iDBRepository";
import { IUserRepository } from "./interfaces/iUserRepository";

class UserRepository implements IUserRepository {
    constructor(
        private readonly db: IDbRepository
    ) {}

    async findById(id: number): Promise<IUser> {
        throw new Error("Method not implemented.");
    }
    async findByEmail(email: string): Promise<IUser> {
        throw new Error("Method not implemented.");
    }

    async create(user: IUser): Promise<boolean> {
        const result = await this.db.query('', []);

        return result[0];
    }

    async update(id: number, user: IUser): Promise<boolean> {        
        const result = await this.db.query('', []);

        return result[0];
    }
}

export default UserRepository;
import { IUser } from "../../models/users";

export interface IUserRepository {
    findById(id: number): Promise<IUser>;
    findByEmail(email: string): Promise<IUser>;
    create(user: IUser): Promise<boolean>;
    update(id: number, user: IUser): Promise<boolean>;
}
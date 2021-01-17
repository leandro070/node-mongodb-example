import { ObjectId } from "mongodb";

export interface IRead<T> {
    findAll(): Promise<T[]>;
    findBy(expression: unknown): Promise<T[]>;
    findOne(id: ObjectId): Promise<T>;
}
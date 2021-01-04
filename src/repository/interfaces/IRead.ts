export interface IRead<T> {
    findAll(): Promise<T[]>;
    findBy(expression: unknown): Promise<T[]>;
    findOne(id: string): Promise<T>;
}
export interface IWrite<T> {
    create(item: T): Promise<boolean>;
    update(id: string, item: T): Promise<boolean>;
    delete(id: string): Promise<boolean>;
    softDelete(id: string): Promise<boolean>;
}
export interface IWrite<T> {
    create(item: T): Promise<boolean>;
    update(id: Object, item: T): Promise<boolean>;
    delete(id: Object): Promise<boolean>;
    softDelete(id: Object): Promise<boolean>;
}
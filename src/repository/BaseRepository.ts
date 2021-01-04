import { Collection } from "mongodb";
import MongoManager from "../services/MongoManager";
import { IRead } from "./interfaces/IRead";
import { IWrite } from "./interfaces/IWrite";

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
    private _collection: Collection;

    constructor(mongo: MongoManager, collectionName: string) {
        mongo.run().then((db) => {
            this._collection = db.collection(collectionName);
        });
    }

    async create(item: T): Promise<boolean> {
        const result = await this._collection.insertOne(item);

        return !!result.result.ok;
    }

    async update(id: string, item: T): Promise<boolean> {
        const result = await this._collection.updateOne({ id }, { item });

        return !!result.result.ok;
    }

    async softDelete(id: string): Promise<boolean> {
        const result = await this._collection.updateOne({ id }, { "is_deleted": true });

        return !!result.result.ok;
    }

    async delete(id: string): Promise<boolean> {
        const result = await this._collection.deleteOne({ id });

        return !!result.result.ok;
    }

    async findAll(): Promise<T[]> {
        const result = await this._collection.find<T>({ "is_deleted": false }).toArray();

        return result;
    }

    async findBy(expression: any): Promise<T[]> {
        const result = await this._collection.find<T>(expression).toArray();

        return result;
    }

    async findOne(id: string): Promise<T> {

        const result = await this._collection.findOne<T>({ "_id": id });

        return result;
    }
}
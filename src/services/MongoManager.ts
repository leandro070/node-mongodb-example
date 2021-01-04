import { Db } from "mongodb";
import { MongoDatabase } from "../config/mongodb";

export default class MongoManager {
    public async run(): Promise<Db> {
        const mongoClient = await MongoDatabase.getInstance();
        const db = await mongoClient.getDB();
        return db;
    }
}
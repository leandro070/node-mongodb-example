import { connect, Db, MongoClient } from "mongodb";

export class MongoDatabase {
    private static connectionString: string = process.env.MONGODB_URI;
    private static instance: MongoDatabase;
    private db: Db;

    private constructor() { }

    public static getInstance(): MongoDatabase {
        if (!MongoDatabase.instance) {
            MongoDatabase.instance = new MongoDatabase();
        }

        return MongoDatabase.instance;
    }

    public getDB(): Promise<Db> {
        return new Promise((resolve, reject) => {
            if (this.db) {
                resolve(this.db);
            }

            connect(MongoDatabase.connectionString, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }, function (err: Error, client: MongoClient) {
                if (err) {
                    reject(err);
                }
                resolve(client.db());
            });
        });
    }
}

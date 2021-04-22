import {
  IDbRepository,
  IDbRepositoryConnectionOptions,
} from "./interfaces/iDBRepository";
import { Connection, createConnection, QueryError } from "mysql";

export class DbRepository implements IDbRepository {
  private connection: Connection;
  private _connectionOptions: IDbRepositoryConnectionOptions;

  async query(sql: string, args: Array<any>): Promise<any> {
    if (!this.connection) {
      this.connection = createConnection(this.getConnectionOptions());
    }

    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err: QueryError, rows) => {
        if (err) {
          reject(err);

          return;
        }

        resolve(JSON.parse(JSON.stringify(rows)));
      });
    });
  }

  async close(): Promise<boolean> {
    if (!this.connection) {
      return true;
    }

    return new Promise((resolve, reject) => {
      this.connection.end((err: QueryError) => {
        if (err) {
          reject(err);

          return;
        }

        this.connection = undefined;
        resolve(true);
      });
    });
  }

  private getConnectionOptions(): IDbRepositoryConnectionOptions {
    if (this._connectionOptions) {
      return this._connectionOptions;
    }

    return {
        database: process.env.DBNAME,
        host: process.env.DBHOST,
        password: process.env.DBPASSWORD,
        port: Number(process.env.DBPORT),
        user: process.env.DBUSER
    } as IDbRepositoryConnectionOptions;
  }
}

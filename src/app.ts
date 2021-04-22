import express, { Express, Router } from "express";
import morgan from "morgan";
import { handleError } from "./utils/handleErrors";
import createUserRouter from "./routes/userRoutes";
import createAuthRouter from "./routes/authRoutes";
import { IUserRepository } from "./repository/interfaces/iUserRepository";
import { IDbRepository } from "./repository/interfaces/iDBRepository";
import { DbRepository } from "./repository/dbRepository";
import UserRepository from "./repository/userRepository";

export interface IServices {
  dbRepository: IDbRepository;
  // App Services
  userRepository: IUserRepository;
}

export class App {
  private readonly _app: Express;
  private readonly _services: IServices;

  constructor() {
    const dbRepository = new DbRepository();

    this._services = {
      dbRepository,
      userRepository: new UserRepository(dbRepository),
    };

    this._app = express();
    const router = Router();
    this._app.use(express.json());
    this._app.use(morgan("dev"));
    this._app.use("/auth", createAuthRouter(router, this._services));
    this._app.use("/users", createUserRouter(router, this._services));
    this._app.use(handleError);
  }

  get services(): IServices {
    return this._services;
  }

  start() {
    const port = process.env.PORT || 3000;
    this._app.listen(port, () => {
      console.log("\u{1F4AA} Listening on port", port);
    });
  }
}

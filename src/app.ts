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
  private _router: Router;

  constructor() {
    const dbRepository = new DbRepository();

    this._services = {
      dbRepository,
      userRepository: new UserRepository(dbRepository),
    };

    this._app = express();
    this._router = Router();
    this._app.use(express.json());
    this._app.use(morgan("dev"));
  }

  get services(): IServices {
    return this._services;
  }

  setup() {
    this._app.use("/auth", createAuthRouter(this._router, this._services));
    this._app.use("/users", createUserRouter(this._router, this._services));
  }

  start() {
    const port = process.env.PORT || 3000;
    this._app.listen(port, () => {
      console.log("\u{1F4AA} Listening on port", port);
    });
  }
}

import "dotenv/config";
import express from "express";
import morgan from "morgan";
import createUserRouter from "./routes/userRoutes";
import createAuthRouter from "./routes/authRoutes";
import { handleError } from "./utils/handleErrors";
import RegisterService from "./config/registerServices";

const app = express();

const router = express.Router();

app.use(express.json());
app.use(morgan("dev"));

const container = RegisterService();

app.use("/auth", createAuthRouter(router, container));
app.use("/users", createUserRouter(router, container));
app.use(handleError);


console.log("Mongodb connected");

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("\u{1F4AA} Listening on port", port);
});

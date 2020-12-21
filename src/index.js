import express from "express";
import createUserRouter from "./routes/userRoutes";
import morgan from "morgan";

const app = express();

const router = express.Router();

app.use(express.json())
app.use(morgan('dev'))
app.use('/users', createUserRouter(router))

app.get('/', function(req, res) {
  res.send("MAIN");
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("Listening on port", port);
})


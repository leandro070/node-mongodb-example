import 'dotenv/config';
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import createUserRouter from "./routes/userRoutes";
import handleErrors from "./utils/handleErrors";

const app = express();

const router = express.Router();

app.use(express.json())
app.use(morgan('dev'))

app.use('/users', createUserRouter(router))

app.use(handleErrors);

mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)
mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb://localhost:27017/coffee');

mongoose.connection.on('close', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open',function() {
  console.log("Mongodb connected");

  const port = process.env.PORT || 3000
  app.listen(port, () => {
      console.log("Listening on port", port);
  })
})





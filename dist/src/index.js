"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var mongoose_1 = __importDefault(require("mongoose"));
var userRoutes_1 = __importDefault(require("./routes/userRoutes"));
var authRoutes_1 = __importDefault(require("./routes/authRoutes"));
var handleErrors_1 = __importDefault(require("./utils/handleErrors"));
var app = express_1.default();
var router = express_1.default.Router();
app.use(express_1.default.json());
app.use(morgan_1.default('dev'));
app.use('/auth', authRoutes_1.default(router));
app.use('/users', userRoutes_1.default(router));
var handlerError = new handleErrors_1.default();
app.use(handlerError.catchError);
mongoose_1.default.set('useNewUrlParser', true);
mongoose_1.default.set('useUnifiedTopology', true);
mongoose_1.default.set('useCreateIndex', true);
mongoose_1.default.connect(process.env.MONGODB_URI || "");
mongoose_1.default.connection.on('close', console.error.bind(console, 'connection error:'));
mongoose_1.default.connection.once('open', function () {
    console.log("Mongodb connected");
    var port = process.env.PORT || 3000;
    app.listen(port, function () {
        console.log("\uD83D\uDCAA Listening on port", port);
    });
});

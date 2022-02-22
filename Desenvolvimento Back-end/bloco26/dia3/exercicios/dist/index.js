"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const joiError_1 = __importDefault(require("./middlewares/error/joiError/joiError"));
const restaurants_1 = __importDefault(require("./routes/restaurants"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use('/restaurants', restaurants_1.default);
app.use(joiError_1.default);
app.listen(PORT, () => {
    `Listen on port ${PORT}`;
});

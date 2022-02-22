"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const joiError = (err, _req, res, next) => {
    if (!joi_1.default.isError(err)) {
        return next(err);
    }
    return res.status(400).json({ message: err.details[0].message });
};
exports.default = joiError;

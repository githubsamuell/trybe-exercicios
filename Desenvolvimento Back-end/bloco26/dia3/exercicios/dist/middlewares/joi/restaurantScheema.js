"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const restaurantScheema = joi_1.default.object({
    name: joi_1.default.string().required(),
    type: joi_1.default.string().required(),
    opens: joi_1.default.number().required(),
    closes: joi_1.default.number().required(),
});
exports.default = restaurantScheema;

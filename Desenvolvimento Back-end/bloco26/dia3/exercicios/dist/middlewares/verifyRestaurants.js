"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRestaurant = void 0;
const restaurantScheema_1 = __importDefault(require("./joi/restaurantScheema"));
const verifyRestaurant = (req, _res, next) => {
    const { error } = restaurantScheema_1.default.validate(req.body);
    if (error)
        throw error;
    next();
};
exports.verifyRestaurant = verifyRestaurant;

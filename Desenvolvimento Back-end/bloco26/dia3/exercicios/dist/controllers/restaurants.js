"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.findById = exports.findAll = void 0;
const restaurants_1 = __importDefault(require("../services/restaurants"));
const express_rescue_1 = __importDefault(require("express-rescue"));
const findAll = (0, express_rescue_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const restaurants = yield restaurants_1.default.findAll();
    res.status(200).json(restaurants);
}));
exports.findAll = findAll;
const findById = (0, express_rescue_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id)
        return res.status(404).json({ message: 'id missing' });
    const restaurant = yield restaurants_1.default.findById(id);
    res.status(200).json(restaurant);
}));
exports.findById = findById;
const create = (0, express_rescue_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newRestaurant = req.body;
    yield restaurants_1.default.create(newRestaurant);
    res.status(200).end();
}));
exports.create = create;

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
const promises_1 = __importDefault(require("fs/promises"));
const functionAuxiliar_1 = require("../functionAuxiliar");
const findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, functionAuxiliar_1.getJson)();
    return data;
});
const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, functionAuxiliar_1.getJson)();
    const resturantById = data.find((restau) => restau.id === id);
    return resturantById;
});
const create = (newRestaurant) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, functionAuxiliar_1.getJson)();
    const newId = data.length + 1;
    data.push(Object.assign({ id: newId }, newRestaurant));
    yield promises_1.default.writeFile('../data/restaurant.json', JSON.stringify(data));
});
exports.default = {
    findAll,
    findById,
    create
};

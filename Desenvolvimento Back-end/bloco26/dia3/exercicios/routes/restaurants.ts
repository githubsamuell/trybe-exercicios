import { Router } from "express";

import { verifyRestaurant } from "../middlewares/verifyRestaurants";

import {create,
findAll,
findById,
} from '../controllers/restaurants';

const restaurantes = Router();

restaurantes.get('/', findAll);
restaurantes.get('/:id', findById);
restaurantes.post('/', verifyRestaurant, create);

export default restaurantes;
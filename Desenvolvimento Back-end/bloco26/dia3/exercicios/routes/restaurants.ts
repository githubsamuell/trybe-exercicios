import { Router } from "express";

import { verifyRestaurant } from "../middlewares/verifyRestaurants";

import {create,
findAll,
findById,
} from '../controllers/restaurants';

const restaurantesRoute = Router();

restaurantesRoute.get('/', findAll);
restaurantesRoute.get('/:id', findById);
restaurantesRoute.post('/', verifyRestaurant, create);

export default restaurantesRoute;
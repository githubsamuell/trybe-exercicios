import restauranteService from '../services/restaurants';
import rescue from 'express-rescue';

import { RequestHandler } from 'express';

const findAll: RequestHandler = rescue(async (_req, res) => {
    const restaurants = await restauranteService.findAll();
  
    res.status(200).json(restaurants);
  });
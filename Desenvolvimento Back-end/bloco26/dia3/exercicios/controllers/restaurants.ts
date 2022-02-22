import restauranteService from '../services/restaurants';
import rescue from 'express-rescue';

import { RequestHandler } from 'express';

const findAll: RequestHandler = rescue(async (_req, res) => {
    const restaurants = await restauranteService.findAll();
  
    res.status(200).json(restaurants);
  });

  const findById: RequestHandler = rescue(async (req, res) => {
      const {id} = req.params;
      if(!id) return res.status(404).json({message:'id missing'});
      const restaurant = await restauranteService.findById(id);
      res.status(200).json(restaurant);
  });

  const create: RequestHandler = rescue(async(req, res) => {
      const newRestaurant = req.body;
      await restauranteService.create(newRestaurant);
      res.status(200).end();
  })

  export {findAll, findById, create};
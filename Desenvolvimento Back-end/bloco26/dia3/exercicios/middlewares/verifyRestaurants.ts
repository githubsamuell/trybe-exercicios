import { RequestHandler } from "express";

import restaurantScheema from "./joi/restaurantScheema";

const verifyRestaurant: RequestHandler = (req, _res, next) => {
    const { error } = restaurantScheema.validate(req.body);
    if(error) throw error;
    next();
} 
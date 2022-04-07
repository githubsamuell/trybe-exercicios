import { Router } from "express";
import CountryController from "../controllers/CountryController";

const routesCountry = Router();

const countryController = new CountryController ();

routesCountry.get('/', countryController.getAll);

export default routesCountry;





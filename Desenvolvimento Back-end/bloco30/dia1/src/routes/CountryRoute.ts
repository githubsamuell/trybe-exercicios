import { Router } from "express";
import CountryControllerFindByYear from "../controllers/tournaments/CountryControllerFindByYear";
import CountryControllerGetAll from "../controllers/tournaments/CountryControllerGetAll";
import CountryControllerGetALL from "../controllers/tournaments/CountryControllerGetAll";

const routesCountry = Router();

const countryGetAll = new CountryControllerGetAll();

const countryFinByYear = new CountryControllerFindByYear();

routesCountry.get('/', countryGetAll.handle);
routesCountry.get('/:id', countryFinByYear.handle);

export default routesCountry;





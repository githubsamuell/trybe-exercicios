import { Router } from "express";
import TournamentControllerCreate from "../controllers/tournaments/TournamentControllerCreate";
import TournamentControllerFindByYear from "../controllers/tournaments/TournamentControllerFindByYear";
import TournamentControllerGetAll from "../controllers/tournaments/TournamentControllerGetAll";

const routesTournament = Router();

const tournamentGetAll = new TournamentControllerGetAll();

const tournamentFinByYear = new TournamentControllerFindByYear();

const tournamentCreate = new TournamentControllerCreate();

routesTournament.get('/', tournamentGetAll.handle);
routesTournament.get('/:id', tournamentFinByYear.handle);
routesTournament.post('/', tournamentCreate.handle);

export default routesTournament;





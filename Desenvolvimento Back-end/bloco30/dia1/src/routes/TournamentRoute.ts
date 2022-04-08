import { Router } from "express";
import TournamentControllerCreate from "../controllers/tournaments/TournamentControllerCreate";
import TournamentControllerFindByYear from "../controllers/tournaments/TournamentControllerFindByYear";
import TournamentControllerGetAll from "../controllers/tournaments/TournamentControllerGetAll";
import TournamentControllerUpdate from "../controllers/tournaments/TournamentControllerUpdate";

const routesTournament = Router();

const tournamentGetAll = new TournamentControllerGetAll();

const tournamentFinByYear = new TournamentControllerFindByYear();

const tournamentCreate = new TournamentControllerCreate();

const tournamentUpdate = new TournamentControllerUpdate();

routesTournament.get('/', tournamentGetAll.handle);
routesTournament.get('/:id', tournamentFinByYear.handle);
routesTournament.post('/', tournamentCreate.handle);
routesTournament.patch('/:id', tournamentUpdate.handle);

export default routesTournament;





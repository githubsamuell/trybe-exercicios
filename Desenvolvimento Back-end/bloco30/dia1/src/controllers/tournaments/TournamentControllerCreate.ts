import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import TournamentModelCreate from "../../models/tournaments/TournamentsModelCreate";

class TournamentControllerCreate {
    constructor(private modelCreate = new TournamentModelCreate()){};

    handle = async (req: Request, res: Response): Promise<Response> => {
        const createTournament = await this.modelCreate.handle(req.body);
        return res.status(StatusCodes.CREATED).json(createTournament);
    }
}

export default TournamentControllerCreate;
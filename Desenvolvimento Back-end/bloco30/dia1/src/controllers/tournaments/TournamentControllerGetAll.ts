import { Response, Request } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import TournamentsModelgetAll from "../../models/tournaments/TournamentsModelGetAll";

class TournamentsControllerGetAll {
    private tournamentModel = new TournamentsModelgetAll();

    handle = async (_req: Request, res: Response): Promise<Response> => {
        const tournaments = await this.tournamentModel.handle();
        return res.status(StatusCodes.OK).json(tournaments);
    }
}

export default TournamentsControllerGetAll;
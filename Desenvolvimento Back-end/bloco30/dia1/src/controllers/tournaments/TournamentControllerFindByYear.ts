import { Response, Request } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import TournamentModelFindByYear from "../../models/tournaments/TournamentsModelFindByYear";

class TournamentControllerFindByYear {
    constructor(private findTournamentModel = new TournamentModelFindByYear ()){};

    handle = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params;
        const findTournament = await this.findTournamentModel.handle(Number(id));
        if (findTournament === null) return res.status(StatusCodes.NOT_FOUND).json({message: ReasonPhrases.NOT_FOUND});
        return res.status(StatusCodes.OK).json(findTournament);
    }
}

export default TournamentControllerFindByYear;
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import TournamentModelUpdate from "../../models/tournaments/TournamentModelUpdate";

class TournamentControllerUpdate {
    constructor(private modelUpdate = new TournamentModelUpdate()){};

    handle = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params;
        const UpdateTournament = await this.modelUpdate.handle(Number(id), req.body);
        return res.status(StatusCodes.OK).json(UpdateTournament);
    }
}

export default TournamentControllerUpdate;
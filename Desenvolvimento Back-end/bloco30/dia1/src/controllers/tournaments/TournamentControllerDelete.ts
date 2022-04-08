import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import TournamentModelDelete from "../../models/tournaments/TournmentModelDelete";

class TournamentControllerDelete {
    constructor(private modelCreate = new TournamentModelDelete()){};

    handle = async (req: Request, res: Response): Promise<Response> => {
        const deleteArgentina = await this.modelCreate.handle();
        return res.status(StatusCodes.CREATED).json(deleteArgentina);
    }
}

export default TournamentControllerDelete;
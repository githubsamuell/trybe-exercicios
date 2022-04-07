import CountryModel from "../models/CountryModel";
import { Response, Request } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

class CountryController {
    private countryModel = new CountryModel();

    getAll = async (_req: Request, res: Response): Promise<Response> => {
        const countrys = await this.countryModel.getAll();
        return res.status(StatusCodes.OK).json(countrys);
    }
}

export default CountryController;
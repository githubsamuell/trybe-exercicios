import { Response, Request } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import CountryModelgetAll from "../../models/tournaments/CountryModelGetAll";

class CountryControllerGetAll {
    private countryModel = new CountryModelgetAll();

    handle = async (_req: Request, res: Response): Promise<Response> => {
        const countrys = await this.countryModel.handle();
        return res.status(StatusCodes.OK).json(countrys);
    }
}

export default CountryControllerGetAll;
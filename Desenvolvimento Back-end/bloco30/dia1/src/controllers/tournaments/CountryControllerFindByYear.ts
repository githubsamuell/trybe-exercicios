import { Response, Request } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import CountryModelFindByYear from "../../models/tournaments/CountryModelFindByYear";

class CountryControllerFindByYear {
    constructor(private findCountryModel = new CountryModelFindByYear ()){};

    handle = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params;
        const findCountry = await this.findCountryModel.handle(Number(id));
        if (findCountry === null) return res.status(StatusCodes.NOT_FOUND).json({message: ReasonPhrases.NOT_FOUND});
        return res.status(StatusCodes.OK).json(findCountry);
    }
}

export default CountryControllerFindByYear;
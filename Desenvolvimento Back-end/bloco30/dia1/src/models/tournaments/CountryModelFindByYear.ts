import {model as createModel} from 'mongoose'
import { countrySchema, ICountry } from '../../Scheemas/CountryScheema';

class CountryModelFindByYear {
    constructor(private countryModel = createModel<ICountry>('tournaments', countrySchema)){};

    handle = async (yearR: number): Promise<ICountry[] | null> => {
        const countrys = await this.countryModel.find({year: yearR});
        if (!countrys  || !countrys.length) return null;
        return countrys;
    }
}

export default CountryModelFindByYear;
import {model as createModel} from 'mongoose';

import { ICountry, countrySchema } from '../Scheemas/CountryScheema';

class CountryModel {
    constructor(private countryModel = createModel<ICountry>('tournaments', countrySchema)){
        
    };

    getAll = async (): Promise<ICountry[]> => {
        const countrys = await this.countryModel.find();
        return countrys;
    }
}

export default CountryModel;
import {model as createModel} from 'mongoose';

import { ICountry, countrySchema } from '../../Scheemas/CountryScheema';

class CountryModelgetAll {
    constructor(private countryModel = createModel<ICountry>('tournaments', countrySchema)){
        
    };

    handle = async (): Promise<ICountry[]> => {
        const countrys = await this.countryModel.find();
        return countrys;
    }
}

export default CountryModelgetAll;
import {model as createModel} from 'mongoose'
import { tournamentSchema, ITournament } from '../../Scheemas/TournamentSchema';

class TournamentsModelFindByYear {
    constructor(private countryModel = createModel<ITournament>('tournaments', tournamentSchema)){};

    handle = async (yearR: number): Promise<ITournament[] | null> => {
        const tournaments = await this.countryModel.find({year: yearR});
        if (!tournaments  || !tournaments.length) return null;
        return tournaments;
    }
}

export default TournamentsModelFindByYear;
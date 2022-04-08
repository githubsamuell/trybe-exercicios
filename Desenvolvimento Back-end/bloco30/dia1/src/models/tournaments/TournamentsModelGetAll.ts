import {model as createModel} from 'mongoose';

import { ITournament, tournamentSchema } from '../../Scheemas/TournamentSchema';

class TournamentModelgetAll {
    constructor(private tournamentModel = createModel<ITournament>('tournaments', tournamentSchema)){
        
    };

    handle = async (): Promise<ITournament[]> => {
        const tournaments = await this.tournamentModel.find();
        return tournaments;
    }
}

export default TournamentModelgetAll;
import mongoose from "mongoose";
import { ITournament, tournamentSchema } from "../../Scheemas/TournamentSchema";

class TournamentModelCreate {
    constructor(private model = mongoose.model('tournaments', tournamentSchema)){}

    handle = async (infoTournament: ITournament): Promise<ITournament> => {
        try {
        const createTournament = await this.model.create(infoTournament);
        return infoTournament;
        } catch (e) {
            throw new Error('Algum Campo invalido');
        }
    }
}

export default TournamentModelCreate;
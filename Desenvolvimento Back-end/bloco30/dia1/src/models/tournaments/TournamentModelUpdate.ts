import mongoose from "mongoose";
import { ITournament, tournamentSchema } from "../../Scheemas/TournamentSchema";

class TournamentModelUpdate {
    constructor(private model = mongoose.model('tournaments', tournamentSchema)){}

    handle = async (id: number, infoTournament: ITournament): Promise<ITournament | null> => {
        try {
        const updateTournament = await this.model.findOneAndUpdate({year: id}, infoTournament, {new: true});
        if (!updateTournament) return null;
        return updateTournament;
        } catch (e) {
            throw new Error('Algum Campo invalido');
        }
    }
}

export default TournamentModelUpdate;
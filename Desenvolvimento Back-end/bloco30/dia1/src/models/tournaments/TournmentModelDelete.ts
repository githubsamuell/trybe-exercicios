import mongoose from "mongoose";
import { ITournament, tournamentSchema } from "../../Scheemas/TournamentSchema";

class TournamentModelDelete {
    constructor(private model = mongoose.model('tournaments', tournamentSchema)){}

    handle = async (): Promise<String> => {
        try {
        const updateTournament = await this.model.deleteOne({champions: "Argentina"});
        return "Argentina has no one Tropheus";
        } catch (e) {
            throw new Error('Algum Campo invalido');
        }
    }
}

export default TournamentModelDelete;
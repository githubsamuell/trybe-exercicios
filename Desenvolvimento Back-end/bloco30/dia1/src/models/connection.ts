import { connect, Schema, model } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connection = () => connect('mongodb://localhost:27017/world_cups', {user: process.env.USER, pass: process.env.PASSWORD});

interface ICountry {
      year: number,
      hostCountry: string,
      champions: string,
      runnerUp: string,
      editionGoals: number,
      editionStrikers: string[],
      bestPlayer: string,
      bestGoalkeeper: string,
      bestYoungPlayer: string
}

const countrySchema = new Schema<ICountry>({
    year: {type: Number, required: true},
    hostCountry: {type: String, required: true},
    champions: {type: String, required: true},
    runnerUp: {type: String, required: true},
    editionGoals: {type: Number, required: true},
    editionStrikers: {type: [String], required: true},
    bestPlayer: {type: String, required: true},
    bestGoalkeeper: {type: String, required: true},
    bestYoungPlayer: {type: String, required: true}
});

const cupModel = model<ICountry>('countrys', countrySchema);


export default connection;
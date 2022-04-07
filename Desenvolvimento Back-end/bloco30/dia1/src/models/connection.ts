import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connection = (mongoDataBaseUri = 'mongodb://127.0.0.1:27017/world_cups') => connect(mongoDataBaseUri);


export default connection;
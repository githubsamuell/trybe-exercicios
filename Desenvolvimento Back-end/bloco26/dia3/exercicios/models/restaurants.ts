import fs from 'fs/promises'
import Restaurante from '../interfaces/restaurant'

const findAll = async () => {
    const data = await fs.readFile('../data/restauran.json', 'utf-8');
    const dataJson: Restaurante[] = JSON.parse(data);

    return data;
};


export default {
    findAll
}
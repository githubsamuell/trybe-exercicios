import fs from 'fs/promises';
import Restaurante from './interfaces/restaurant';

export const getJson = async () => {
    const data = await fs.readFile('./data/restaurant.json', 'utf-8');
    const dataJson: Restaurante[] = JSON.parse(data);
    return dataJson
}
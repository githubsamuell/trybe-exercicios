import fs from 'fs/promises'
import Restaurante from '../interfaces/restaurant'
import { getJson } from '../functionAuxiliar';

const findAll = async () => {
    const data = await fs.readFile('../data/restauran.json', 'utf-8');
    const dataJson: Restaurante[] = JSON.parse(data);

    return data;
};

const findById = async (id: number) => {
    const data = await getJson();

    const resturantById =  data.find((restau) => restau.id === id);
        return resturantById;
    
}

export default {
    findAll,
    findById
}
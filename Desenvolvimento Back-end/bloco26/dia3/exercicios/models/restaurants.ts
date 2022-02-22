import fs from 'fs/promises'
import Restaurante from '../interfaces/restaurant'
import { getJson } from '../functionAuxiliar';

const findAll = async () => {
    const data = await getJson();
    return data;
};

const findById = async (id: number) => {
    const data = await getJson();
    const resturantById =  data.find((restau) => restau.id === id);
        return resturantById;
    
}

const create = async(newRestaurant: Restaurante) => {
    const data = await getJson();
    const newId = data.length + 1;
    data.push({ id:newId, ...newRestaurant});
    await fs.writeFile('../data/restaurant.json', JSON.stringify(data));
}

export default {
    findAll,
    findById,
    create
}
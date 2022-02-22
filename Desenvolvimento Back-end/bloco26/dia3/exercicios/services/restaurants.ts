import restauranteModel from '../models/restaurants';
import Restaurante from '../interfaces/restaurant';

const findAll = async () => {
    const restaurants = await restauranteModel.findAll();
    return restaurants;
}

const findById = async (id: string) => {
    const restaurantId = Number(id);
    const resturantById = await restauranteModel.findById(restaurantId);
    return resturantById

}

const create = async (newRestaurant: Restaurante) => {
    await restauranteModel.create(newRestaurant);
}
export default {
    findAll,
    findById,
    create
};
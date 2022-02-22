import restauranteModel from '../models/restaurants';

const findAll = async () => {
    const restaurants = await restauranteModel.findAll();
    return restaurants;
}

const findById = async (id: string) => {
    const restaurantId = Number(id);
    const resturantById = await restauranteModel.findById(restaurantId);
    return resturantById

}
export default {
    findAll,
    findById
};
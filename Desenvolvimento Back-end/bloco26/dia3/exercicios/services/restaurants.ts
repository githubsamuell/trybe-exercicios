import restauranteModel from '../models/restaurants';

const findAll = async () => {
    const restaurants = await restauranteModel.findAll();
    return restaurants;
}

export default {
    findAll
};
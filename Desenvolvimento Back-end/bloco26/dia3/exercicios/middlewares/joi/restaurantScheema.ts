import joi from 'joi';

const restaurantScheema = joi.object({
    name: joi.string().required(),
    type: joi.string().required(),
    opens: joi.number().required(),
    closes: joi.number().required(),
})

export default restaurantScheema;
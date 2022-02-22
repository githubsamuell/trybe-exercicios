require('dotenv').config();
import express from "express";
import joiError from "./middlewares/error/joiError/joiError";

import restaurantesRoute from "./routes/restaurants";

const app = express();

const PORT = process.env.PORT || 5000;

app.use('/restaurants', restaurantesRoute)

app.use(joiError);

app.listen(PORT, () => {
    `Listen on port ${PORT}`
})
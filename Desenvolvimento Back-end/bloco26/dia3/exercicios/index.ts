require('dotenv').config();
import express, { Request, Response } from "express";

const app = express();

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    `Listen on port ${PORT}`
})
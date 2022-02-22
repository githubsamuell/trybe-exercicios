import { ErrorRequestHandler } from "express";

import joi from 'joi'

const joiError: ErrorRequestHandler = (err, req, res, next) => {
    if (!joi.isError(err)) {
        return next(err)
    }

    return res.status(400).json({message: err.details[0].message});
}

export default joiError;
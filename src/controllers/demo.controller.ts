import { NextFunction, Request, Response } from 'express';

import { getCatFact } from '../services/demo.service.js';

export const getCatFactController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await getCatFact();
        res.status(200).send(response);
    } catch (err) {
        next(err);
    }
};

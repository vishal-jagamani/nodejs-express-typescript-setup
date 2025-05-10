import { NextFunction, Request, Response } from 'express';

import { getCatFact } from '../services/demo.service.js';
import { createApiError } from '../utils/api.error.js';

export const getCatFactController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.query;
        if (!id)
            throw createApiError(
                400,
                'Missing query parameter:id',
                'The `id` parameter is required for this API.',
                'Pass an `id` as a query parameter.',
            );
        const response = await getCatFact();
        res.status(200).send(response);
    } catch (err) {
        next(err);
    }
};

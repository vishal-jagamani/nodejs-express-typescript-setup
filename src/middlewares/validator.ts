import { NextFunction, Request, Response } from 'express';
import { ZodSchema } from 'zod';

export const validate =
    (schema: ZodSchema, source: 'body' | 'query' | 'params' = 'body') =>
    (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req[source]);
        if (!result.success) {
            res.status(400).json({ errors: result.error.flatten() });
            return;
        }
        (req as Request).validated = result.data;
        next();
    };

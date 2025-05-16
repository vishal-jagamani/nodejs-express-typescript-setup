import { NextFunction, Request, Response } from 'express';
import { ENABLE_AUTH } from '../config/config';

const noAuth = (req: Request, res: Response, next: NextFunction) => {
    next();
};

const auth = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) res.status(401).send('Unauthorized');
        else {
            // Implement auth logic
            next();
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
        res.status(401).send('Unauthorized');
    }
};

export const authMiddleware = () => (ENABLE_AUTH ? auth : noAuth);

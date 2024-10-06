import { NextFunction, Request, Response, Router } from 'express';
import { getCatFact } from '../services/demo.service.js';

const router = Router();

router.get('/catFact', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await getCatFact();
        res.status(200).send(response);
    } catch (err) {
        next(err);
    }
});

export default router;

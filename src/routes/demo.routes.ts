import { NextFunction, Request, Response, Router } from 'express';

import { getCatFactController } from '../controllers/demo.controller.js';
import { errorObject } from '../types/general.types.js';

const router = Router();

router.get('/catFact', getCatFactController);

// Route-Specific Error Handling Middleware
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.use((err: errorObject, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500).json({
        error: {
            code: err.status || 500,
            message: err.message || 'Internal Server Error',
            description: 'An error occurred while processing your request.',
            suggestedAction: 'Try again later or contact support.',
        },
    });
});

export default router;

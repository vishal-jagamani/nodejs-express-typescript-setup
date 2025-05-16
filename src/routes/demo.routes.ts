import { Router } from 'express';

import { getCatFactController } from '../controllers/demo.controller.js';
import { validate } from '../middlewares/validator.js';
import { handleRequest } from '../utils/request.handler.js';
import { catFactQuerySchema } from '../validators/demo.validator.js';

const router = Router();

router.get('/catFact', validate(catFactQuerySchema, 'query'), handleRequest(getCatFactController));

export default router;

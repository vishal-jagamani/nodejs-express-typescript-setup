import { Router } from 'express';

import { getCatFactController } from '../controllers/demo.controller.js';
import { handleRequest } from '../utils/request.handler.js';

const router = Router();

router.get('/catFact', handleRequest(getCatFactController));

export default router;

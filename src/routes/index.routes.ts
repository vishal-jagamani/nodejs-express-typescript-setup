import { Router } from 'express';

import demoRoutes from './demo.routes.js';

const router = Router();

router.use('/demo', demoRoutes);

export default router;

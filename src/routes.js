import { Router } from 'express';
import Cars from './controllers/Cars.js';

const router = Router();

router.get('/cars', Cars.all);

export default router;

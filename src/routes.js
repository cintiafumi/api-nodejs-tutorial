import { Router } from 'express';
import CarsController from './controllers/Cars.js';

const router = Router();

router.get('/cars', CarsController.all);
router.post('/cars', CarsController.create);

export default router;

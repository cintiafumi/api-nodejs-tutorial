import { Router } from 'express';

import AuthController from './controllers/AuthController.js';
import CarsController from './controllers/CarsController.js';

const router = Router();

router.get('/cars', CarsController.all);
router.post('/cars', AuthController.auth, CarsController.create);

router.post('/login', AuthController.login);

router.get('/secure', AuthController.auth, (req, res) => {
  res.json({ message: 'This is a secure route!', username: req.username });
});

export default router;

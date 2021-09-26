import { Router } from 'express';
import { signinController } from '../controllers/authControllers';

const router = Router();

router.post('/signin', signinController)

export default router;
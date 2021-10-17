import { Router } from 'express';
import { addKeysController, checkKeysController } from '../controllers/keyControllers';

const router = Router();

router.patch('/update-keys', addKeysController)

router.post('/check-keys', checkKeysController)


export default router;
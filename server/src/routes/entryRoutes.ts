import { Router } from 'express';
import { createEntryController, deleteEntryController, getEntryContoller, updateEntryController } from '../controllers/entryController';

const router = Router();

router.get('/get-entries', getEntryContoller);

router.post('/create-entry', createEntryController);

router.patch('/update-entry', updateEntryController);

router.delete('/delete-entry', deleteEntryController);

export default router;
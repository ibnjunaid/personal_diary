import { Router } from 'express';
import { createEntryController, deleteEntryController, updateEntryController } from '../controllers/entryController';

const router = Router();

router.post('/create-entry', createEntryController)

router.patch('/update-entry', updateEntryController)

router.delete('/delete-entry', deleteEntryController)

export default router;
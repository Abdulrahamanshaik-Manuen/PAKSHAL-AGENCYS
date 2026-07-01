import express from 'express';
import { getCollections, updateCollection } from '../Controllers/collectionsController.js';

const router = express.Router();

router.get('/', getCollections);
router.put('/:id', updateCollection);

export default router;

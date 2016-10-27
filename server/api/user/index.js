import express from 'express';
import controller from './controller';

let router = express.Router();

router.get('/', controller.index);
router.post('/', controller.create);
router.post('/auth', controller.auth);

export default router;
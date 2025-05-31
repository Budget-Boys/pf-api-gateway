import { Router } from 'express';
import * as userController from '../controllers/user.controller';

const router = Router();

router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);
router.post('/register', userController.registerUser);
router.post('login', userController.loginUser);

export default router;
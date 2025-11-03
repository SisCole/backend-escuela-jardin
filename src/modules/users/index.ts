import { Router } from 'express';
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from './users.controller';
import { validateUserBody, validateUserParams } from './middlewares/users.middleware';

const router = Router();

router.get('/', getAllUsers);
router.post('/', validateUserBody, createUser);
router.get('/:userId', validateUserParams, getUserById);
router.put('/:userId', validateUserParams, validateUserBody, updateUser);
router.delete('/:userId', validateUserParams, deleteUser);

export default router;
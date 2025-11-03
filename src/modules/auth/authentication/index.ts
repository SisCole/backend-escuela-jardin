import { Router} from 'express';
import { login, logout, me } from './auth.controller';
import { validateAuthBody } from './middlewares/auth.middleware';

const router = Router();

router.post('/login', validateAuthBody, login);
router.post('/logout', logout);
router.get('/me', me);

export default router;
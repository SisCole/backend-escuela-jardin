import { Response, NextFunction } from 'express';
import { userValidationSchema } from '../validators/users.middleware';
import { UserRequest } from '../types/user.type';

export async function validateUserBody(req: UserRequest, res: Response, next: NextFunction) {
    const { error } = userValidationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details.map(detail => detail.message) });
    }
    next();
}

export async function validateUserParams(req: UserRequest, res: Response, next: NextFunction) {
    
    const { userId } = req.params;

    if (!userId) {
        return res.status(400).json({ error: 'El ID del usuario es requerido' });
    }

    if (isNaN(Number(userId)) || Number(userId) <= 0) {
        return res.status(400).json({ error: 'El ID del usuario debe ser un número positivo' });
    }

    next();
}
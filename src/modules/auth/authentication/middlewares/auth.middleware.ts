import { Request, Response, NextFunction } from 'express';
import { authValidationSchema } from '../validators/auth.validator';
import { AuthRequest } from '../types/auth.type';

export function validateAuthBody(req: AuthRequest, res: Response, next: NextFunction) {
    const { error } = authValidationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details.map(detail => detail.message) });
    }
    next();
}
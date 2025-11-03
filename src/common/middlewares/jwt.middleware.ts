import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../lib/jsonwebtoken';
import createHttpError from 'http-errors';

export function verifyTokenMiddleware(req: Request, res: Response, next: NextFunction) {
    if (req.url.includes('/login')) {
        next();
    }
    const token = req.cookies.token;
    if (!token) {
        throw createHttpError(401, 'Token no encontrado');
    }
    const decoded = verifyToken(token);
    if (!decoded) {
        throw createHttpError(401, 'Token inválido');
    }
    next();
}
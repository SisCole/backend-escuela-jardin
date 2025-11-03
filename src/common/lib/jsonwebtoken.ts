import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import { JWT_SECRET, JWT_EXPIRATION } from '../../config/config';

export interface TokenPayload {
    idUser: number;
    email: string;
    idRole: number;
}

export const generateToken = (payload: TokenPayload): string => {
    const options: SignOptions = { expiresIn: "24h" };
    return jwt.sign(payload, JWT_SECRET as Secret, options);
};

export const verifyToken = (token: string): TokenPayload | null => {
    try {
        const decoded = jwt.verify(token, JWT_SECRET as Secret) as TokenPayload;
    return decoded;
    } catch (error) {
        console.error('Invalid token:', error);
        return null;
    }
};
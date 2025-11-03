import createHttpError from 'http-errors';
import { comparePassword } from '../../../common/lib/bycript';
import { generateToken, verifyToken } from '../../../common/lib/jsonwebtoken';
import UsersService from '../../users/users.service';

async function loginService(email: string, password: string) {
    const user = await UsersService.getUserByEmailService(email);
    if (!user) {
        throw createHttpError(401, 'Credenciales inválidas');
    }
    const ok = await comparePassword(password, user.password);
    if (!ok) {
        throw createHttpError(401, 'Credenciales inválidas');
    }
    const token = generateToken({
        idUser: user.idUser,
        email: user.email,
        idRole: user.idRole
    });
    return {
        token: token
    };
}

async function meService(token: string) {
    const decoded = verifyToken(token);
    if (!decoded) {
        throw createHttpError(401, 'Token inválido');
    }
    const user = await UsersService.getUserByIdService(decoded.idUser);
    return user;
}

export default {
    loginService,
    meService,
}
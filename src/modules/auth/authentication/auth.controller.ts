import { Request, Response } from 'express';
import AuthService from './auth.service';
import { AuthRequest } from './types/auth.type';

export async function login(req: AuthRequest, res: Response) {
    const { email, password } = req.body;
    const auth = await AuthService.loginService(email, password);
    res.cookie('token', auth.token, { 
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 , // 24 horas
    });
    res.status(200).json({ message: "Login exitoso" });
}

export async function logout(_: Request, res: Response) {
    res.clearCookie('token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
    });
    res.status(200).json({ message: "Logout exitoso" });
}

export async function me(req: Request, res: Response) {
    const user = await AuthService.meService(req.cookies.token);
    res.status(200).json({ message: "Datos de usuario obtenidos correctamente", data: user });
}


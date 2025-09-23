import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import { Usuario } from '../models/usuario.entity';
import { Rol } from '../models/rol.entity';
import { comparePassword } from '../../../lib/bycript';
import { generateToken } from '../../../lib/jsonwebtoken';

// normalizar bcrypt hash
function normalizeBcryptHash(hash: string) {
	if (hash.startsWith('$2y$')) return '$2a$' + hash.substring(4);
	return hash;
}

export async function login(req: Request, res: Response, next: NextFunction) {
	const { email, password } = req.body || {};
	if (!email || !password) {
		throw createError(400, 'Email y password son requeridos');
	}

	const user = await Usuario.findOne({ where: { email }, include: [Rol] });
	if (!user) {
		throw createError(401, 'Credenciales inválidas');
	}
	if (user.estado !== 'activo') {
		throw createError(403, `Usuario ${user.estado}`);
	}

	const stored = normalizeBcryptHash(user.password_hash);
	const ok = await comparePassword(password, stored);
	if (!ok) {
		throw createError(401, 'Credenciales inválidas');
	}

	const token = generateToken({
		id_usuario: user.id_usuario,
		email: user.email,
		rol: user.rol?.nombre || '',
	});

	res.json({
		id_usuario: user.id_usuario,
		email: user.email,
		estado: user.estado,
		id_rol: user.id_rol,
		rol: user.rol?.nombre || undefined,
		token,
	}).status(200);
}

export async function getUserByEmail(email: string) {
	return await Usuario.findOne({ where: { email }, include: ['rol'] });
}


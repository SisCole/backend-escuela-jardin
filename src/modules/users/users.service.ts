import { User } from './model/user.entity';
import { UserEntity } from './types/user.type';
import httpError from 'http-errors';
import { Role } from '../roles/model/role.model';

async function getAllUsersService() {
    const users = await User.findAll({ include: [Role] });
    return users;
}

async function createUserService(user: UserEntity) {
    const newUser = await User.create(user);
    if (!newUser) {
        throw httpError(500, 'Error al crear usuario');
    }
    return newUser;
}

async function getUserByEmailService(email: string) {
    const user = await User.findOne({ where: { email }, include: [Role] });
    if (!user) {
        throw httpError(404, 'Usuario no encontrado');
    }
    return user;
}

async function getUserByIdService(id: number) {
    const user = await User.findByPk(id, { include: [Role], attributes: { exclude: ['password'] }});
    if (!user) {
        throw httpError(404, 'Usuario no encontrado');
    }
    return user;
}

async function updateUserService(id: number, user: UserEntity) {
    const [ affectedRows ] = await User.update(user, { where: { idUser: id } });
    if (affectedRows === 0) {
        throw httpError(404, 'Usuario no encontrado');
    }
    return affectedRows;
}

async function deleteUserService(id: number) {
    const affectedRows = await User.destroy({ where: { idUser: id } });
    if (affectedRows === 0) {
        throw httpError(404, 'Usuario no encontrado');
    }
    return affectedRows;
}

export default {
    createUserService,
    getUserByIdService,
    updateUserService,
    deleteUserService,
    getUserByEmailService,
    getAllUsersService,
}
import { Request, Response } from 'express';
import UsersService from './users.service';
import { UserRequest } from './types/user.type';

export async function getAllUsers(req: Request, res: Response) {
    const users = await UsersService.getAllUsersService();
    res.status(200).json({ message: "Usuarios obtenidos", data: users });
}

export async function createUser(req: UserRequest, res: Response) {
    const user = await UsersService.createUserService(req.body);
    res.status(201).json({ message: "Usuario creado", data: user });
}

export async function getUserById(req: UserRequest, res: Response) {
    const { userId } = req.params;
    const user = await UsersService.getUserByIdService(Number(userId));
    res.status(200).json({ message: "Usuario obtenido", data: user });
}

export async function updateUser(req: UserRequest, res: Response) {
    const { userId } = req.params;
    const affectedRows = await UsersService.updateUserService(Number(userId), req.body);
    res.status(200).json({ message: "Usuario actualizado", data: affectedRows });
}

export async function deleteUser(req: UserRequest, res: Response) {
    const { userId } = req.params;
    const affectedRows = await UsersService.deleteUserService(Number(userId));
    res.status(200).json({ message: "Usuario eliminado", data: affectedRows });
}
import { Request } from 'express';

export interface UserRequest extends Request {

    body: Omit<UserEntity, 'idUser'>;

    params: {
        userId: string;
    }
}

export interface UserEntity {
    idUser: number;
    email: string;
    password: string;
    idRole: number;
}
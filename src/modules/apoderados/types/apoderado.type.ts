import { Request } from 'express';
import { InferAttributes } from 'sequelize';
import { Apoderado } from '../models/apoderado.entity';

//type general
export interface ApoderadoRequest extends Request {
    body: Omit<ApoderadoEntity, 'idApoderado'>;
    params: {
        id: string;
    }
}

export interface ApoderadoEntity {
    idApoderado?: number;
    nombre: string;
    apellido: string;
    dni: string;
    email: string;
    fechaNacimiento?: Date;
    direccion?: string;
    telefono?: string;
    ocupacion?: string;
}
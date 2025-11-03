import { Request } from 'express';

export interface DocenteRequest extends Request {
    body: Omit<DocenteEntity, 'idDocente'>;

    params: {
        id: string;
    }
}

export interface DocenteEntity {
    idDocente?: number | null;
    nombre: string;
    apellido: string;
    dni: string;
    email: string;
    fechaNacimiento?: Date;
    fechaIngreso?: Date;
    direccion?: string;
    telefono?: string;
    idUser?: number | null;
}

